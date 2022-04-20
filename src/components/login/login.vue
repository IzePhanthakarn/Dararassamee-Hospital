<template>
  <form id="backgroud" action="">
    <div class="form-login">
      <div class="logo-login">
        <img src="dara-logo.png" alt="logo-dara" width="180" height="160" />
      </div>
      <div class="identity-number">
        <input
          class="text-box"
          type="text"
          placeholder="กรุณาใส่เลขบัตรประชาชน"
        />
      </div>
      <div class="identity-number">
        <input
          class="text-box"
          type="password"
          placeholder="กรุณาใส่รหัสผ่าน"
        />
      </div>
      <div class="content-button">
        <div class="confirm-button">
          <button class="button-box">สมัครสมาชิก</button>
        </div>
        <div class="register-button">
          <button class="button-box">ยืนยัน</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import "./login.css";
export default {
  name: "login",
};
</script>

<style></style>
