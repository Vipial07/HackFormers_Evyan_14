<script>
import Button from "../components/basic/Button.vue";

import { backend } from "../backend";
import { voterStore } from "../store/voter.js";
import { contractStore } from "../store/contractStore.js";
import { candidateStore } from "../store/candidate.js";

// import { this.$store } from '../this.$store';
export default {
  name: "Register",
  setup() {
    const voter_store = voterStore();
    const contract_store = contractStore();
    const candidate_store = candidateStore();
    return {
      voter_store,
      contract_store,
      candidate_store,
    };
  },
  data() {
    return {
      ipfs:"",
      vote: {
        name: "",
        lastname: "",
        phone: "",
        age: "",
        aadhar_card: "",
        voteraddress: "",
      },
    };
  },
  methods: {
    
    created(){
      this.ipfs=new IPFS();
    },
    async addVoter12() {
      try {
        if (
          this.vote.name != "" &&
          this.vote.age != "" &&
          this.vote.lastname != "" && this.vote.age>17 && this.vote.aadhar_card.length===12 && this.vote.phone.length===10 &&
          this.vote.aadhar_card != "" &&
          this.vote.phone != "" &&
          this.vote.aadhar_card != "" &&
          this.vote.voteraddress != ""
        ) {
console.log(this.vote.aadhar_card.length)
        

          let response = await this.contract_store.contract.addVoter(
            this.vote.voteraddress,
            this.vote.name,
            this.vote.lastname,
            this.vote.phone,
            this.vote.aadhar_card,
            this.vote.age
          );
          alert("Successfully Voter Added");

          this.voter_store.addVoteraddress({
            voter_address: this.vote.voteraddress,
          });
         

          const vote_address1 = {
            voter_address: this.vote.voteraddress,
          };

          // localStorage.setItem('voter_address', JSON.stringify(vote_address1))
          this.$router.push({ name: "Dashboard" });
          this.$router.push({ name: "Dashboard" });


          // this.$router.push({ name: 'edit', params: { id: joke.id }})
        } else {
          alert("Invalid Credentials");
        }
      } catch (e) {
        console.log(`Add Voter from register problems`);
        console.log(e.message);
      }
    },
  },
  components: {
    Button,
  },
  beforeMount() {
    backend.loader();
  },
  mounted() {
    console.log(this.contract_store.contract.address);
    console.log(`State Voter Address ${this.voter_store.voter_address}`);
    if (this.voter_store.voter_address) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<template>
  <div class="registration">
    <div class="registration-img">
      <img src="../assets/images/register.svg" alt="" />
    </div>
    <div class="registration-cont">
      <span>Registration</span>
      <div class="register-input">
        <label>FirstName</label>
        <input
          placeholder="Enter Firstname"
          v-model="this.vote.name"
          type="text"
        />
      </div>
      <div class="register-input">
        <label>Lastname</label>
        <input
          placeholder="Enter Lastname"
          v-model="this.vote.lastname"
          type="text"
        />
      </div>
      <div class="register-input">
        <label>PhoneNumber</label>
        <input
          placeholder="Enter Phone number"
          v-model="this.vote.phone"
          type="text"
        />
      </div>
      <div class="register-input">
        <label>Aadhar Card</label>
        <input
          placeholder="Enter Aadhar card No"
          v-model="this.vote.aadhar_card"
          type="text"
        />
      </div>
      <div class="register-input">
        <label>Age</label>
        <input placeholder="Enter Age" v-model="this.vote.age" type="text" />
      </div>
      <div class="register-input">
        <label>Voter Address</label>
        <input
          placeholder="Enter Voter Address"
          v-model="this.vote.voteraddress"
          type="text"
        />
      </div>

      <Button @click="addVoter12" text="Register" />

      <span style="font-size: 1.1rem"
        >Already Registered ?
        <router-link :to="{ name: 'Login' }" style="text-decoration: none"
          ><span style="color: var(--secondary); font-size: 1.1rem">Login</span>
        </router-link>
      </span>
    </div>
  </div>
</template>

<style scoped>
.registration {
  height: 100vh;
  background: var(--primary);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.registration-img {
  margin: auto;
}

Button {
  margin-top: 5px;
}

.registration-img img {
  height: 25rem;
}

.register-input {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

span {
  font-size: 2.5rem;
}

input {
  width: 20rem;
  height: 2rem;
  color: var(--primary);
  border-radius: 8px;
  padding: 1rem;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--secondary);
  opacity: 0.7;
  /* Firefox */
}

.registration-cont {
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
</style>
