<template>
  <div class="mainpage">
    <div class="title-bar">
      <Ad-Title />
    </div>
    <div class="ccontainer">
      <div class="top-box">
        <div @click="goToUserInformation()" class="box-button">
          <button>ประวัติผู้ป่วย</button>
        </div>
        <div @click="goToUserDisease()" class="box-button">
          <button>โรคปัจจุบัน</button>
        </div>
        <div @click="goToUserXray()" class="box-button">
          <button>ผลเอกซเรย์</button>
        </div>
      </div>
      <div class="bottom-box">
        <div @click="goToUserLab()" class="box-button">
          <button>ผลแลป</button>
        </div>
        <div class="box-button"><button>ของกินที่ชอบ</button></div>
        <div class="box-button"><button>น้ำหนักที่เพิ่ม</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToUserInformation() {
      return this.$router.push(`/user-details/${this.$route.params.name}/information`);
    },
    goToUserDisease() {
      return this.$router.push(`/user-details/${this.$route.params.name}/disease`);
    },
    goToUserXray() {
      console.log(this.$route.params.name)
    },
    goToUserLab() {
      return this.$router.push(`/user-details/${this.$route.params.name}/lab`);
    },
  },
};
</script>

<style scoped>
.mainpage {
  margin-left: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 90vh;
}
.title-bar {
  width: 80%;
  height: auto;
}
.ccontainer {
  width: 80%;
  height: auto;
  background: rgba(125, 6, 51, 0.35);
  border-radius: 20px;
  padding: 30px;
}
.top-box {
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: aquamarine;
}
.bottom-box {
  margin: 20px 0 0 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: aquamarine;
}
.box-button {
  width: 30%;
  height: 100px;
}
.box-button button {
  width: 100%;
  height: 100%;
  font-size: 25px;
}
</style>
