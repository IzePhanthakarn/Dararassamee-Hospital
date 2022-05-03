<template>
  <div class="mainpage">
    <div class="title-bar">
      <Ad-Topic />
    </div>
    <div class="ccontainer">
      <div class="top-box">
        <div @click="goToNormal" class="box-button normal">
          <button>ปกติ</button>
        </div>
        <div @click="goToWarning" class="box-button warning">
          <button>สุ่มเสี่ยง</button>
        </div>
        <div @click="goToDanger" class="box-button danger">
          <button>อันตราย</button>
        </div>
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
    goToNormal() {
      return this.$router.push("/normal");
    },
    goToWarning() {
      return this.$router.push("/warning");
    },
    goToDanger() {
      return this.$router.push("/danger");
    },
  },
};
</script>

<style scoped>
.title-bar{
  display: flex;
  justify-content: flex-start;
  width: 80%;
  height: auto;
}
.mainpage {
  margin-left: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 90vh;
}
.ccontainer {
  width: 80%;
  height: 50%;
  background: rgba(125, 6, 51, 0.35);
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.top-box {
  padding: 40px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.box-button {
  width: 100%;
  height: 100%;
}
.box-button button {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  font-size: 35px;
  /* background-color: #fff;
  border: solid 3px #80073c; */
  transition: all 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.normal button{
  border: solid 3px green;
  background: rgb(179, 235, 179);
}
.warning button{
  border: solid 3px orange;
  background: lightyellow;
}
.danger button{
  border: solid 3px red;
  background: rgb(255, 213, 219);
}
.box-button button:hover{
  transform: scale(.95);
}
.box-button button:active{
  transform: scale(1);
}
</style>
