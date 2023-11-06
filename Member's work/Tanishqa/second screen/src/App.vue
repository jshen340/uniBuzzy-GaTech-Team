<template>
  <h1>Find your uniBuddy!</h1>
  <h2>Give some feedback on your experiences!</h2>
  <input type="text" placeholder="Please provide some more details." v-model="description">
  <br /> <br />
  <button type ="button" v-on:click="getData()">Submit</button>
  <button type ="button" v-on:click="getData()">Skip</button>
  <div class="submitButton">
        <div class="submitForm" :class="this.btnThema === 'light' ? 'lightColor' : this.btnThema === 'deepLightColor' ? 'deepLightColor' : 'lightColor'" >
        {{submitForm}}
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
      name: "Home-item",
      data() {
          return {
              description:null,
              submitForm: "Submit"
          }
      },
      methods: {
          getData() {
              console.warn("values : ", this.description)
          },
          buttonClick() {}
      }
  }
  </script>
  
  <style scoped>
  h1 {
      color: #2FB2E7
  }
  .submitForm {
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
    .submitButton {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 7%;
    }
  </style>