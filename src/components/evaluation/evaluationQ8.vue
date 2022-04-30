<template>
  <body>
    <div class="body-box container-fluid">
      <div class="eva-title">
        <fa :icon="['fas', 'file-signature']" class="user-icon" />
        <h1>แบบประเมิน</h1>
      </div>
      <div class="evaluation-data">
        <div class="topic-q8">
          <h1>แบบประเมินภาวะสุขภาพจิต</h1>
        </div>
        <div class="box-evaluation">
        <div class="description-q8">
          <DesQ8 />
        </div>
        <div class="evaluation-q8">
          <div class="row-q8">
            <p>คิดอยากตาย หรือ คิดว่าตายไปจะดีกว่า</p>
            <OpbarQ8 class="row-q8-op" />
          </div>
          <div class="row-q8">
            <p>อยากทำร้ายตัวเอง หรือ ทำให้ตัวเองบาดเจ็บ</p>
            <OpbarQ8 class="row-q8-op" />
          </div>
          <div class="row-q8">
            <p>คิดเกี่ยวกับการฆ่าตัวตาย</p>
            <Opbar-Death class="row-q8-op" />
          </div>
          <div class="row-q8">
            <p>มีแผนการที่จะฆ่าตัวตาย</p>
            <OpbarQ8 class="row-q8-op" />
          </div>
          <div class="row-q8">
            <p>
              ได้เตรียมการที่จะทำร้ายตนเองหรือเตรียมการจะฆ่าตัวตายโดยตั้งใจว่าจะให้ตายจริงๆ
            </p>
            <OpbarQ8 class="row-q8-op" />
          </div>
          <div class="row-q8">
            <p>ได้ทำให้ตนเองบาดเจ็บแต่ไม่ตั้งใจที่จะทำให้เสียชีวิต</p>
            <OpbarQ8 class="row-q8-op" />
          </div>
                <div class="row-q8">
            <p>ได้พยายามฆ่าตัวตายโดยคาดหวัง/ตั้งใจที่จะให้ตาย</p>
            <OpbarQ8 class="row-q8-op" />
          </div>
                <div class="row-q8" id="no-line">
            <p>ช่วงตลอดชีวิตที่ผ่านมา ท่านเคยพยายามฆ่าตัวตาย</p>
            <OpbarQ8 class="row-q8-op" />
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
      return this.$router.push("/mainpage");
    },
  },
};
</script>

<style scoped>
@import url("./evaluationQ8.css");
</style>
