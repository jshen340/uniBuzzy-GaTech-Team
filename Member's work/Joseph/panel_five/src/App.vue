<template>
  <panelFive msg="Panel 5"/>
</template>

<script>
import PanelFive from './components/PanelFive.vue'

export default {
  name: 'App',
  components: {
    PanelFive
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
