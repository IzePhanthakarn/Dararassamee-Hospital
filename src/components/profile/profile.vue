<template>
  <header>
    <navbar />
  </header>
  <body>
    <div class="body-box container-fluid">
      <div class="profile-title">
        <fa :icon="['far', 'circle-user']" class="user-icon" />
        <h1>ข้อมูลส่วนตัว</h1>
      </div>
      <div class="profile-picture">
        <img src="/public/police-officer.png" alt="">
        <h2>ร.ต.ท. สวัสดี ไทยแลนด์</h2>
      </div>
      <div class="profile-data">
        <p>คำนำหน้า : ร.ต.ท.</p>
        <p>ชื่อ : สวัสดี</p>
        <p>นามสกุล : ไทยแลนด์</p>
        <p>เลขบัตรประชาชน : x-xxxx-xxxxx-xx-x</p>
        <p>เพศ : ชาย</p>
        <p>วัน/เดือน/ปี เกิด : 24 พฤศจิกายน 2535</p>
        <p>ส่วนสูง : 168 เซนติเมตร</p>
        <p>น้ำหนัก : 60 กิโลกรัม</p>
        <p>หมู่เลือด : B</p>
        <p>เบอร์โทรติดต่อ : 081-xxx-xxxx</p>
        <p>ที่อยู่ : 72/6 หมู่ 7 ตำบลสุขใจ อำเภอสบายดี จังหวัดอร่อยดี 72130</p>
      </div>
      <div class="profile-info">
        <button class="ch-password">เปลี่ยนรหัสผ่าน</button>
        <button class="edit-data">แก้ไขข้อมูลส่วนตัว</button>
      </div>
    </div>
  </body>
</template>

<script>
import navbar from "../mainpage/navbar.vue";
export default {
  components: {
    navbar,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body-box{
  display: flex;
  flex-direction: column;
  padding: 50px 0;
}
.profile-title {
  display: flex;
  /* margin-top: 20px; */
}
.user-icon {
  font-size: 50px;
  margin-right: 10px;
  color: #80073c;
}
.profile-picture{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 320px;
  margin: 20px 0;
}
.profile-picture img{
  width: 250px;
  margin-bottom: 10px;
}
.profile-data{
  width: 100%;
  height: auto;
  background: rgba(125, 6, 51, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  border-radius: 30px;
  border: solid 2px #80073c;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.profile-data p{
  background: #fff;
  margin: 10px 0;
  width: 90%;
  padding: 5px 30px;
  border-radius: 10px;
  border: solid 1px #80073c;
  font-size: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 3px 3px 5px 0 rgba(0, 0, 0, 0.19);
}
.profile-info{
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
.profile-info button{
  width: 250px;
  height: 60px;
  font-size: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
button.edit-data{
  background: #80073c;
  color: #fff;
  border: none;
  transition: all .3s;
}
button.edit-data:hover{
  transform: scale(1.05);
}
button.edit-data:active{
  transform: scale(.95);
}
button.ch-password{
  background: none;
  color: #000;
  border: solid 2px #000;
  transition: all .3s;
}
button.ch-password:hover{
  transform: scale(1.05);
}
button.ch-password:active{
  transform: scale(.95);
}
@media (min-width: 576px) {
  .container-fluid {
    width: 100%;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .container-fluid {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .container-fluid {
    width: 720px;
  }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .container-fluid {
    width: 960px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .container-fluid {
    width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-fluid {
    width: 1320px;
  }
}
@media (min-width: 1600px) {
  .container-fluid {
    width: 1570px;
  }
}
</style>