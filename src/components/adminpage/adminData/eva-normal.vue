<template>
  <div class="mainpage">
    <div class="title-bar">
      <Ad-Topic />
    </div>
    <div class="ccontainer">
      <table>
        <tr>
          <th>ชื่อ</th>
          <th>สุขภาพจิต</th>
        </tr>
        <tr v-for="(item, index) in listdata" :key="index">
          <td class="name-normal">
            {{ item.pname }} {{ item.fname }} {{ item.lname }}
          </td>
          <td class="status-normal">{{ item.status }}</td>
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
    this.showNormal();
  },
  methods: {
    showNormal() {
      for (let index = 0; index < this.data.length; index++) {
        if (this.data[index].status === "ปกติ") {
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
  padding: 30px;
}
.name-normal {
  width: 50%;
}
.status-normal {
  border: solid 2px green;
  background: lightgreen;
}

table {
  width: 100%;
  border: solid 1px black;
  text-align: center;
  background: #fff;
  margin-top: 20px;
}
th {
  border: solid 2px black;
}
th {
  padding: 5px;
}
</style>
