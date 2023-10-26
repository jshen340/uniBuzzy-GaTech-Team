<template>
    <div class="w100P h100P fl">
        <div v-if="mFindBuddyYn" @click="closeFindBuddy"></div>
        <next :pCloseFindBuddy="closeFindBuddy" :pSelectedInfo="mSelectedInfo" v-if="mFindBuddyYn" />
        <div class="UBheader w100P fl" style="height:60px; background:gray;">
            <!-- Click return to home screen -->
            <div class="fr fontBold h100P cornerMargin" style="font-size: 30px; color: white;">X</div>
        </div>
        <!--big container-->
        <div class="UBbody w100P fl flexCenter" style="height: calc(100vh - 120px); flex-direction: column;">
            <div class="spacer" style="height: 300px"></div>
            <img style="width:300px; height:300px;" src="../../public/resources/unib_sticker_7.png">
            <div class="w100P fl flexCenter" style="height: 100px;">Find your uniBuddy!</div>
            <!--button container-->
            <div class="w100P fl flexCenter" style="flex-direction: column; justify-content: flex-start; height: calc(100% - 120px);">
                <button @click="goFindBuddy(btn)" type="button" class="startButton roundedCorners flexCenter fl margin" style="height: 100px width: 400px;">
                    <p style="font-size: 24px">Get Started</p>
                </button>
            </div>
        </div>
        <div class="UBFooter w100P menuRoundedCorners" style="height: 80px; background: rgb(240, 220, 194); overflow: hidden;"></div>
    </div>
</template>
<script>
import next from '../components/panel2.vue'
export default {
  data () {
    return {
      mFindBuddyYn: false,
      mSelectedInfo: {}
    }
  },
  methods: {
    closeFindBuddy () {
      this.mFindBuddyYn = !this.mFindBuddyYn
    },

    goFindBuddy (btn) {
      this.mSelectedInfo = btn
      this.mFindBuddyYn = true
    }
  },
  components: {
    next
  }
}
</script>
