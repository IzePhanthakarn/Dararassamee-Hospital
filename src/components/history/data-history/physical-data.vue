<template>
  <div class="physical-area">
    <div class="topic-area">
      <h1>โรคปัจจุบัน</h1>
    </div>
    <div class="detail-area">
      <div class="detail-data-topic">
        <div class="disease"><p>โรค</p></div>
        <div class="meetdate"><p>วันที่พบแพทย์ล่าสุด</p></div>
      </div>
      <div class="detail-data">
        <div class="disease" ><p>เบาหวาน</p></div>
        <div class="meetdate"><p>13 กันยายน 2565</p></div>
      </div>
      <div class="detail-data">
        <div class="disease"><p>ความดัน</p></div>
        <div class="meetdate"><p>13 กันยายน 2565</p></div>
      </div>
      <div class="detail-data">
        <div class="disease"><p>ติดเกม</p></div>
        <div class="meetdate"><p>13 กันยายน 2565</p></div>
      </div>
      <div class="detail-data">
        <div class="disease"><p>หิวตลอดเวลา</p></div>
        <div class="meetdate"><p>13 กันยายน 2565</p></div>
      </div>
    </div>
  </div>
  <div class="xray-area">
    <div class="topic-area">
      <h1>ผลตรวจเอกซเรย์</h1>
    </div>
    <div class="status">สถานะ : ปกติ</div>
  </div>
</template>

<script>
export default {
  name: "PhysicalData",
  data() {
    return {
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
};
</script>

<style scoped>
@import url("./physical-data.css");
</style>
