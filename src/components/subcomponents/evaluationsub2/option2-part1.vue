<template>
  <div class="box-option">
    <select>
      <option  v-for="(item, index) in option" :key="index" value="">
          {{item}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
name : "Option2Part1",
    data(){
        return{
            option:["ไม่มีเลย","เป็นบางวัน (1-7 วัน)","เป็นบ่อย (มากกว่า 7 วัน)","เป็นทุกวัน"],
        }
    }
};

</script>

<style scoped>
</style>