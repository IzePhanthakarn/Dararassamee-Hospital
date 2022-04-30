<template>
  <navbarAdmin />
  <div class="mainpage">
    <div class="ccontainer">
      <div class="data-content">
        <div class="info-box">
          <form action="" class="search-box">
            <input type="search" name="" id="" />
            <input type="submit" value="ค้นหา" class="submit-button">
          </form>
          <select name="" id="">
            <option value="">จัดเรียงตาม</option>
            <option value="">เวลาเก่า-ใหม่</option>
            <option value="">เวลาใหม่-เก่า</option>
            <option value="">สุขภาพจิตปกติ-อันตราย</option>
            <option value="">สุขภาพจิตอันตราย-ปกติ</option>
          </select>
        </div>
        <table>
          <tr>
            <th>ลำดับ</th>
            <th>ชื่อ</th>
            <th>อัพเดตล่าสุด</th>
            <th>สุขภาพจิต</th>
            <th>รายละเอียด</th>
          </tr>
          <tr v-for="(item,index) in patient" :key="index">
            <td>{{index+1}}</td>
            <td>{{item.fname}} {{item.lname}}</td>
            <td>{{item.date}}</td>
            <td v-if="item.status ==='ปกติ'" class="normal-status">{{item.status}}</td>
            <td v-if="item.status ==='สุ่มเสี่ยง'" class="warning-status">{{item.status}}</td>
            <td v-if="item.status ==='อันตราย'" class="danger-status">{{item.status}}</td>
            <td><button>ดูรายละเอียด</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import navbarAdmin from "./navbarAdmin.vue";
export default {
  components: {
    navbarAdmin,
  },
  data() {
    return{
      patient:[
        {fname:"พันธกานต์",lname:"คุ้มภัย",date:"14 เมษายน 2565",status:"ปกติ"},
        {fname:"พิชยะ",lname:"คชารัตน์ไพศาล",date:"30 เมษายน 2565",status:"อันตราย"},
        {fname:"ธนภัทร",lname:"พรหมคง",date:"1 เมษายน 2565",status:"สุ่มเสี่ยง"},
      ]
    }
  }
};
</script>

<style scoped>
.mainpage {
  margin-left: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 90vh;
  /* background: #654; */
}
.ccontainer {
  width: 80%;
  /* background: #000; */
  height: 80%;
  background: rgba(125, 6, 51, 0.35);
  border-radius: 20px;
}
.data-content {
  padding: 20px;
}
.info-box {
  display: flex;
  justify-content: end;
}
input.submit-button{
  margin-left: 10px;
}
select {
  text-align: center;
  margin-left: 20px;
}
table {
  width: 100%;
  border: solid 1px black;
  text-align: center;
  background: #fff;
  margin-top: 20px;
}
th{
  border: solid 2px black;
}
th,td{
  padding: 5px;
}
td{
  border: solid 1px #000;
}
td.normal-status{
  border: solid 2px green;
  background: lightgreen;
}
td.warning-status{
  border: solid 2px orange;
  background: lightyellow;
}
td.danger-status{
  border: solid 2px red;
  background: lightpink;
}
</style>
