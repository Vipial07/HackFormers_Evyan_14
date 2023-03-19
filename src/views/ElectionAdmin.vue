<script>
import Button from '../components/basic/Button.vue';
import { backend } from '../backend';
import { voterStore } from '../store/voter.js';
import { candidateStore } from '../store/candidate.js'
import { contractStore } from '../store/contractStore.js'
export default {
    name: 'ElectionAdmin',
    setup() {
        const voter_store = voterStore()
        const contract_store = contractStore()
        const candidate_store = candidateStore()
        return {
            voter_store, contract_store, candidate_store
        }
    },
    data() {
        return {
            voter_address: '',
            candidates: '',
            total_votes: '',
            length: '',
            authorize:'',
            electionstart:''
        }
    },

    components: {
        Button
    },

    methods: {
        async getElectionStarted(){
            this.electionstart=await this.contract_store.owner()
            
        },
        async authorizeVoter1() {
            try {
                let response = await this.contract_store.contract.authorizeVoter1(this.voter_store.voter_address)
                console.log(`success ${response}`)
                this.authorize=response.toString()
                alert('Authorized done')
            } catch (e) {
                console.log(e)
            }
        },
        async first() {
            
            let length = await this.contract_store.contract.getNumCandidates()
            console.log(length.toString())
            this.length = length.toString()
            if (this.length){
                for (let i = 0; i < this.length; i++) {
                let response = await this.contract_store.contract.candidates(i)
                this.candidate_store.pushCandidate({
                    id: i,
                    name: response.name,
                    age: response.age,
                    party: response.party,
                    numvotes: response.numVotes
                })
            }
            }
            
            // console.log(response)

        },
        async getTotalVotes1() {
            try {
                let response = await this.contract_store.contract.getTotalVotes()
                console.log(`success ${response.toString()}`)
                this.total_votes = response.toString()
                
            } catch (e) {
                console.log(e)
            }
        },
        refresh() {
            this.getTotalVotes1()
            this.first()
            window.location.reload()
        },
        async Vote1(id) {
            try {
                // console.log(this.vote)
                if(this.authorize!=''){
                    if (this.voter_store.Voters.voted != true ) {
                    const contract = backend.voterSigner(this.voter_store.voter_address)
                    console.log("id", id)
                    console.log(this.voter_store.voter_address)
                    console.log(this.contract_store.contract_signer)
                    await this.contract_store.contract_signer.vote(id)
                    this.first()
                    this.voter_store.voted()
                    // console.log(`success from vote ${response}`)
                    // this.voter_store.voted()
                    alert('Voted')
                    location.reload()
                    this.first()
                    this.getTotalVotes1()
                } else {
                    alert('Already voted')
                }
                }else{
                    alert('You have to authorized yourself')
                }
            } catch (e) {
                console.log(e)
            }
        },
    },
    beforeMount() {
        backend.loader();
        
        // this.first()
        // this.getTotalVotes1()
    },
    mounted() {
        
        // console.log()
         this.first()
         this.getTotalVotes1()
         console.log(this.candidate_store.candidates)
    },
    updated(){
        
    }

}
</script>
<template>
    <div class="election">
        <nav>
            <!-- <ul> Election Name </ul> -->
            <label class="Monitor"> E-VOTE </label>
            <div class="Home">
                <router-link :to="{ name: 'Home' }">
                    <Button text="Home Page"></Button>
                </router-link>
                <Button @click="refresh" text="Refresh Page"></Button>
            </div>

        </nav>
        <div class="register-input">

            <!-- <input v-model="this.vote_address" placeholder="Enter Voter Address" type="text"> -->
            <Button @click="this.authorizeVoter1" text="Authenticate"></Button>
        </div>
        <div class="election-cont">
            <div class="grid">
                <label id="totalvotes">Total <br> votes</label>
                <div class="vl"></div>
                <label id="totalvotes1">{{ total_votes }}</label>
            </div>
            <div v-for="candidate in this.candidate_store.candidates" :key="candidate" class="container">
                <div class="content">
                    <div class="details">
                        <label>Name:{{ candidate.name }}</label>
                        <label>Age:{{ candidate.age }}</label>
                        <label>Party:{{ candidate.party }}</label>
                        <label>Number of Votes:{{ candidate.numvotes }}</label>
                    </div>
                    <Button @click="this.Vote1(candidate.id)" text="vote"></Button>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.register-input {
    margin: 1.5rem 0;
    display: flex;
    flex-direction: row;
    /** background: green;**/
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;

}

label {
    color: var(--secondary);
    font-weight: bold;
}

::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--secondary);
    opacity: 0.7;
    /* Firefox */
}

input {
    width: 20rem;
    height: 2rem;
    color: var(--primary);
    border-radius: 8px;
    padding: 1rem;
}


.election {
    height: 100vh;
    background: var(--primary);
}

.container {
    height: 100%;
}

.vl {
    border: 1px solid grey;
    height: 10rem;
}

#totalvotes {
    color: grey;
    font-size: 4rem;
    font-weight: 900;
    letter-spacing: 2px;
}

#totalvotes1 {
    color: grey;
    font-size: 8rem;
    font-weight: 900;
    letter-spacing: 4px;
}

.content {
    margin: 1rem auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    background: var(--white);
    padding: 1rem;
    border-radius: 20px;

}

.grid {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


    background: var(--primary);
}

.grid label {
    margin: auto 10rem;
    flex: 1;

    align-self: center;
}

.details {
    display: flex;
    flex-direction: column;
}

.details label {
    color: var(--primary);
    font-size: 1rem;
}

.election-cont {
    padding: 1rem;

    background: var(--primary);

}

nav {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 4rem;
    font-weight: bold;
    color: var(--white);
    background: var(--primary);
    width: 100%;
    position: relative;

}

nav label {
    flex: 1
}

/** .Home {
    position: absolute;
    left: 85vw;
    display: flex;
    gap:1rem;
}
.Home Button{
flex:1
} **/
.Home {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: flex-end;
    align-content: flex-end;
}

label {
    font-size: 2rem;
    letter-spacing: 2px;
}
</style>
