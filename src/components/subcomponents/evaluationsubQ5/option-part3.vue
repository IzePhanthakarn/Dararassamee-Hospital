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
name : "OptionPart1",
    data(){
        return{
            option:["ไม่มี","มี"],
        }
    }
};

</script>

<style scoped>
select{
  width: 50%;
}
</style>
