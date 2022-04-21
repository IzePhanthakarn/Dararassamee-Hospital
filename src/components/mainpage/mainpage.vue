<template>
  <div class="main">
    <header>
      <Navbar />
    </header>
    <div class="body">
      <div class="body-box container-fluid">
        <div class="first-column">
          <img src="/public/news.jpg" alt="" />
        </div>
        <div class="second-column">
          <div class="obtions">
            <div class="info-list">
              <button @click="gohistory" class="info-btn">
                ประวัติการรักษา
              </button>
              <button @click="goinfo" class="info-btn">ศูนย์ความรู้</button>
              <button @click="goevaluation" class="info-btn">แบบประเมิน</button>
            </div>
          </div>
          <div class="appointment">
            <button @click="goappointment" class="btn-appointment">วันนัดพบแพทย์</button>
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
export default {
  name: "mainpage",
  components: {
    Navbar,
  },
  methods: {
    gohistory() {
      return this.$router.push("/history");
    },
    goinfo() {
      return this.$router.push("/information");
    },
    goevaluation() {
      return this.$router.push("/evaluation");
    },
    goappointment(){
      return this.$router.push("/appointment")
    }
  },
};
</script>

<style scoped>
@import url('./mainpage.css');
</style>
