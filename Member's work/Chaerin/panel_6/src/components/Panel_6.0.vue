<template>
    <div class="match">
        <h2>You Matched with </h2>
        <h2>{{ name }}!</h2> <!-- add name variable from their name -->
    </div>
        <div class="centeredBox">
            <div class="box">
                <div>
                    <img class="emoji8" src="../assets/unib_emoji_8.png" alt="profile picture" /> <!-- user profile picture -->
                </div>
                <div class="locationIcons">
                    <img class= "locationIcon" src="../assets/location_ping.png">
                    <h4>Location{{Location}}</h4> <!-- add location variable from matched location -->
                </div> 
                <div class="clothingIcons">
                    <img class="clothingIcon" src="../assets/hanger.png">
                    <h4>Clothing{{Clothing}}</h4> <!-- add clothing variable from clothing -->
                </div>
        </div>
    </div>
    
    <div class="centeredButton">
        <div class="button" :class="this.btnThema === 'light' ? 'lightColor' : this.btnThema === 'deepLightColor' ? 'deepLightColor' : 'lightColor'" >
        {{contactButton}}
        </div>
    </div>
    <div class ="centeredButton">
        <div class="button" :class="this.btnThema === 'light' ? 'lightColor' : this.btnThema === 'deepLightColor' ? 'deepLightColor' : 'deepColor'" >
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
        font-weight: bold;
        margin-top: 40%;
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
        margin-top: 50px;
        text-align: center;
        align-items: center;
        list-style-type: none;
        font-family: 'Josefin Sans', sans-serif;
    }
    .locationIcons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }
    .clothingIcons {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .locationIcon {
        background-repeat: no-repeat;
        width: 8%;
        height: auto;
        margin-right: 20px;
        margin-bottom: 0px;
    }
    .clothingIcon {
        background-repeat: no-repeat;
        width: 8%;
        height: auto;
        margin-right: 20px;
        margin-top: 0px;
    }
    .emoji8{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 20%;
        border: 2px solid #2FB2E7;
        border-radius: 70%;
        padding: 10px;
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
    .button {
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
        width: 50%;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
    }
    .centeredButton {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
