<template>
  <div class="mainpage">
    <div class="title-bar">
      <Ad-Topic/>
    </div>
    <div class="ccontainer">
      <div class="data-content">
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>ตัวอย่างภาพ</th>
                <th>ชื่อภาพ</th>
                <th>แก้ไข</th>
                <th>ลบ</th>
              </tr>
            </thead>
            <NewsInfo
              v-for="(item, index) in newsdata"
              :key="index"
              :news="item"
              :id="index + 1"
              :pictureAddr="item.pictureAddr"
              :pictureName="item.pictureName"
            />
          </table>
        </div>
        <div class="news-info">
          <button type="submit" class="btn btn-secondary">เพิ่ม</button>
          <button type="submit" class="btn btn-success">บันทึก</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newsdata from "../../json/news.json";
export default {
  data() {
    return {
      newsdata,
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
.news-info{
  margin: 13px 10px 0 0;
  width: 350px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  
}
.news-info button{
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
.news-info button:hover{
  transform: scale(1.05);
}
.news-info button:active{
  transform: scale(1);
}
</style>