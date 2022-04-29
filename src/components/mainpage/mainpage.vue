<template>
  <header>
    <Navbar />
  </header>
  <div class="body">
    <div class="body-box container-fluid">
      <div class="first-column">
        <Slider />
      </div>
      <div class="second-column">
        <div class="obtions">
          <div class="info-list">
            <button @click="gohistory" class="info-btn">ประวัติการรักษา</button>
            <button @click="goinfo" class="info-btn">ศูนย์ความรู้</button>
            <button @click="goevaluation" class="info-btn">แบบประเมิน</button>
          </div>
        </div>
        <div class="label-btn">
          <div v-if="status == 'ปกติ'" class="status normal-status">
            สถานะ : ปกติ
          </div>
          <div v-if="status == 'สุ่มเสี่ยง'" class="status warning-status">
            สถานะ : สุ่มเสี่ยง
          </div>
          <div v-if="status == 'อันตราย'" class="status danger-status">
            สถานะ : อันตราย
          </div>
          <div class="appointment">
            <button @click="goappointment" class="btn-appointment">
              วันนัดพบแพทย์
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import Navbar from "./navbar.vue";
import { useRouter } from "vue-router";
import Slider from "./slider.vue";

export default {
  name: "mainPage",
  components: {
    Navbar,
    Slider,
  },
  methods: {
    gohistory() {
      return this.$router.push("/history");
    },
    goinfo() {
      return this.$router.push("/information");
    },
    goevaluation() {
      return this.$router.push("/select-evaluation");
    },
    goappointment() {
      return this.$router.push("/appointment");
    },
  },
  data() {
    return {
      status: "สุ่มเสี่ยง",
    };
  },
};
</script>

<style scoped>
@import url("./mainpage.css");
</style>
