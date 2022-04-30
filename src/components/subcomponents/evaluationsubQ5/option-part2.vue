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
name : "OptionPart2",
    data(){
        return{
            option:["แทบไม่มี","เป็นบางครั้ง","เป็นบ่อยครั้ง","เป็นประจำ"],
        }
    }
};

</script>

<style scoped>
select{
  width: 50%;
}
</style>