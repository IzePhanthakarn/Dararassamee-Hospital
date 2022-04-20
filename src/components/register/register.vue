<template>
  <form id="backgroud-register" action="">
    <div class="form-register">
      <div class="content-back-button">
        <button class="back-button">
          <fa :icon="['fas', 'arrow-left']" />
          <span> ย้อนกลับ</span>
        </button>
      </div>
      <div class="logo-register">
        <h1>สมัครสมาชิก</h1>
      </div>
      <div class="box-input-form">
        <div class="input-form">
          <h2 class="label-input">เลขบัตรประจำตัวประชาชน</h2>
          <input
            class="text-box"
            type="text"
            placeholder="กรุณาใส่เลขบัตรประชาชน"
          />
        </div>
        <div class="input-form">
          <h2 class="label-input">เบอร์โทรศัพท์</h2>
          <input class="text-box" type="text" placeholder="กรุณาใส่รหัสผ่าน" />
        </div>
        <div class="input-form">
          <h2 class="label-input">รหัสผ่าน</h2>
          <input
            class="text-box"
            type="password"
            placeholder="กรุณาใส่รหัสผ่าน"
          />
        </div>
        <div class="input-form">
          <h2 class="label-input">ยืนยันรหัสผ่าน</h2>
          <input
            class="text-box"
            type="password"
            placeholder="กรุณาใส่รหัสผ่าน"
          />
        </div>
      </div>
      <div class="content-button-register">
        <button type="button" class="confirm-button-register">ยืนยัน</button>
      </div>
    </div>
  </form>
</template>

<script>
// import "./register.css";
export default {
  name: "register",
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
#backgroud-register {
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
.form-register {
  display: flex;
  flex-direction: column;
  background-color: #86083fe4;
  width: 450px;
  height: 550px;
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.content-back-button {
  margin-top: 10px;
  margin-left: 15px;
}
.back-button {
  border: none;
  background: none;
  text-decoration-line: underline;
  color: #fff;
}
.logo-register {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.logo-register h1 {
  color: #fff;
  font-weight: bold;
}
.box-input-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input-form {
  width: 350px;
  margin-top: 10px;
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
  border: none;
}
.text-box:hover,
.text-box:focus {
  background: rgba(255, 255, 255, 0.874);
  color: #5d0022;
}
.content-button-register {
  margin-top: 20px;
  margin-left: 260px;
  display: flex;
  width: 100%;
}
.confirm-button-register {
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
.confirm-button:hover {
  transform: scale(1.1);
}
</style>
