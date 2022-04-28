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
name : "OptionSex",
    data(){
        return{
            option:["ชาย","หญิง"],
        }
    }
};

</script>

<style scoped>
</style>
