<template>
  <header>
    <Navbar />
  </header>
  <body>
    <div class="body-box container-fluid">
      <div class="profile-title">
        <fa :icon="['fas', 'file-signature']" class="user-icon" />
        <h1>แบบประเมิน</h1>
      </div>
      <div class="evaluation-data">
        <div class="topic-q5">
          <h1>แบบประเมินภาวะสุขภาพจิต</h1>
        </div>
        <div class="description-q5-part1">
          <Des-1 />
        </div>
        <div class="evaluation-q5-part1">
          <div class="row-q5">
            <p>เพศ</p>
            <Opbar-sex class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>วุฒิการศึกษา</p>
            <div class="row-q5-op">
            <Opbar-study />
            </div>
          </div>
          <div class="row-q5">
            <p>อายุราชกาล</p>
            <Opbar-workage class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>รายได้ต่อเดือน</p>
            <Opbar-income class="row-q5-op" />
          </div>
        </div>
        <div class="description-q5-part2">
          <Des-2 />
        </div>
        <div class="evaluation-q5-part2">
          <div class="row-q5">
            <p>มีปัญหาการนอน นอนไม่หลับหรือนอนมาก</p>
            <Opbar-2 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>มีสมาธิน้อยลง</p>
            <Opbar-2 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>หงุดหงิด/กระวนกระวาย/ว้าวุ่นใจ</p>
            <Opbar-2 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>รู้สึกเบื่อ เซ็ง</p>
            <Opbar-2 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>ไม่อยากพบปะผู้คน</p>
            <Opbar-2 class="row-q5-op" />
          </div>
        </div>
                <div class="description-q5-part2">
          <Des-3 />
        </div>
        <div class="evaluation-q5-part2">
          <div class="row-q5">
            <p>ใน 2 สัปดาห์ที่ผ่านมา รวมวันนี้ท่านรู้สึก หดหู่ เศร้า หรือท้อแท้สิ้นหวัง หรือไม่</p>
            <Opbar-3 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>ใน 2 สัปดาห์ที่ผ่านมา รวมวันนี้ท่านรู้สึก เบื่อ เศร้า ทำอะไรก็ไม่เพลิดเพลิน หรือไม่</p>
            <Opbar-3 class="row-q5-op" />
          </div>
        </div>
      </div>
      <div class="confirm-button">
        <button @click="changepassword" class="ch-password">
          ยืนยันการส่งข้อมูล
        </button>
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
  methods: {
    changepassword() {
      alert("แบบสอบถามหน้าถัดไป")
      return this.$router.push("/evaluation2");
    },
  },
};
</script>

<style scoped>
@import url("./evaluation.css");
</style>
