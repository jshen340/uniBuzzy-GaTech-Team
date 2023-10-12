<template>
  <div class="fl w100P h100P" style="background: #f1f1f1;">
    <div class="w100P fl" style="height: 50px; background: navy;">
      <div v-if="pCloseFindBuddy" @click="pCloseFindBuddy" class="fr fontBold h100P" style="font-size: 50px; color: white;">X</div>
    </div>
    <div class="fl w100P flexCenter" style="height: 30%;">Find your uniBuddy!</div>
    <div class="fl w100P" style="height: 70%;">
      <input v-model="mMyDesc" placeholder="What are you wearing? Help your buddy find you!" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pSelectedInfo: {},
    pCloseFindBuddy: Function
  },
  data () {
    return {
      mMyDesc: ''
    }
  }
}
</script>
<style scoped>
</style>
