
import { defineStore } from 'pinia'
export const voterStore = defineStore(
    'voter',
    {
        state: () => (
            {
                Voters: {
                    name: '',
                    age: '',
                    lastname: '',
                    phone_number: '',
                    aadhar_card: '',
                    authorised: '',
                    voted: '',
                },
                voter_address: ''
            }
        ),
        persist: true,
        getters: {
            // doubleCount: (state) => state.count * 2,
        },
        actions: {
            increment() {
                this.count++
            },
            addVoters(payload) {
                this.Voters.name = payload.name;
                this.Voters.age = payload.age
                this.Voters.lastname = payload.lastname
                this.Voters.phone_number = payload.phone_number
                this.Voters.aadhar_card = payload.aadhar_card
                this.Voters.authorised = payload.authorised
                this.Voters.voted = payload.voted
            },
            addVoteraddress(payload) {
                this.voter_address = payload.voter_address
            },
            voted() {
                this.Voters.voted = true
            }
        },
    })