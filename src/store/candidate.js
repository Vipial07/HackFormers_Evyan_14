import { defineStore } from 'pinia'

export const candidateStore = defineStore(
    'candidate',
    {
        state: () => (
            {
                count:-1,
                Candidate: {
                    name: '',
                    age: '',
                    party: '',
                    numvotes: 0,
                    id:0,
                },
                election:'0x0000000000000000000000000000000000000000',
                candidates: [],
                candidateslength: ''
            }
        ),
        // persist: true,
        getters: {
            // doubleCount: (state) => state.count * 2,
        },
        actions: {
            increment() {
                this.count++
            },
            addCandidate(payload) {
                this.count++
                this.Candidate.name = payload.name;
                this.Candidate.age = payload.age;
                this.Candidate.party = payload.party;
                this.Candidate.id=this.count
            },
            pushCandidate(payload) {
                this.candidates.push(payload)
            }
        },
    })