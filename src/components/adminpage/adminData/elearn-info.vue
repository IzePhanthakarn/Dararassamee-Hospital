<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{title}}</td>
    <td>{{ date}}</td>
    <td>
      <button class="btn btn-secondary">ดูตัวอย่าง</button>
    </td>
    <td>
      <button class="btn btn-primary">แก้ไข</button>
    </td>
    <td>
      <button class="btn btn-danger">ลบ</button>
    </td>
  </tr>
</template>

<script setup></script>

<script>
export default {
  name: "NewsData",
  props: {
    id: { type: Number },
    title: { type: String },
    date: { type: String },
  }
};
</script>

<style scoped>
td {
  padding: 4px;
  border: solid 1px #000;
}
td img{
    width: 300px;
}
td button{
    width: 100px;
}
</style>
