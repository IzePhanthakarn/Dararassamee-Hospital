<template>
  <div class="mainpage">
    <div class="title-bar">
      <Ad-Topic/>
    </div>
    <div class="ccontainer">
      <div class="top-box">
        <div @click="goToNormal" class="box-button normal"><button>ปกติ</button></div>
        <div @click="goToWarning" class="box-button warning"><button>สุ่มเสี่ยง</button></div>
        <div @click="goToDanger" class="box-button danger"><button>อันตราย</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import patientdata from '../../json/patient.json'
export default {
  data() {
    return{
      patientdata,
    }
  },
  methods:{
    goToNormal(){
      return this.$router.push("/normal");
    },
    goToWarning(){
      return this.$router.push("/warning");
    },
    goToDanger(){
      return this.$router.push("/danger");
    }
  }
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
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  height: 90vh;
}
.ccontainer {
  width: 80%;
  height: auto;
  background: rgba(125, 6, 51, 0.35);
  border-radius: 20px;
  padding: 30px 20px;
}
.top-box {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.box-button {
  width: 30%;
  height: 100px;
}
.box-button button{
 width: 100%;
 height: 100%;
 font-size: 30px;
}

</style>
