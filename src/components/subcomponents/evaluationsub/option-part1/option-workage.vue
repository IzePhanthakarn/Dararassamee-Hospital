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
name : "OptionWorkage",
    data(){
        return{
            option:["1-5 ปี","6-10 ปี","11-15 ปี","16-20 ปี","21-25 ปี"
            ,"26-30 ปี","31-35 ปี","36-40 ปี","41 ปีขึ้นไป"],
        }
    }
};

</script>

<style scoped>
select{
  width: 50%;
}
</style>
