<template>
    <div class="noMatches">
        <h2>No matches found</h2>
    </div>
    <img class="image" src="../assets/unib_emoji_10.png" alt="emoji10">
    <div class="try">
        <h2>Try again later!</h2>
    </div>
    <div class="centeredButton">
        <div class="notifyMe" :class="this.btnThema === 'light' ? 'lightColor' : this.btnThema === 'deepLightColor' ? 'deepLightColor' : 'deepColor'" >
        {{notifyMe}}
        </div>
    </div>

    
</template>
<script>
    export default {
        name: "MatchNotFound",
        data() {
            return {
                notifyMe: "Notify Me for Match"
            }
        },
        methods: {
            buttonClick() {}
        }
    }
</script>
<style>
    .noMatches {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
        padding-top: 30%;
    }
    .try {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
        padding-top: 5%;
    }
    .image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 45%;
        padding-top: 10%;
    }
    .lightColor {
        background-color: #f6f5f9;
        color: #000000;
    }
    .deepColor {
        background-color: #5F61BD;
        color: #FFFFFF;
    }
    .deepLightColor {
        background-color: #ffffff;
        color: #000000;
    }
    .notifyMe {
        cursor: pointer;
        width: fit-content;
        line-height: 30px;
        border-radius: 5px;
        min-width: 3rem;
        height: 40px;
        padding: 0 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        flex: 0.6;
        font-family: 'Josefin Sans', sans-serif;
    }
    .centeredButton {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 5%;
    }
</style>