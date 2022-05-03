<template>
  <div class="mainpage">
    <div class="title-bar">
      <Ad-Title />
    </div>
    <div class="ccontainer">
      <div v-for="(item, index) in listdata" :key="index" class="profile-data">
        <p>คำนำหน้า : {{ item.pname }}</p>
        <p>ชื่อ : {{ item.fname }}</p>
        <p>นามสกุล : {{ item.lname }}</p>
        <p>
          เลขบัตรประชาชน : <label> {{ item.cid }}</label>
        </p>
        <p>เพศ : ชาย</p>
        <p>
          วันเกิดฉันปีนี้ : <label> {{ item.birthday }}</label>
        </p>
        <p>ส่วนสูง : {{ item.height }} เซนติเมตร</p>
        <p>น้ำหนัก : 60 กิโลกรัม</p>
        <p>หมู่เลือด : {{ item.bloodgrp }}</p>
        <p>
          เบอร์โทรติดต่อ : <label> {{ item.hometel }}</label>
        </p>
        <p>ที่อยู่ : {{ item.informaddr }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../../json/patient.json";
export default {
  data() {
    return {
      data,
      listdata: new Array(),
    };
  },
  mounted() {
    this.fetchdata();
  },
  methods: {
    fetchdata() {
      for (let index = 0; index < this.data.length; index++) {
        let testname =
          this.data[index].pname +
          " " +
          this.data[index].fname +
          " " +
          this.data[index].lname;
        if (testname === this.$route.params.name) {
          this.listdata.push(this.data[index]);
        }
      }
      console.log(this.listdata);
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
  padding: 20px;
}
.profile-data{
  margin-top: 15px;
}
.profile-data p {
  background: #fff;
  margin: 10px 0;
  width: 100%;
  padding: 5px 30px;
  border-radius: 10px;
  border: solid 1px #80073c;
  font-size: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 3px 3px 5px 0 rgba(0, 0, 0, 0.19);
}
</style>
