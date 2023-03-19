<script>
import Button from '../components/basic/Button.vue';
import { backend } from '../backend';
import { voterStore } from '../store/voter.js';
import { contractStore } from '../store/contractStore.js'
import { candidateStore } from '../store/candidate.js'
// import { this.$store } from '../this.$store';
export default {
    name: 'Login',
    setup() {
        const voter_store = voterStore()
        const contract_store = contractStore()
        const candidate_store = candidateStore()
        return {
            voter_store, contract_store,candidate_store
        }
    },
    data() {
        return {
            vote: {
                
                aadhar_card: '',
               
                voter_address: '',
                
            }
        }

    },
    methods: {
        async addVoter12() {
            try {
                if ( this.vote.voter_address != '' && this.vote.aadhar_card != '' && this.vote.aadhar_card.length===12) {
                try{
                    const res=await this.contract_store.contract.voters(this.vote.voter_address) 
                    if (res.aadhar_card===this.vote.aadhar_card){
                        this.voter_store.addVoteraddress({voter_address:this.vote.voter_address})
                        this.$router.push({name:'Dashboard'})
                    }
                }catch(e){
                    console.log(e)
                    alert("Wrong Credentials")
                }
                  console.log("hi ajay is here")
                  console.log(this.vote.aadhar_card,this.vote.voter_address)

                    // localStorage.setItem('voter_address', JSON.stringify(vote_address1))
                    
                    

                    // this.$router.push({ name: 'edit', params: { id: joke.id }})
                } else {
                    alert('Invalid Credentials')
                }
            } catch (e) {
                console.log(`Add Voter from register problems`)
                console.log(e.message)
            }
        }
    },
    components: {
        Button
    },
    beforeMount() {
        backend.loader();
    },
    mounted() {
        console.log(this.contract_store.contract.address)
        console.log(`State Voter Address ${this.voter_store.voter_address}`)
        if (this.voter_store.voter_address) {
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>

<template>
    <div class="registration">
        <div class="registration-img">
            <img src="../assets/images/register.svg" alt="">
        </div>
        <div class="registration-cont">
            <span>Login</span>
           
            <div class="register-input">
                <label>Voter Address</label>
                <input placeholder="Enter voter  No" v-model="this.vote.voter_address" type="text">
            </div>
            <div class="register-input">
                <label>Aadhar(UIDAI) No</label>
                <input placeholder="Enter Aadhar card No" v-model="this.vote.aadhar_card" type="text">
            </div>
            
            <Button @click="addVoter12" text="Login" />
            <span style="font-size: 1.1rem"
        >Don't have an Account ?
        <router-link :to="{ name: 'Register' }" style="text-decoration: none"
          ><span style="color: var(--secondary); font-size: 1.1rem">Register Here</span>
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