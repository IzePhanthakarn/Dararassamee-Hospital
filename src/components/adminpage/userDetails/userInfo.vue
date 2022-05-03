<template>
  <div class="mainpage">
    <div class="title-bar">
      <Ad-Title/>
    </div>
    <div class="ccontainer">
      <Ad-Backbtn/>
      <div class="profile-data">
        <!-- pname -->
        <p>คำนำหน้า : ร.ต.ท.</p> 
        <!-- fname -->
        <p>ชื่อ : สวัสดี</p>
        <!-- lname -->
        <p>นามสกุล : ไทยแลนด์</p>
        <p>เลขบัตรประชาชน : <label> x-xxxx-xxxxx-xx-x</label></p>
        <p>เพศ : ชาย</p>
        <p>วัน/เดือน/ปี เกิด : <label> 24 พฤศจิกายน 2535</label></p>
        <p>ส่วนสูง : 168 เซนติเมตร</p>
        <p>น้ำหนัก : 60 กิโลกรัม</p>
        <p>หมู่เลือด : B</p>
        <p>เบอร์โทรติดต่อ : <label> 081-xxx-xxxx</label></p>
        <p>ที่อยู่ : 72/6 หมู่ 7 ตำบลสุขใจ อำเภอสบายดี จังหวัดอร่อยดี 72130</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.mainpage {
  margin-left: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 90vh;
}
.title-bar{
  width: 80%;
  height: auto;
}
.ccontainer {
  width: 80%;
  height: auto;
  background: rgba(125, 6, 51, 0.35);
  border-radius: 20px;
  padding: 20px;
}
.profile-data{
  margin-top: 15px;
}
.profile-data p {
  background: #fff;
  margin: 10px 0;
  width: 100%;
  padding: 5px 30px;
  border-radius: 10px;
  border: solid 1px #80073c;
  font-size: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 3px 3px 5px 0 rgba(0, 0, 0, 0.19);
}
</style>
