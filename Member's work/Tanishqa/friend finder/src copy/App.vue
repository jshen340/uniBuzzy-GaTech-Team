 <template>
    <div class= "container">
    <h1>What are you wearing? Help your buddy find you!</h1>
    <img class="image" src="src/assets/unib7.png" alt="emoji7">
    <input class="text" placeholder="Enter Description" v-model="description">
    <br /> <br />
    <button class="button" v-on:click="getData()">Ready!</button>
    </div>
    </template>
    
    <script>
    export default {
        name: "Home-item",
        data() {
            return {
                character: "src/assets/unib7.png",
                description: null
            }
        },
        methods: {
            getData() {
                console.warn("values : ", this.character, this.description)
            }
        }
    }
    </script>
    
    <style scoped>
    .container {
        text-align: center;
        margin: 50px auto;
        max-width: 400px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9; 
    }
    .description {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    .image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 45%;
        padding-top: 10%;
    }
    .button {
        background-color: #0074d9;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
    .button:hover {
        background-color: #0056b3;
    }
    h1 {
        color: #2FB2E7
    }
    </style>
