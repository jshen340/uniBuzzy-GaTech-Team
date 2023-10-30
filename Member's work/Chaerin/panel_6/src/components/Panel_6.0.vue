<template>
    <div class="match">
        <h2>You Matched with </h2>
        <h2>{{ name }}!</h2> <!-- add name variable from their name -->
    </div>
        <div class="centeredBox">
            <div class="box">
            <ul class="list">
                <li>
                    <img class="emoji8" src="../assets/unib_emoji_8.png" alt="profile picture" /> <!-- user profile picture -->
                </li>
                <li>
                    <img class= "locationIcon">
                    <h4>Location{{Location}}</h4> <!-- add location variable from matched location -->
                </li>
                <li>
                    <img class="clothingIcon">
                    <h4>Clothing{{Clothing}}</h4> <!-- add clothing variable from clothing -->
                </li>
            </ul>
        </div>
    </div>
    
    <div class="centeredButton">
        <div class="contact_button" :class="this.btnThema === 'light' ? 'lightColor' : this.btnThema === 'deepLightColor' ? 'deepLightColor' : 'deepColor'" >
        {{contactButton}}
        </div>
    </div>
    <div class ="centeredButton">
        <div class="contact_button" :class="this.btnThema === 'light' ? 'lightColor' : this.btnThema === 'deepLightColor' ? 'deepLightColor' : 'deepColor'" >
        {{metButton}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Panel_6",
        data() {
            return {
                Location: '',
                Clothing: '',
                contactButton: "Contact",
                metButton: "We've Met"
            }
        },
        methods: {
            buttonClick() {}
    }
    }
    
</script>

<style>
    .match {
        font-family: 'Josefin Sans', sans-serif;
        margin-top: 200px;
    }
    .centeredBox {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box {
        width: 50%;
        height: 45%;
        background-color: #ffffff;
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        margin: 20px;
        padding: 20px;
        margin-bottom: 50px;
    }
    .list {
        margin-top: 50px;
        text-align: center;
        align-items: center;
        list-style-type: none;
        font-family: 'Josefin Sans', sans-serif;
    }
    .locationIcon {
        display: inline-block;
        background-image: url("../assets/location_ping.png");
        background-repeat: no-repeat;
    }
    .clothingIcon {
        display:inline-block;
        background-image: url("../assets/hanger.png");
        background-repeat: no-repeat;
    }
    .emoji8{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 20%;
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
    .contact_button {
        cursor: pointer;
        width: fit-content;
        line-height: 30px;
        border-radius: 5px;
        min-width: 3rem;
        height: 30px;
        padding: 0 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        flex: 0.25;
        font-family: 'Josefin Sans', sans-serif;
    }
    .centeredButton {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>