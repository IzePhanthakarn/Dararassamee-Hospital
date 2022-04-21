<template>
  <form id="backgroud-forgot" action="">
    <div class="form-forgot">
      <div class="content-back-button-forgot">
        <button class="back-button-forgot">
          <fa :icon="['fas', 'arrow-left']" />
          <span> ย้อนกลับ</span>
        </button>
      </div>
      <div class="logo-forgot">
        <h1>ลืมรหัสผ่าน</h1>
      </div>
      <div class="box-input-form-forgot">
        <div class="input-form-forgot">
          <h2 class="label-input">เลขบัตรประจำตัวประชาชน</h2>
          <input
            class="text-box"
            type="text"
            placeholder="กรุณาใส่เลขบัตรประชาชน"
          />
        </div>
        <div class="input-form-forgot">
          <h2 class="label-input">เบอร์โทรศัพท์</h2>
          <input class="text-box" type="text" placeholder="กรุณาใส่รหัสผ่าน" />
        </div>
      </div>
      <div class="content-button-forgot">
        <button type="button" class="confirm-button-forgot">ยืนยัน</button>
      </div>
    </div>
  </form>
</template>

<script>

export default {
  name: "forgot",
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
#backgroud-forgot {
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("/public/dara-hospital.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-forgot {
  display: flex;
  flex-direction: column;
  background-color: #86083fe4;
  width: 450px;
  height: 550px;
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.content-back-button-forgot {
  margin-top: 10px;
  margin-left: 15px;
}
.back-button-forgot {
  border: none;
  background: none;
  text-decoration-line: underline;
  color: #fff;
}
.logo-forgot {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
}
.logo-forgot h1 {
  color: #fff;
  font-weight: bold;
}
.box-input-form-forgot {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input-form-forgot {
  width: 350px;
  margin-top: 20px;
}
.label-input {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
.text-box {
  border-radius: 5px;
  text-align: start;
  height: 50px;
  width: 350px;
  border: none;
}
.text-box:hover,
.text-box:focus {
  background: rgba(255, 255, 255, 0.874);
  color: #5d0022;
}
.content-button-forgot {
  margin-top: 70px;
  margin-left: 260px;
  display: flex;
  width: 100%;
}
.confirm-button-forgot{
  border: none;
  width: 140px;
  height: 45px;
  border-radius: 10px;
  background-color: #5d0022;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.3s;
}
.confirm-button-forgot:hover {
  transform: scale(1.1);
}
</style>