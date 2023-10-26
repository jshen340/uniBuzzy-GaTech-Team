<template>
    <div class="w100P h100P fl" style="background:white">
        <div v-if="mFindBuddyY" @click="close"></div>
        <panel3 :pgoBackBuddy="goBackBuddy" :pSelectedInfo="mSelectedInfo" v-if="mFindBuddyY" />
        <div class="UBheader w100P fl" style="height:50px; background:white;">
            <button type="button" class="close" @click="$emit('close')">X</button>
            <!-- <div v-if="pCloseFindBuddy" @click="pCloseFindBuddy" class="fl fontBold h100P" style="font-size: 50px; color: white;">X</div> -->
        </div>
        <!--big container-->
        <div class="UBbody w100P fl flexCenter" style="height: calc(100vh - 120px); flex-direction: column;">
            <div class="w100P fl flexCenter" style="height: 100px;">Find your uniBuddy!<br>What are you looking for today?</div>
            <!--button container-->
            <div class="w100P fl flexCenter" style="flex-direction: column; justify-content: flex-start; height: calc(100% - 100px);">
                <div class="flexCenter" @click="goFindBuddy(btn)" v-for="(btn, i) in mBtnList" :key="i" style="height: 100px; width: 80%; background: #cecde2; margin-bottom: 40px; border-radius: 10px;">
                    <img style="width: 50px; height: 50px;" :src="btn.imgLink" class="fl" />
                    <p class="fl">{{ btn.name }}</p>
                </div>
            </div>
        </div>
        <div class="UBFooter w100P roundedCorners" style="height: 80px; background: #FFFBF6; overflow: hidden;"></div>
    </div>
</template>

<script>
/* eslint-disable */
import panel3 from './panel3.vue'
export default {
  props: {
    pSelectedInfo: {},
    pCloseFindBuddy: Function
  },
  data () {
    return {
      mMyDesc: '',
      isVisible: false,
      mBtnList: [
        { id: 0, name: 'Study Buddy', imgLink: '../resources/unib_sticker_1.png' },
        { id: 1, name: 'Gym Buddy', imgLink: '../resources/unib_sticker_2.png' },
        { id: 2, name: 'Dining Buddy', imgLink: '../resources/unib_sticker_3.png' },
        { id: 3, name: 'Coffee Buddy', imgLink: '../resources/unib_sticker_1.png' }
      ],
      mSelectedInfo: {}
    }
  },
  methods: {
    goFindBuddy (btn) {
      this.mBtnList = this.mLocationList
      this.mSelectedInfo = btn
      this.mFindBuddyY = true
    },
    close() {
      this.$emit('close')
    }
  },
  components: {
    panel3
  }
}
</script>
<style scoped>
</style>
