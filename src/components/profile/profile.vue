<template>
  <header>
    <Navbar />
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
import Navbar from "../mainpage/navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
@import url('./profile.css');
</style>