<script>
import Header from '../components/Home/Header.vue';
import { backend } from '../backend';
import { contractStore } from '../store/contractStore';
import { voterStore } from '../store/voter';
export default {
    name: 'Home',
    setup() {
        const contract_store = contractStore()
        const voter_store = voterStore()
        return {
            contract_store, voter_store
        }
    },
    data() {
        return {

        }
    },
    components: {
        Header
    },
    methods: {

    },
    beforeMount() {
        backend.loader();
    },
    async mounted() {
        console.log(`Contract address ${this.contract_store.contract.address}`)
        console.log(`Voter address ${this.voter_store.voter_address}`)
        this.voter_store.$reset()
        try {
        let res=await this.contract_store.contract.electionName()
        console.log(res)
      } catch (e) {
        console.log(e);
      }
    },

}
</script>

<template>
    <div class="home">
        <Header />
    </div>
</template>
<style scoped>

</style>