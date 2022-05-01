<template>
  <Ad-Nav />
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
            <PerInfo v-for="(item,index) in patientdata" :key="index"
            :patient="item"
            :id="index + 1"
            :name="item.pname + ' ' + item.fname + ' ' + item.lname"
            :date="item.birthday"
            :status="item.status"/>
        </table>
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
th{
  padding: 5px;
}

</style>
