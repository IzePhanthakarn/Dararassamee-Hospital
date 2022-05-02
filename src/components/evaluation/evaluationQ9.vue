<template>
  <body>
    <div class="body-box container-fluid">
      <div class="profile-title">
        <fa :icon="['fas', 'file-signature']" class="user-icon" />
        <h1>แบบประเมิน</h1>
      </div>
      <div class="evaluation-data">
        <div class="topic-q9">
          <h1>แบบประเมินภาวะสุขภาพจิต</h1>
        </div>
        <div class="box-evaluation">
          <div class="description-q9">
            <DesQ9 />
          </div>
          <div class="evaluation-q9">
            <div class="row-q9">
              <p>เบื่อ ไม่สนใจอยากทำอะไร</p>
              <OpbarQ9 class="row-q9-op" />
            </div>
            <div class="row-q9">
              <p>ไม่สบายใจ ซึมเศร้า ท้อแท้</p>
              <OpbarQ9 class="row-q9-op" />
            </div>
            <div class="row-q9">
              <p>หลับยากหรือหลับๆตื่นๆหรือหลับมากไป</p>
              <OpbarQ9 class="row-q9-op" />
            </div>
            <div class="row-q9">
              <p>เหนื่อยง่ายหรือไม่ค่อยมีแรง</p>
              <OpbarQ9 class="row-q9-op" />
            </div>
            <div class="row-q9">
              <p>เบื่ออาหารหรือเกินมากเกินไป</p>
              <OpbarQ9 class="row-q9-op" />
            </div>
            <div class="row-q9">
              <p>รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลวหรือครอบครัวผิดหวัง</p>
              <OpbarQ9 class="row-q9-op" />
            </div>
            <div class="row-q9">
              <p>
                สมาธิไม่ดี เวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ
                หรือทำงานที่ต้องใช้ความตั้งใจ
              </p>
              <OpbarQ9 class="row-q9-op" />
            </div>
            <div class="row-q9">
              <p>
                พูดช้า ทำอะไรช้าลงจนคนอื่นสังเกตเห็นได้
                หรือกระสับกระส่ายไม่สามารถอยู่นิ่งได้เหมือนที่เคยเป็น
              </p>
              <OpbarQ9 class="row-q9-op" />
            </div>
            <div class="row-q9" id="no-line">
              <p>คิดทำร้ายตนเอง หรือคิดว่าถ้าตายไปคงจะดี</p>
              <OpbarQ9 class="row-q9-op" />
            </div>
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
export default {
  methods: {
    changepassword() {
      return this.$router.push("/evaluationQ8");
    },
  },
};
</script>

<style scoped>
@import url("./evaluationQ9.css");
</style>
