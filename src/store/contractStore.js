import { defineStore } from 'pinia'

export const contractStore = defineStore(
    'contract',
    {
        state: () => (
            {
                contract: '',
                owner: '',
                contract1: '',
                total_votes: '',
                election_name: '',
                contract_signer:''
            }
        ),
        persist:true,
        getters: {
            // doubleCount: (state) => state.count * 2,
        },
        actions: {
            increment() {
                this.count++
            },
            addContract(payload) {
                this.contract = payload.contract
                this.contract1 = payload.contract1
            },
            addContractSigner(payload) {
                this.contract_signer = payload.contract_signer
                
            },
            addElectionName(payload) {
                this.election_name = payload.election_name
            },
            addVotes(payload){
                this.total_votes=payload.total_votes
            },
            addOwner(payload){
                this.owner=payload.owner
            }

        },
    })