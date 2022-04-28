<template>
  <div class="box-option">
    <select id="first-death">
      <option value="0" >ไม่มี</option>
      <option value="1">มี</option>
    </select>
    <!-- <select >
      <option  v-for="(item, index) in optionadd" :key="index" value="">
          {{item}}
      </option>
    </select> -->
  </div>
</template>

<script>
export default {
name : "OptionDeath",
    data(){
        return{
            optionadd:["ได้","ไม่ได้"],
        }
    },
    methods:{
        getValue(){
            let select = document.getElementById('first-death');
		    let value = select.options[select.selectedIndex].text;
            return value;
        }
    }
};

</script>

<style scoped>
</style>
