<template>
  <div class="mainpage">
    <div class="title-bar">
      <Ad-Topic />
    </div>
    <div class="ccontainer">
      <Ad-Backbtn/>
      <table>
        <tr>
          <th>ชื่อ</th>
          <th>สุขภาพจิต</th>
        </tr>
        <tr v-for="(item, index) in listdata" :key="index">
          <td class="name-warning">
            {{ item.pname }} {{ item.fname }} {{ item.lname }}
          </td>
          <td class="status-warning">{{ item.status }}</td>
        </tr>
      </table>
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
    this.showWarning();
  },
  methods: {
    showWarning() {
      for (let index = 0; index < this.data.length; index++) {
        if (this.data[index].status === "สุ่มเสี่ยง") {
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
  padding: 25px;
}
.name-warning {
  width: 50%;
}
.status-warning {
  border: solid 2px orange;
  background: lightyellow;
}

table {
  width: 100%;
  border: solid 1px black;
  text-align: center;
  background: #fff;
  margin-top: 15px;
}
th {
  border: solid 2px black;
}
th {
  padding: 5px;
}
</style>
