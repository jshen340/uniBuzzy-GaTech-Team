<template>
    <div class="noMatches">
        <h2>No matches found</h2>
    </div>
    <img class="image" src="../assets/unib_emoji_10.png" alt="emoji10">
    <div class="try">
        <h2>Try again later!</h2>
    </div>
    <div class="centeredButton">
        <div class="notifyMe" :class="this.btnThema === 'light' ? 'lightColor' : this.btnThema === 'deepLightColor' ? 'deepLightColor' : 'lightColor'" >
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
        background-color: #ffffff;
        color: #2FB2E7;
    }
    .deepColor {
        background-color: #2FB2E7;
        color: #FFFFFF;
    }
    .deepLightColor {
        background-color: #ffffff;
        color: #000000;
    }
    .notifyMe {
        cursor: pointer;
        border: 3px solid #2FB2E7;
        line-height: 30px;
        border-radius: 20px;
        min-width: 3rem;
        height: 45px;
        padding: 0 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        width: 40%;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
    }
    .centeredButton {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 7%;
    }
</style>