<template>
    <button @click="onClick()" :style="{color: color}" class="btn">{{text}} </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String,

    },
    methods: {
        onClick() {
            console.log("Clicked")
        }
    }


}
</script>

<style scoped>
    button {
        border: 1px solid red;
    }
</style>

