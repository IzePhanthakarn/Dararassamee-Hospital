<template>
  <form id="backgroud-forgot-following" action="">
    <div class="form-following">
      <div class="content-back-button-following">
        <button class="back-button-following">
          <fa :icon="['fas', 'arrow-left']" />
          <span> ย้อนกลับ</span>
        </button>
      </div>
      <div class="logo-following">
        <h1>เปลี่ยนรหัสผ่าน</h1>
      </div>
      <div class="box-input-form-forgot-following">
        <div class="input-form-forgot-following">
          <h2 class="label-input">รหัสผ่าน</h2>
          <input
            class="text-box"
            type="text"
            placeholder="กรุณาใส่รหัสผ่านใหม่"
          />
        </div>
        <div class="input-form-forgot-following">
          <h2 class="label-input">ยืนยันรหัสผ่าน</h2>
          <input class="text-box" type="text" placeholder="กรุณาใส่รหัสผ่านใหม่" />
        </div>
      </div>
      <div class="content-button-forgot-following">
        <button type="button" @click="gotomain" class="confirm-button-forgot-following">ยืนยัน</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "forgot-following",
  methods:{
    gotomain(){
      return this.$router.push("/");
    }
  }
};
</script>
<style scoped>
@import url('./forgot-following.css');
</style>