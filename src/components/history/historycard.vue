<template>
  <div class="history-data">
    <div class="header">
      <h3>วันที่เข้ารับการรักษา : {{ date }}</h3>
    </div>
    <div class="body">
      <h4>เวลา : {{ time }}</h4>
      <p>สถานที่ : {{ location }}</p>
      <p>ชื่อแพทย์ : {{ docName }}</p>
      <p>อาการ : {{ symptom }}</p>
      <a :href="docLink" target="_blank">ดูเอกสาร</a>
    </div>
  </div>
</template>

<script>
export default {
  // props:["date","time","location","docName","symptom","docLink"]
  props: {
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    location: {
      type: String,
      default: "โรงพยาบาลดารารัศมี จังหวัดเชียงใหม่",
    },
    docName: {
      type: String,
    },
    symptom: {
      type: String,
    },
    docLink: {
      type: String,
    },
  },
};
</script>

<style scoped>
@import url("./historycard.css");
</style>