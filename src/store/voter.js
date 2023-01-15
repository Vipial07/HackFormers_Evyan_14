
import { defineStore } from 'pinia'
export const voterStore = defineStore(
    'voter',
    {
        state: () => (
            {
                Voters: {
                    name: '',
                    age: '',
                    fathername: '',
                    phone_number: '',
                    email: '',
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
                this.Voters.fathername = payload.fathername
                this.Voters.phone_number = payload.phone_number
                this.Voters.email = payload.email
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