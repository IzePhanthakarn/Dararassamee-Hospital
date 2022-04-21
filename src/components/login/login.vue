<template>
  <form id="backgroud" action="">
    <div class="form-login">
      <div class="logo-login">
        <img src="dara-logo.png" alt="logo-dara" width="180" height="160" />
      </div>
      <div class="identity-number">
        <h2 class="label-input">เลขบัตรประจำตัวประชาชน</h2>
        <input
          class="text-box"
          type="text"
          placeholder="กรุณาใส่เลขบัตรประชาชน"
        />
      </div>
      <div class="password">
        <h2 class="label-input">รหัสผ่าน</h2>
        <input
          class="text-box"
          type="password"
          placeholder="กรุณาใส่รหัสผ่าน"
        />
      </div>
      <div class="extension">
        <div class="remember">
          <input type="checkbox" class="check-box" />
          <p>จดจำฉัน</p>
        </div>
        <button type="button" class="forgot-button">ลืมรหัสผ่าน</button>
      </div>
      <div class="content-button">
        <button type="button" class="register-button">สมัครสมาชิก</button>
        <button type="button" class="confirm-button">เข้าสู่ระบบ</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "login",
};
</script>
<style scoped>
@import url("./login.css");
</style>
