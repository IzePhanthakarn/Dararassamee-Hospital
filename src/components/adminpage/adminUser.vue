<template>
  <div class="mainpage">
    <div class="title-bar">
      <Ad-Topic/>
    </div>
    <div class="ccontainer">
      <div class="data-content">
        <div class="info-box">
          <form action="" class="search-box">
            <input type="search" name="" id="" />
            <input type="submit" value="ค้นหา" class="submit-button" />
          </form>
          <select name="" id="">
            <option value="">จัดเรียงตาม</option>
            <option value="">เวลาเก่า-ใหม่</option>
            <option value="">เวลาใหม่-เก่า</option>
            <option value="">สุขภาพจิตปกติ-อันตราย</option>
            <option value="">สุขภาพจิตอันตราย-ปกติ</option>
          </select>
        </div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>ชื่อ</th>
                <th>อัพเดตล่าสุด</th>
                <th>สุขภาพจิต</th>
                <th>รายละเอียด</th>
              </tr>
            </thead>
            <UserInfo
              v-for="(item, index) in patientdata"
              :key="index"
              :id="index + 1"
              :name="item.pname + ' ' + item.fname + ' ' + item.lname"
              :date="item.birthday"
              :status="item.status"
            />
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import patientdata from "../../json/patient.json";
export default {
  data() {
    return {
      patientdata,
    };
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
  /* background: #654; */
}
.ccontainer {
  width: 80%;
  /* background: #000; */
  height: 80%;
  background: rgba(125, 6, 51, 0.35);
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.data-content {
  padding: 20px;
}
.info-box {
  display: flex;
  justify-content: end;
}
input.submit-button {
  margin-left: 10px;
}
select {
  text-align: center;
  margin-left: 20px;
}
table {
  width: 100%;
  text-align: center;
  background: #fff;
}
thead th {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  background: rgb(223, 223, 223);
  border: solid 1px #000;
}

th {
  border: solid 2px black;
  padding: 5px;
}
.table-container {
  position: relative;
  max-height: 570px;
  overflow-y: scroll;
  margin-top: 20px;
  border: solid 1px black;
}

</style>
