<template>
  <div class="main">
    <header>
      <Navbar />
    </header>
    <div class="body">
      <div class="body-box container-fluid">
        <div class="body-box-map">
          <div class="box-map">
            <img src="/public/road-map-demo.jpg" />
          </div>
          <div class="body-box-info-contact">
            <div class="box-location">
              <fa :icon="['fas', 'map-location-dot']" class="edit-icon" />
              <p>
                888/2 โรงพยาบาลดาปี ถนนมาลัยแมน ตำบลบางตลาด อำเภอบางมาก
                จังหวัดเบาบาง 7300
              </p>
            </div>
            <div class="box-telephone">
              <fa :icon="['fas', 'phone-volume']" class="edit-icon" />
              <p>092-xxxxxxxxx (agent)</p>
            </div>
            <div class="box-info-email">
              <fa :icon="['fas', 'envelope']" class="edit-icon" />
              <p>darassameeza007@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="body-box-email-contact">
          <form class="body-form-email" action="">
            <div class="form-email">
              <div class="logo-email">
                <h1>ติดต่อทางอีเมลล์</h1>
              </div>
              <div class="box-input-form-email">
                <div class="box-input-form-email-first">
                  <div class="input-form-email-one">
                    <h2 class="label-input">ชื่อ-นามสกุล</h2>
                    <input type="text" placeholder="กรุณาใส่เลขบัตรประชาชน" />
                  </div>
                  <div class="input-form-email-two">
                    <h2 class="label-input">อีเมลล์</h2>
                    <input type="text" placeholder="กรุณาใส่รหัสผ่าน" />
                  </div>
                </div>
                <div class="box-input-form-email-second">
                  <div class="input-form-email-three">
                    <h2 class="label-input">หัวข้อที่จะแจ้ง</h2>
                    <input type="text" placeholder="กรุณาใส่รหัสผ่าน" />
                  </div>
                  <div class="input-form-email-four">
                    <h2 class="label-input">เนื้อหาที่จะแจ้ง</h2>
                    <textarea type="text" placeholder="กรุณาใส่รหัสผ่าน" />
                  </div>
                </div>
              </div>
              <div class="content-button-email">
                <button type="button" class="confirm-button-email">ส่ง</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../mainpage/navbar.vue";
export default {
  name: "contact",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
@import "./contact.css";
</style>
