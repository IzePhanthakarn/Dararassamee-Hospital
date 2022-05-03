<template>
  <div class="mainpage">
    <div class="title-bar">
      <Ad-Topic />
    </div>
    <div class="ccontainer">
      <div class="data-content">
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>ชื่อเรื่อง</th>
                <th>วันที่อัพเดต</th>
                <th>ดูตัวอย่าง</th>
                <th>แก้ไข</th>
                <th>ลบ</th>
              </tr>
            </thead>
            <ElearnInfo
              v-for="(item, index) in elearndata"
              :key="index"
              :elearn="item"
              :id="index + 1"
              :title="item.title"
              :date="item.date"
            />
          </table>
        </div>
        <div class="elearn-info">
          <button type="submit" class="btn btn btn-success">เพิ่ม</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import elearndata from "../../json/elearn.json";
export default {
  data() {
    return {
      elearndata,
    };
  },
};
</script>

<style scoped>
.title-bar {
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
  height: 80%;
  background: rgba(125, 6, 51, 0.35);
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.data-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: end; */
  align-items: end;
}
.table-container {
  position: relative;
  max-height: 580px;
  width: 100%;
  overflow-y: scroll;
  border: solid 1px black;
}
table {
  width: 100%;
  text-align: center;
  background: #fff;
}
thead th {
  position: -webkit-sticky;
  position: sticky;
  padding: 10px;
  top: 0;
  z-index: 2;
  background: rgb(223, 223, 223);
  border: solid 1px #000;
}
.elearn-info{
  margin: 13px 10px 0 0;
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  
}
.elearn-info button{
  /* background: #b30a53; */
  color: #fff;
  border: none;
  width: 100%;
  margin-left: 20px;
  height: 100%;
  border-radius: 10px;
  transition: all .3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.elearn-info button:hover{
  transform: scale(1.05);
}
.elearn-info button:active{
  transform: scale(1);
}
</style>
