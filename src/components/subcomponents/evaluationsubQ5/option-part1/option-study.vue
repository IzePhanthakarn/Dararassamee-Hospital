<template>
  <div class="box-option">
    <div class="study-option">
      <select>
        <option v-for="(item, index) in option" :key="index" value="">
          {{ item }}
        </option>
      </select>
    </div>
    <div class="study-input">
      <p>อื่น ๆ ระบุ</p>
      <input type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionStudy",
  data() {
    return {
      option: [
        "ประถมศึกษา",
        "มัธยมศึกษาตอนต้น",
        "มัธยมศึกษาตอนปลาย",
        "อนุปริญญา",
        "ปริญญาตรี",
        "ปริญญาโท",
        "ปริญญาเอก",
      ],
    };
  },
};
</script>

<style scoped>
.box-option {
  display: flex;
  width: 100%;
}
.study-option{
  width: 50%;
  height: 100%;
}
.study-input {
  display: flex;
  width: 50%;
  height: 100%;
}
select{
  height: 100%;
}
p {
  margin: 0;
  padding: 0;
  width: 40%;
}
input {
  width: 60%;
  height: 100%;
  margin: 0;
}
</style>
