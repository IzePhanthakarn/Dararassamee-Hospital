<template>
  <div class="button-area">
      <button>
          <fa :icon="['fas', 'arrow-left']" class="arrow-icon"/>
          <span>ย้อนกลับ</span>
      </button>
  </div>
</template>

<script>
export default {
    name:"backButtonAdmin",
}
</script>

<style scoped>
.button-area{
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
}
.button-area button{
    width: 120px;
    height: 100%;
    color: #fff;
    background: #b30a53;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    border: solid 2px #fff;
    border-radius: 15px;
    font-size: 18px;
    transition: all .5s;
    display: flex;
    justify-content: center;
    align-items: center;
}
.button-area button .arrow-icon{
    transition: all .5s;
}
.button-area button:hover .arrow-icon{
    margin-right: 5px;
}

</style>