<template>
  <div class="title-bar">
    <div class="box-title">
      <div class="icon">
         <fa :icon="['fas', 'hospital-user']" class="user-icon" />
      </div>
      <b>{{ $route.name }}</b>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.icon{
  width: 15%;
  height: 100%;
}
.user-icon{
  font-size: 35px;
}
.title-bar {
  padding: 10px;
  color: aliceblue;
  background-image: linear-gradient(to right, #80073c, #b30a53);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  border-radius: 15px;
  height: 60px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  
}
.box-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 10px;
}
.box-title b {
  width: 100%;
  height: 100%;
  margin-left: 30px;
  font-size: 25px;
  text-align: center;
}
</style>
