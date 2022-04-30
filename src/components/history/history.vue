<template>
  <header>
    <Navbar />
  </header>
  <body>
    <div class="body-box container-fluid">
      <div class="history-title">
        <fa :icon="['fas', 'book-medical']" class="history-icon" />
        <h1>ประวัติการรักษา</h1>
      </div>
      <div class="history-area">
        <div class="button-area">
          <div class="box-showphy">
            <button class="button-select" @click="showPhysical">
              ประวัติสุขภาพกาย
            </button>
          </div>
          <div class="box-showment">
            <button class="button-select" @click="showMentally">
              ประวัติสุขภาพจิต
            </button>
          </div>
        </div>
        <div v-show="showPhy">
          <!-- <PhyData :historycards="historycards" /> -->
          <h1>PhySicals</h1>
        </div>
        <div v-show="showMent">
          <h1>Mentally</h1>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import Navbar from "../mainpage/navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      showPhy: false,
      showMent: false,
      historycards: [
        {
          date: "20 มกราคม 2565",
          time: "10.30 น.",
          location: "โรงพยาบาลดารารัศมี จังหวัดเชียงใหม่",
          docName: "นายแพทย์พันธกานต์ คุ้มภัย",
          symptom: "โรคกระดูกพรุน",
          docLink: "#",
        },
        {
          date: "13 มกราคม 2565",
          time: "11.00 น.",
          location: "โรงพยาบาลสามชุก จังหวัดสุพรรณบุรี",
          docName: "นายแพทย์พันธกานต์ คุ้มภัย",
          symptom: "โรคกระดูกพรุน",
          docLink: "#",
        },
        {
          date: "13 ธันวาคม 2565",
          time: "11.00 น.",
          docName: "นายแพทย์พันธกานต์ คุ้มภัย",
          symptom: "ปวดหลัง",
          docLink: "#",
        },
      ],
    };
  },
  methods: {
    showPhysical() {
      console.log(this.showPhy);
      this.showPhy = true;
      this.showMent = false;
    },
    showMentally() {
      this.showMent = true;
      this.showPhy = false;
    },
  },
};
</script>

<style scoped>
@import url("./history.css");
</style>
