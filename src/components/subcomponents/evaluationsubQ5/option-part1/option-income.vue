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
name : "OptionIncome",
    data(){
        return{
            option:["5000-15000 บาท/เดือน","15000-30000 บาท/เดือน"
            ,"30000-50000 บาท/เดือน","มากกว่า 50000 บาท/เดือน","ไม่พอใช้จ่ายต่อเดือน",
            "พอใช้จ่ายต่อเดือน","พอใช้จ่ายและมีเหลือเก็บ"],
        }
    }
};

</script>

<style scoped>
select{
  width: 50%;
}
</style>