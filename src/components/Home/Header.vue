<script>
import Navbar from "../basic/Navbar.vue";
import Button from "../basic/Button.vue";
import { backend } from "../../backend/index.js";
import { contractStore } from "../../store/contractStore.js";
import { candidateStore } from "../../store/candidate.js";


// import { store } from '../../store/index.js'
export default {
  name: "Header",
  setup() {
    const contract_store = contractStore();
    const candidate_store = candidateStore();
    return {
      contract_store,
      candidate_store,
    };
  },
  data() {
    return {
      election: "",
    };
  },
  components: {
    Navbar,
    Button,
  },
  methods: {
    async getElection() {
      this.election = await this.contract_store.contract1.owner();
      console.log("ji");
      console.log(this.election);
    },
    async push() {
      let res = await this.contract_store;
      console.log("hi");
      console.log(res);
    },
    async add() {
      try {
        let res = await client.add( {path: "test.txt",
  content: "Hello IPFS!"},);
        console.log("Ajay")
        console.log(res)
      } catch (e) {
        console.log("Ajay error")
        console.log(e);
      }
    },
  },
  computed: {
    show() {
      return $store.state.firstName;
    },
  },
  mounted() {
    this.getElection();
    this.push();
    console.log("main");
  
  },
};
</script>
<template>
  <header>
    <div class="hero">
      <div class="hero-cont">
        <div class="st1_first">
          <span
            >Secure Voting made
            <span style="color: var(--secondary)">Simple</span></span
          >
          <p style="font-size: 1.2rem">
            <span style="color: var(--secondary); font-size: 32px">E</span>
            -Vote will manage the voters role for your online ballot on your
            behalf.
          </p>
        </div>
      </div>
      <div class="content">
        <span class="content-text1">Be a part of Decision </span>
        <span class="content-text2">Vote Today</span>
        <div class="contect-btn">
          <router-link :to="{ name: 'Register' }"
            ><Button text="Register"
          /></router-link>
          <router-link :to="{ name: 'Admin' }"
            ><Button text="Admin"
          /></router-link>
        </div>
      </div>
    </div>
    <div class="banner">
      <div class="banner-feat">
        <span>FEATURES</span>
        <div class="vl"></div>
      </div>
      <div class="banner-content">
        <span>Secured by 256 bit Encryption</span>
        <span>Backed by Etherium based technology</span>
        <span>Verifiable Transaction</span>
        <span>Easy to use</span>
        <span>Faster Voting process</span>
      </div>
    </div>
  </header>
  <div></div>
</template>
<style scoped>
.banner {
  background: var(--white);

  height: 50vh;
  display: flex;
  flex-direction: row;
}

.banner-feat {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.banner-content {
  margin-left: 1rem;
  flex: 2.5;
  gap: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--primary);
}

.banner-content span {
  color: var(--primary);
}

.banner-feat span {
  color: var(--primary);
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 1.5rem;
}

header {
  margin: 0;
  padding: 0;
  background: var(--primary);
  color: var(--white);
}

.hero-cont {
  margin: auto;
}

.vl {
  height: 16rem;
  border: 2px solid var(--primary);
  border-radius: 20%;
}

.hero-img {
  height: 190px;
}

.st1_first {
  width: 40rem;
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.st1_first span {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.st2 {
  flex: 1;
  padding: 5rem 5rem;
}

.content {
  margin: auto auto;
  display: flex;
  flex-direction: column;
}

.content-text1 {
  font-size: 2rem;
}

.contect-btn {
  margin: 1rem 0rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
}

.content-text2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--secondary);
}

.hero {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 60vh;
  gap: 1rem;
}
</style>
