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
            <button
              @click="() => TogglePopup('buttonTrigger')"
              id="savebutton"
              class="info-btn"
            >
              แบบประเมิน
            </button>
            <PopupEva
              v-if="popupTriggers.buttonTrigger"
              :TogglePopup="() => TogglePopup('buttonTrigger')"
            />
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
import Navbar from "./navbar.vue";
import Slider from "./slider.vue";
import { ref } from "vue";

export default {
  name: "mainPage",
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
      timedTrigger: false,
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      popupTriggers,
      TogglePopup,
    };
  },
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
    // goevaluation() {
    //   this.$router.push("/select-evaluation");
    // },
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
