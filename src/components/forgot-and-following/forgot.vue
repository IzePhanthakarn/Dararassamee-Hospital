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
@import url('./forgot.css');
</style>