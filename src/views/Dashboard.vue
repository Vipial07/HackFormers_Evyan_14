<script>
import Navbar from '../components/basic/Navbar.vue';
import Button from '../components/basic/Button.vue';
import { backend } from '../backend';
import { reactive } from '@vue/reactivity';
import { voterStore } from '../store/voter.js';
import { contractStore } from '../store/contractStore.js'
// import { this.$store } from '../this.$store/index.js';
export default {
    name: 'Dashboard',
    setup() {
        const voter_store = voterStore()
        const contract_store = contractStore()
        return {
            voter_store, contract_store
        }
    },
    data() {
        return {
            show: true,
            voter_address: '',
            data: reactive({
                name: '',
                lastname: '',
                phone_number: '',
                aadhar_card: '',
                age: '',
                authorised: '',
                voted: ''
            }),
            vote: {
                name: '',
                lastname: '',
                phone: '',
                age: '',
                aadhar_card: '',

            }
        }
    },
    components: {
        Navbar,
        Button
    },
    methods: {
        enabled() {
            this.show = !this.show
        },


        async Voters() {
            try {

                console.log(`voter address ${this.voter_store.voter_address}`)
                let voter_address = JSON.parse(localStorage.getItem('voter'))
                this.voter_store.addVoteraddress({ voter_address: voter_address.voter_address })
                var response = await this.contract_store.contract.voters(this.voter_store.voter_address)
                console.log(`Voters from Dashboard`)
console.log(response)
                if (response) {
                    this.voter_store.addVoters({
                        name: response.name,
                        lastname: response.lastname,
                        age: response.age,
                        phone_number: response.phone_number,
                        aadhar_card: response.aadhar_card,
                        authorised: response.authorised,
                        voted: response.voted
                    })
                }
                console.log(`Voters from Dashboard`)


                // console.log(response.authorised.toString())
                // console.log(response.name.toString())
                // console.log(response.whom.toString())
                // console.log(response.voted.toString())
            } catch (e) {
                console.log(e)
            }
        },
        async updateVoter12() {
            try {
                if (this.vote.name != '' && this.vote.lastname != '' && this.vote.age != '' && this.vote.phone_number != '' && this.vote.aadhar_card != '') {
                    let response1 = await this.contract_store.contract.addVoter(this.voter_store.voter_address, this.vote.name, this.vote.lastname, this.vote.phone_number, this.vote.aadhar_card, this.vote.age);
                    var response = await this.contract_store.contract.voters(this.voter_store.voter_address)
                    alert(response)
                    this.voter_store.addVoters({
                        name: response.name,
                        lastname: response.lastname,
                        age: response.age,
                        phone_number: response.phone_number,
                        aadhar_card: response.aadhar_card,
                        authorised: response.authorised,
                        voted: response.voted
                    })
                    // window.location.reload()
                    this.show = !this.show
                } else {
                    alert('All fields are required')
                }
            } catch (e) {
                console.log(`Update problems`)
                console.log(e)
            }
        }
    },

    beforeMount() {
        backend.loader();
        this.Voters();
    },
    mounted() {


        // this.setValue()


    },
    updated() {
        if (!this.voter_store.voter_address) {
            this.$router.push({ name: 'Register' })
        }
    }
}
</script>

<template>
    <div class="election">
        <!-- Navbar -->
        <nav>
            <ul> Personal Info </ul>
            <router-link :to="{ name: 'Election' }">
                <Button text='Election' />
            </router-link>
        </nav>

        <div class="profile">
            <div class="profile-left">
                <img id="image" src="../assets/images/profile.svg" alt="">
                <span>Profile</span>
                <!-- <span @click="this.enabled" id="edit">Edit Profile</span> -->
                <Button @click="this.enabled" text="Edit Profile"></Button>
                <Button v-if="!this.show" @click="this.updateVoter12" text="Submit"></Button>
            </div>
            <div class="profile-right">
                <div class="register-input">
                    <label>First Name </label>
                    <input v-if="!this.show" v-model="this.vote.name" placeholder="First Name" type="text">
                    <label class="label" v-if="this.show">{{ this.voter_store.Voters.name }} </label>
                </div>
                <div class="register-input">
                    <label>Last Name </label>
                    <input v-if="!this.show" v-model="this.vote.lastname" placeholder="Father Name" type="text">
                    <label class="label" v-if="this.show">{{ this.voter_store.Voters.lastname }} </label>
                </div>  
                <div class="register-input">
                    <label>Age</label>
                    <input v-if="!this.show" v-model="this.vote.age" placeholder="Age" type="text">
                    <label class="label" v-if="this.show">{{ this.voter_store.Voters.age }} </label>
                </div>
                <div class="register-input">
                    <label>Phone Number</label>
                    <input v-if="!this.show" v-model="this.vote.phone_number" placeholder="Phone Number" type="text">
                    <label class="label" v-if="this.show">{{ this.voter_store.Voters.phone_number }}</label>
                </div>
                <div class="register-input">
                    <label>aadhar_card Address</label>
                    <input v-if="!this.show" v-model="this.vote.aadhar_card" placeholder="aadhar_card Address" type="text">
                    <label class="label" v-if="this.show">{{ this.voter_store.Voters.aadhar_card }}</label>
                </div>
                <div class="register-input">
                    <label>Authorised</label>
                    <label class="label">{{ this.voter_store.Voters.authorised }}</label>

                </div>
                <div class="register-input">
                    <label>Voted</label>
                    <label class="label">{{ this.voter_store.Voters.voted }}</label>

                </div>
               
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    background: var(--primary);

}

.label {
    width: 20rem;
    padding: 0px;
    color: var(--white);
    font-size: 1.2rem;
    font-weight: bold;
}

span {
    font-size: 1.2rem;
}

.register-input {
    margin: 0 0;
    display: flex;
    flex-direction: column;
    /** background: green;**/
    gap: 4px;
    justify-content: center;
    align-items: flex-start;

}

.profile-left {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 80vh;
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
    background: var(--grey);
    border-radius: 8px;
    padding: 1rem;
}


#edit {
    background: var(--secondary);
    color: var(--white);
    padding: 5px 9px;
    border-radius: 8px;
    cursor: pointer;
}

#image {
    height: 15rem;
}

.profile-right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    row-gap: 1px;

}

.profile {

    background: var(--primary);
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 1rem;
}

label {
    color: var(--secondary)
}

nav {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    font-weight: bold;
    color: var(--white);
    background: var(--primary);
    height: 8rem;
}
</style>
