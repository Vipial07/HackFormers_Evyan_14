// import { createStore } from 'vuex'
// // import createPersistedState from "vuex-persistedstate";
// import VuexPersistence from 'vuex-persist'
// // const vuexLocal = new VuexPersistence({
// //     storage: window.localStorage
// // })
// export default createStore({
//     state: {
//         electionName: '',
//         contract: '',
//         contract1: '',
//         voter_address: '',
//         totalvotes: '',
//         owner: '',
//         Candidate: {
//             name: '',
//             age: '',
//             party: '',
//             numvotes: ''
//         },
//         Voters: {
//             name: '',
//             age: '',
//             party: '',
//             numvotes: '',
//             fathername: '',
//             phone_number: '',
//             email: '',
//             authorised: '',
//             voted: '',
//         }
//     },
//     mutations: {
//         setContract1(state, payload) {
//             state.contract = payload.contract
//             state.contract1 = payload.contract1
//         },
//         setElectionName1(state, payload) {
//             state.electionName = payload.electionName
//         },
//         setVoters1(state, payload) {
//             state.Voters.name = payload.name
//             state.Voters.fathername = payload.fathername
//             state.Voters.age = payload.age
//             state.Voters.phone_number = payload.phone_number
//             state.Voters.email = payload.email
//             state.Voters.authorised = payload.authorised
//             state.Voters.voted = payload.voted
//         },
//         setVoterAddress1(state, payload) {
//             state.voter_address = payload.voter_address
//         }
//     },
//     actions: {
//         setContract(context, payload) {
//             context.commit('setContract1', payload)
//         },
//         setElectionName(context, payload) {
//             context.commit('setElectionName1', payload)
//         },
//         setVoters(context, payload) {
//             context.commit('setVoters1', payload)
//         },
//         setVoterAddress(context, payload) {
//             context.commit('setVoterAddress1', payload)
//         }
//     },
//     getters: {
//         voter_address_return(state) {
//             return state.voter_address
//         }

//     },
//     // plugins: [vuexLocal.plugin]
//     // plugins: [createPersistedState()]
// });

