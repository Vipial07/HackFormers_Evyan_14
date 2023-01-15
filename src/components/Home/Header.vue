<script>
import Navbar from '../basic/Navbar.vue';
import Button from '../basic/Button.vue';
// import { store } from '../../store/index.js'
export default {
    name: 'Header',
    data() {
        return {
            firstName: 'Ajay',
            lastName: 'Jaiswal'
        }
    },
    components: {
        Navbar,
        Button
    },
    methods:
    {
        
    },
    computed: {
        show() {
            return $store.state.firstName
        }
    },
    mounted() {

    }
}
</script>
<template>

    <header>
        <Navbar about="About" contact="Contact" button="Start" />
        <div class="hero">
            <div class="hero-cont">
                <img class="hero-img" src="../../assets/images/title2.svg" alt="">
            </div>
            <div class="content">
                <span class="content-text1">Be a part of Decision </span>
                <span class="content-text2">Vote Today</span>
                <div class="contect-btn">
                    <router-link :to="{ name: 'Register' }"><Button text="Register" /></router-link>
                    <Button @click="this.comp" text="Read More" />
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
    <div>

    </div>
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
    gap: 2rem
}

.content-text2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--secondary)
}

.hero {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 60vh;
    gap: 1rem;
}
</style>