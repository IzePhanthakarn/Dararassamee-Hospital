<template>
  <form id="backgroud-register" action="">
    <div class="form-register">
      <div class="content-back-button-register">
        <button class="back-button-register">
          <fa :icon="['fas', 'arrow-left']" />
          <span> ย้อนกลับ</span>
        </button>
      </div>
      <div class="logo-register">
        <h1>สมัครสมาชิก</h1>
      </div>
      <div class="box-input-form-register">
        <div class="input-form-register">
          <h2 class="label-input">อีเมล</h2>
          <input
            class="text-box"
            type="text"
            placeholder="กรุณาใส่อีเมล"
          />
        </div>
        <div class="input-form-register">
          <h2 class="label-input">เลขบัตรประชาชน</h2>
          <input class="text-box" type="text" placeholder="กรุณาใส่เลขบัตรประชาชน" />
        </div>
        <div class="input-form-register">
          <h2 class="label-input">รหัสผ่าน</h2>
          <input
            class="text-box"
            type="password"
            placeholder="กรุณาใส่รหัสผ่าน"
          />
        </div>
        <div class="input-form-register">
          <h2 class="label-input">ยืนยันรหัสผ่าน</h2>
          <input
            class="text-box"
            type="password"
            placeholder="กรุณาใส่รหัสผ่าน"
          />
        </div>
      </div>
      <div class="content-button-register">
        <button type="button" @click="gotomain" class="confirm-button-register">ยืนยัน</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "register",
  methods:{
    gotomain(){
      return this.$router.push("/");
    }
  }
};
</script>
<style scoped>
@import url("./register.css");
</style>
