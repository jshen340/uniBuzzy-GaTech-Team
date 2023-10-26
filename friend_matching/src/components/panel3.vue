<template>
    <div class="w100P h100P fl" style="background:white">
        <div class="UBheader w100P fl" style="height:50px; background:white;">
          <div type="button" class="close" @click="close">X</div>
        </div>
        <div class="UBbody w100P fl flexCenter" style="height: calc(100vh - 120px); flex-direction: column;">
            <div class="w100P fl flexCenter" style="height: 100px;">Find your uniBuddy!<br>Where are you?</div>
            <div class="w100P fl flexCenter" style="flex-direction: column; justify-content: flex-start; height: calc(100% - 100px);">
                <div class="flexCenter" @click="goFindBuddy(btn)" v-for="(btn, i) in mLocationList" :key="i" style="height: 100px; width: 80%; background: #cecde2; margin-bottom: 40px; border-radius: 10px;">
                    <img style="width: 50px; height: 50px;" :src="btn.imgLink" class="fl" />
                    <p class="fl">{{ btn.name }}</p>
                </div>
            </div>
        </div>
        <div class="UBFooter w100P roundedCorners" style="height: 80px; background: rgb(240, 220, 194); overflow: hidden;"></div>
    </div>
</template>

<script>
/*eslint-disable*/
export default {
  props: {
    pSelectedInfo: {},
  },
  data () {
    return {
      mMyDesc: '',
      mLocationList: [
        { id: 0, name: 'Student Center', imgLink: '../resources/unib_sticker_1.png' },
        { id: 1, name: 'Culc', imgLink: '../resources/unib_sticker_1.png' },
        { id: 2, name: 'Crosland', imgLink: '../resources/unib_sticker_1.png' },
        { id: 2, name: 'Price Gilbert', imgLink: '../resources/unib_sticker_1.png' }
      ]
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }

}
</script>
<style scoped>
</style>
