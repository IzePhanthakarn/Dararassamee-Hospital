<template>
  <div class="mainpage">
    <div class="title-bar">
      <Ad-Title />
    </div>
    <div class="ccontainer">
      <Ad-Backbtn/>
      <div class="data-info">
        <div @click="goToUserInformation()" class="box-button">
          <button>ประวัติผู้ป่วย</button>
        </div>
        <div @click="goToUserDisease()" class="box-button">
          <button>โรคปัจจุบัน</button>
        </div>
        <div @click="goToUserXray()" class="box-button">
          <button>ผลเอกซเรย์</button>
        </div>

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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  padding: 30px;
  
}
.data-info{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 20px;
}
.box-button {
  width: 100%;
}
.box-button button {
  width: 100%;
  height: 250px;
  border-radius: 20px;
  background: #fff;
  border: solid 3px #80073c;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  font-size: 30px;
  transition: all 0.3s;
}

.box-button button:hover {
  transform: scale(0.97);
}
.box-button button:active {
  transform: scale(1);
}
</style>
