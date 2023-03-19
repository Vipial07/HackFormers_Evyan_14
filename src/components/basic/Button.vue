<script>
export default {
    name: 'Button',
    data() {
        return {

        }
    },
    props: {
        text: String
    }
}
</script>
<template>
    <button>
        {{ text }}
    </button>
</template>

<style scoped>
button {
    padding: 5px 15px;
    border-radius: 8px;
    background: var(--secondary);
    font-size: 1rem;
    font-weight: 400;
    color: var(--white);
    transition: all .35s ease-in-out;
    border:1px solid var(--secondary);
    cursor: pointer;
}

button:hover {
    
    background: blue
}
</style>