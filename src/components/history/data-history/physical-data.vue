<template>
      <div class="history-area">
        <Listhistory :historycards="historycards" />
      </div>
</template>

<script>
import Listhistory from '../listhisory.vue';

export default {
    name: "PhysicalData",
  components: {
    Listhistory,
  },
  data(){
    return{
      historycards:[
        {
          date:"20 มกราคม 2565",
          time: "10.30 น.",
          location:"โรงพยาบาลดารารัศมี จังหวัดเชียงใหม่",
          docName: "นายแพทย์พันธกานต์ คุ้มภัย",
          symptom:"โรคกระดูกพรุน",
          docLink: "#"
        },
        {
          date:"13 มกราคม 2565",
          time: "11.00 น.",
          location:"โรงพยาบาลสามชุก จังหวัดสุพรรณบุรี",
          docName: "นายแพทย์พันธกานต์ คุ้มภัย",
          symptom:"โรคกระดูกพรุน",
          docLink: "#"
        },
        {
          date:"13 ธันวาคม 2565",
          time: "11.00 น.",
          docName: "นายแพทย์พันธกานต์ คุ้มภัย",
          symptom:"ปวดหลัง",
          docLink: "#"
        },
      ]
    }
  }
};
</script>

<style scoped>
@import url("./physical-data.css");
</style>