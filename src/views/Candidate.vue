<script>
import Button from '../components/basic/Button.vue';
import { candidateStore } from '../store/candidate.js'
import { contractStore } from '../store/contractStore.js'

// import { $store } from '../$store';
export default {
    name: 'Candidate',
    setup() {
        const contract_store = contractStore()
        const candidate_store = candidateStore()
        return {
            contract_store, candidate_store
        }
    },
    data() {
        return {
            count: -1,
            candidate: {
                name: '',
                age: '',
                party: '',
            }
        }
    },
    components: {
        Button
    },
    mounted() {

    },
    methods: {
        async addCandidate12() {
            try {
                if (this.candidate.name != '' && this.candidate.age != '' && this.candidate.party != '') {
                    this.count++
                    let response = await this.contract_store.contract.addCandidate(this.candidate.name, this.candidate.age, this.candidate.party)
                    // await this.candidate_store.addCandidate({
                    //     name: this.candidate.name,
                    //     age: this.candidate.age,
                    //     party: this.candidate.party
                    // })
                    this.candidate_store.pushCandidate({
                        Candidate: {
                            name: this.candidate.name,
                            age: this.candidate.age,
                            party: this.candidate.party,
                            id: this.count
                        }
                    })

                    console.log(`success ${response}`)
                    alert(`Successfully Candidate Added name ${this.candidate.name} age ${this.candidate.age} party ${this.candidate.party}  `)

                } else {
                    alert('all fields are required')
                }
            } catch (e) {
                console.log(`this.addCandidate12 is showing error`)
                console.log(e)
            }
        },
    }
}
</script>

<template>
    <div class="cont">
        <router-link class="back" :to="{ name: 'Home' }">
            <Button text="Home"></Button>
        </router-link>
        <div class="registration">
            <div class="registration-img">
                <img src="../assets/images/register.svg" alt="">
            </div>
            <div class="registration-cont">
                <span>Candidate <br> Registration</span>
                <div class="register-input">
                    <label>Name</label>
                    <input placeholder="Firstname" v-model="this.candidate.name" type="text">
                </div>

                <div class="register-input">
                    <label>Age</label>
                    <input placeholder="Age" v-model="this.candidate.age" type="text">
                </div>
                <div class="register-input">
                    <label>Party</label>
                    <input placeholder="Party Name" v-model="this.candidate.party" type="text">
                </div>
                <Button @click="this.addCandidate12" text="Register" />
            </div>
        </div>
    </div>

</template>

<style scoped>
label {
    color: var(--grey);
    font-weight: bold;
}

.cont {
    display: flex;
    background: var(--primary);
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.back {
    margin: 2rem;
    width: 6rem;
    justify-self: center;
    align-self: flex-end;
}

.registration {
    height: 90vh;
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