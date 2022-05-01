<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ name }}</td>
    <td>{{ date }}</td>
    <td v-if="status ==='ปกติ'" class="normal-status">{{ status }}</td>
    <td v-if="status ==='สุ่มเสี่ยง'" class="warning-status">{{ status }}</td>
    <td v-if="status ==='อันตราย'" class="danger-status">{{ status }}</td>
    <td id="info">
      <button>
        รายละเอียด
      </button>
    </td>
  </tr>
</template>

<script setup>
</script>

<script>
export default {
  name: "PatientPerson",
  props: {
    id: { type: Number },
    name: { type: String, required: true },
    date: { type: String },
    status: { type: String },
    something: { type: String },
    patient: {},
  },
};
</script>

<style>

td{
  padding: 5px;
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
