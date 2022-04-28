<template>
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
          <Des2-1 />
        </div>
        <div class="evaluation-q5-part1">
          <div class="row-q5">
            <p>เบื่อ ไม่สนใจอยากทำอะไร</p>
            <Opbar2-1 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>ไม่สบายใจ ซึมเศร้า ท้อแท้</p>
            <Opbar2-1 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>หลับยากหรือหลับๆตื่นๆหรือหลับมากไป</p>
            <Opbar2-1 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>เหนื่อยง่ายหรือไม่ค่อยมีแรง</p>
            <Opbar2-1 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>เบื่ออาหารหรือเกินมากเกินไป</p>
            <Opbar2-1 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลวหรือครอบครัวผิดหวัง</p>
            <Opbar2-1 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>
              สมาธิไม่ดี เวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ
              หรือทำงานที่ต้องใช้ความตั้งใจ
            </p>
            <Opbar2-1 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>
              พูดช้า ทำอะไรช้าลงจนคนอื่นสังเกตเห็นได้
              หรือกระสับกระส่ายไม่สามารถอยู่นิ่งได้เหมือนที่เคยเป็น
            </p>
            <Opbar2-1 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>คิดทำร้ายตนเอง หรือคิดว่าถ้าตายไปคงจะดี</p>
            <Opbar2-1 class="row-q5-op" />
          </div>
        </div>
        <div class="description-q5-part2">
          <Des2-2 />
        </div>
        <div class="evaluation-q5-part2">
          <div class="row-q5">
            <p>คิดอยากตาย หรือ คิดว่าตายไปจะดีกว่า</p>
            <Opbar2-2 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>อยากทำร้ายตัวเอง หรือ ทำให้ตัวเองบาดเจ็บ</p>
            <Opbar2-2 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>คิดเกี่ยวกับการฆ่าตัวตาย</p>
            <Opbar-Death class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>มีแผนการที่จะฆ่าตัวตาย</p>
            <Opbar2-2 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>
              ได้เตรียมการที่จะทำร้ายตนเองหรือเตรียมการจะฆ่าตัวตายโดยตั้งใจว่าจะให้ตายจริงๆ
            </p>
            <Opbar2-2 class="row-q5-op" />
          </div>
          <div class="row-q5">
            <p>ได้ทำให้ตนเองบาดเจ็บแต่ไม่ตั้งใจที่จะทำให้เสียชีวิต</p>
            <Opbar2-2 class="row-q5-op" />
          </div>
                <div class="row-q5">
            <p>ได้พยายามฆ่าตัวตายโดยคาดหวัง/ตั้งใจที่จะให้ตาย</p>
            <Opbar2-2 class="row-q5-op" />
          </div>
                <div class="row-q5">
            <p>ช่วงตลอดชีวิตที่ผ่านมา ท่านเคยพยายามฆ่าตัวตาย</p>
            <Opbar2-2 class="row-q5-op" />
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
      return this.$router.push("/mainpage");
    },
  },
};
</script>

<style scoped>
@import url("./evaluation2.css");
</style>
