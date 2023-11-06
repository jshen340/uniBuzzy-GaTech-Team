<template>
<h1>What are you wearing? Help your buddy find you!<h1>
<img :src="character" alt="image-item">
<input type="text" placeholder="Enter Description" v-model="description">
<button type ="button" v-on:click="getData()">Ready!</button>

</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            character: "./assets/unib7.png",
            description: null
        }
    },
    methods: {
        getData() {
            console.warn("values : ", this.description)
        }
    }
}
</script>

<style scoped>
h1 {
    color: orange
}
</style>