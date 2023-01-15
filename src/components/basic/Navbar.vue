<script>
import Button from './Button.vue';
export default {
    name: 'Navbar',
    data() {
        return {

        }
    },
    components: {
        Button
    },
    props: {
        content1: String,
        content2: String,
        button: String
    }
}
</script>
<template>
    <nav>
        <ul> {{ content1 }} </ul>
        <ul> {{ content2 }} </ul>
        <router-link :to="{ name: 'Admin' }">
            <Button :text='button' />
        </router-link>
    </nav>
</template>

<style scoped>
nav {
    padding: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 4rem;
    font-weight: bold;
    color: var(--white);
    background: var(--primary);
}
</style>