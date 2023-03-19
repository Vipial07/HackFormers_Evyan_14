<script>
import Button from "../components/basic/Button.vue";
// import { $store } from '../$store';
import { candidateStore } from "../store/candidate.js";
import { contractStore } from "../store/contractStore.js";
import { backend } from "../backend";
export default {
  name: "Admin",
  setup() {
    const contract_store = contractStore();
    const candidate_store = candidateStore();
    return {
      contract_store,
      candidate_store,
    };
  },
  data() {
    return {
      election_name: "",
    };
  },
  components: {
    Button,
  },
  beforeMount(){
    backend.loader();
  }
  ,
  mounted() {
    console.log("game")
   
    console.log(this.contract_store.election_name)
  },
  methods: {
   
async startElection1(){
    this.$router.push({ name: "ElectionAdmin" });
},

    async startElection() {
      try {
        if (this.election_name != "") {
          let response = await this.contract_store.contract.startElection(
            this.election_name
          );

          this.contract_store.addElectionName({
            election_name: this.election_name,
          });

          console.log(`success owner ${this.contract_store.election_name}`);
          alert("Election has been started");
          this.$router.push({ name: "Candidate" });
        } else {
          alert("Election names are required");
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<template>
  <div class="Admin">
    <div class="welcome">
      <h1>WELCOME</h1>
      <span>
        Electronic voting in polling stations is in place in some of the world’s
        largest democracies, and Internet voting is used in some, initially
        mainly small and historically conflict-free, countries. Many countries
        are currently considering introducing e-voting systems with the aim of
        improving various aspects of the electoral process.
      </span>
    </div>
    <div v-if="this.contract_store.election_name===''" class="election">
      <div class="register-input">
        <label>Enter Election Name</label>
        <input
          v-model="this.election_name"
          placeholder="Enter Election Name"
          type="text"
        />
        <Button text="Submit" @click="startElection"></Button>
        <Button text="Current Election Result" @click="startElection1"></Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 4rem;
  color: var(--secondary);
}

.register-input {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-size: 2rem;
  color: var(--secondary);
  font-weight: 500;
}

input {
  width: 20rem;
  height: 2rem;
  color: var(--primary);
  border-radius: 8px;
  padding: 1rem;
}

.Admin {
  background: var(--primary);
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.welcome {
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto auto;
}

.election {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
