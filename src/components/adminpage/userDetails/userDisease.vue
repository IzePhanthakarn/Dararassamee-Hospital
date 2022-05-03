<template>
  <div class="mainpage">
    <div class="title-bar">
      <Ad-Title />
    </div>
    <div class="ccontainer">
      <div class="history-area">
        <div class="button-area">
          <div class="box-showphy">
            <button
              :class="{ 'button-select-active': showPhy }"
              class="button-select"
              @click="showPhysical"
            >
              <p>ประวัติสุขภาพกาย</p>
            </button>
          </div>
          <div class="box-showment">
            <button
              :class="{ 'button-select-active': showMent }"
              class="button-select"
              @click="showMentally"
            >
              <p>ประวัติสุขภาพจิต</p>
            </button>
          </div>
        </div>
        <div class="box-data" v-show="showPhy">
          <div class="detail-area">
            <div class="detail-data-topic">
              <div class="disease"><p>โรค</p></div>
              <div class="meetdate"><p>วันที่พบแพทย์ล่าสุด</p></div>
            </div>
            <div class="detail-data">
              <div class="disease"><p>เบาหวาน</p></div>
              <div class="meetdate"><p>13 กันยายน 2565</p></div>
            </div>
            <div class="detail-data">
              <div class="disease"><p>ความดัน</p></div>
              <div class="meetdate"><p>13 กันยายน 2565</p></div>
            </div>
            <div class="detail-data">
              <div class="disease"><p>ติดเกม</p></div>
              <div class="meetdate"><p>13 กันยายน 2565</p></div>
            </div>
            <div class="detail-data">
              <div class="disease"><p>หิวตลอดเวลา</p></div>
              <div class="meetdate"><p>13 กันยายน 2565</p></div>
            </div>
          </div>
        </div>
        <div class="box-data" v-show="showMent">
          <div class="detail-area">
            <div class="detail-data-topic">
              <div class="disease"><p>โรค</p></div>
              <div class="meetdate"><p>วันที่พบแพทย์ล่าสุด</p></div>
            </div>
            <div class="detail-data">
              <div class="disease"><p>เคยคิดอยากตาย</p></div>
              <div class="meetdate"><p>13 กันยายน 2565</p></div>
            </div>
            <div class="detail-data">
              <div class="disease"><p>กดดันจากสิ่งรอบข้าง</p></div>
              <div class="meetdate"><p>13 กันยายน 2565</p></div>
            </div>
            <div class="detail-data">
              <div class="disease"><p>เคยทำร้ายผู้อื่น</p></div>
              <div class="meetdate"><p>13 กันยายน 2565</p></div>
            </div>
            <div class="detail-data">
              <div class="disease"><p>อยากนอนตลอดเวลา</p></div>
              <div class="meetdate"><p>13 กันยายน 2565</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import data from "../../../json/patient.json" 
export default {
  data() {
    return {
      showPhy: true,
      showMent: false,
    };
  },
  methods: {
    showPhysical() {
      console.log(this.$route.params.name);
      this.showPhy = true;
      this.showMent = false;
    },
    showMentally() {
      this.showMent = true;
      this.showPhy = false;
    },
  },
};
</script>

<style scoped>
p{
    font-size: 20px;
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
.title-bar {
  width: 80%;
  height: auto;
}
.ccontainer {
  width: 80%;
  height: auto;
  background: rgba(125, 6, 51, 0.35);
  border-radius: 20px;
  padding: 20px;
}

.button-area {
  display: flex;
justify-content: space-around;
  width: 100%;
}
.box-showphy {
  width: 30%;
}
.box-showment {
  width: 30%;
}
.box-data {
  width: 100%;
}
.button-select {
  height: 45px;
  width: 100%;
  background-color: aliceblue;
  border: solid 2px #80073c;
  transition: all 0.3s;
  border-radius: 15px;
}
.button-select p {
  font-size: 20px;
  font-weight: bold;
}
.button-select-active {
  background-color: #80073c;
  color: aliceblue;
}
.topic-area {
  width: 100%;
  border-bottom: solid 2px;
  display: flex;
  justify-content: center;
}
.detail-area {
  border-radius: 15px;
  margin: 10px 0 0 0;
  padding: 30px;
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 100%;
}
.detail-data-topic {
  background-color: aliceblue;
  padding: 10px 20px;
  display: flex;
  height: auto;
  width: 100%;
}
.detail-data {
  padding: 10px 20px;
  display: flex;
  height: auto;
  width: 100%;
}
.detail-data:hover{
  background-color: rgb(173, 173, 173);
}
.disease {
  display: flex;
  justify-content: flex-start;
  width: 50%;
}
.meetdate {
  display: flex;
  justify-content: flex-end;
  width: 50%;
}
</style>
