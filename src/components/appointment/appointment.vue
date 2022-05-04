<template>
  <header>
    <Navbar />
  </header>
  <body>
    <div class="body-box container-fluid">
      <div class="appointment-title">
        <fa :icon="['far', 'calendar-check']" class="calendar-icon" />
        <h1>วันนัดพบแพทย์</h1>
      </div>
      <div class="box-meet-date" v-for="(item,index) in meetdate" :key="index">
        <div class="meet-data">
          <p>วันที่ : {{item.date}}</p>
        </div>
        <div class="details-meet">
          <p>เวลา : {{item.time}}</p>
      <p>สถานที่ : {{item.station}}</p>
      <p>แผนก : {{item.department}}</p>
        </div>
        <div class="doctor-name">
          <p>ชื่อแพทย์ : {{item.doctor}}</p>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import Navbar from "../mainpage/navbar.vue";
export default {
  data() {
  return{
    message:"Home",
    meetdate: [
      { date: "01 กุมภาพันธ์ 2565",time:"1.30",station:"โรงพยาบาลหมี",doctor:"ดร.เบาบาง",department:"ดวงตา" },
      { date: "02 กุมภาพันธ์ 2565",time:"2.30",station:"โรงพยาบาลหมา ",doctor:"ดร.เบาบางมาก",department:"กระดูก" },
     { date: "03 กุมภาพันธ์ 2565",time:"3.30",station:"โรงพยาบาลแมว",doctor:"ดร.เบาบางมากๆ",department:"จิตใจ" },
     { date: "04 กุมภาพันธ์ 2565",time:"4.30",station:"โรงพยาบาลหมู",doctor:"ดร.เบาบางมากๆๆ" ,department:"ขายส่ง"},
     { date: "05 กุมภาพันธ์ 2565",time:"5.30",station:"โรงพยาบาลหิว",doctor:"ดร.เบาบางมากๆๆๆ" ,department:"ผลิต"},
    ],
  }
  },
  components: {
    Navbar,
  },
};
</script>

<style scoped>
@import url("./appointment.css");
</style>
