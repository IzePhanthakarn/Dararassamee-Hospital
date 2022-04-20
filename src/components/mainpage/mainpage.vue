<template>
  <div class="main">
    <header>
      <navbar />
    </header>
    <div class="body">
      <div class="body-box">
        <div class="first-column">
          <img src="/public/news.jpg" alt="">
        </div>
        <div class="second-column">
          <div class="obtions">
            <div class="info-list">
              <button class="info-btn">ประวัติการรักษา</button>
              <button class="info-btn">ศูนย์ความรู้</button>
              <button class="info-btn">แบบประเมิน</button>
            </div>
          </div>
          <div class="appointment">
            <button class="btn-appointment">วันนัดพบแพทย์</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
import "./mainpage.css";
export default {
  name: "mainpage",
  components: {
    navbar,
  },
};
</script>