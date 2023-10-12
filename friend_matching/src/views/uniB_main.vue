<template>
  <div class="w100P h100P fl">
    <div v-if="mFindBuddyYn" class="bgShadow" @click="closeFindBuddy"></div>
    <findBuddy :pCloseFindBuddy="closeFindBuddy" :pSelectedInfo="mSelectedInfo" v-if="mFindBuddyYn" style="width: 80%; height: 80%; margin: 10%; position: absolute; z-index: 1000;" />
    <div class="UBheader w100P fl" style="height: 50px; background: gray;"></div>
    <div class="UBbody w100P fl flexCenter" style="height: calc(100vh - 100px); flex-direction: column;">
      <div class="w100P fl flexCenter" style="height: 100px;">Find your uniBuddy!<br>What are you looking for today?</div>
      <div class="w100P fl flexCenter" style="flex-direction: column; justify-content: flex-start; height: calc(100% - 100px);">
        <div @click="goFindBuddy(btn)" v-for="(btn, i) in mBtnList" :key="i" class="flexCenter fl" style="height: 100px; width: 80%; background: #B2EBF2; margin-bottom: 10px; border-radius: 10px;">
          <img style="width: 50px; height: 50px;" :src="btn.imgLink" class="fl" />
          <p class="fl">{{ btn.name }}</p>
        </div>
      </div>
    </div>
    <div class="UBFooter w100P fl" style="height: 50px; background: gray;"></div>
  </div>
</template>
<script>
</script>
<script>
import findBuddy from '../components/findBuddyDesc.vue'
export default {
  data () {
    return {
      mFindBuddyYn: false,
      mBtnList: [
        {id: 0, name: 'Study Buddy', imgLink: '../resources/unib_sticker_1.png'},
        {id: 1, name: 'Gym Buddy', imgLink: '../resources/unib_sticker_2.png'},
        {id: 2, name: 'Dining Buddy', imgLink: '../resources/unib_sticker_3.png'},
        {id: 3, name: 'Coffee Buddy', imgLink: '../resources/unib_sticker_1.png'}
      ],
      mLocationList: [
        {id: 0, name: 'Student Center', imgLink: '../resources/unib_sticker_1.png'},
        {id: 1, name: 'Culc', imgLink: '../resources/unib_sticker_1.png'},
        {id: 2, name: 'Crosland', imgLink: '../resources/unib_sticker_1.png'},
        {id: 2, name: 'Price Gilbert', imgLink: '../resources/unib_sticker_1.png'}
      ],
      mSelectedInfo: {}
    }
  },
  methods: {
    closeFindBuddy () {
      this.mFindBuddyYn= !this.mFindBuddyYn
    },
    clickBuddy () {
        this.mBtnList = this.mLocationList
    },
    goFindBuddy (btn) {
      if (btn.id === 0) {
        this.clickBuddy()
      } else {
        this.mSelectedInfo = btn
        this.mFindBuddyYn = true
      }
    }
  },
  components: {
    findBuddy
  }
}
</script>
<style scoped>
.bgShadow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Add a semi-transparent background overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Adjust the z-index to ensure it's on top of other content */
}
</style>
