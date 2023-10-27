<template>
    <div class="match" style="height: 200px;">
        <h2>You matched with {{ name }} !</h2> <!-- add name variable from their name -->
    </div>
    <div class="box">
        <ul id="list">
            <li>
                <img class="emoji8" v-bind:src="'../assets/unib_emoji_8'"/>
            </li>
            <li>
                <h4>Location{{Location}}</h4> <!-- add location variable from matched location -->
            </li>
            <li>
                <h4>Clothing{{Clothing}}</h4> <!-- add clothing variable from clothing -->
            </li>
        </ul>
    </div>
    
</template>

<style>
    .box {
        margin: 0 auto;
        width: 50%;
    }
    #list {
        width: 50%;
        margin: 0 auto;
        text-align: center;
    }
    .emoji8{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
</style>

<script>
    export default {
  name: "Panel_6",
}
</script>