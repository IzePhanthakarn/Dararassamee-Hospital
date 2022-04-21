<template>
  <nav class="navbar navbar-box navbar-expand-lg navbar-dark static-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/mainpage">
        <strong>Happy Cop.</strong>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item1 mx-4">
            <router-link class="nav-link" aria-current="page" to="/mainpage">หน้าหลัก</router-link>
          </li>
          <li class="nav-item1 mx-4">
            <router-link class="nav-link" to="/profile">ข้อมูล</router-link>
          </li>
          <li class="nav-item1 mx-4">
            <router-link class="nav-link" to="/information">ประวัติ</router-link>
          </li>
          <li class="nav-item1 ms-4">
            <router-link class="nav-link" to="/contact">ติดต่อ</router-link>
          </li>
          <li class="nav-item ms-4 logout-bg">
            <button class="logout-btn" href="#">ออกจากระบบ</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
.navbar {
  background-color: #80073c;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.navbar-brand {
  font-size: 30px;
  display: flex;
  align-items: center;
}
.nav-link {
  font-size: 20px;
}
.logout-bg{
  /* height: 50px; */
  margin: 4px 0;
}
button.logout-btn{
  width: 140px;
  height: 35px;
  padding-bottom: 5px;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background: #b30a53;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all .3s;
}
button.logout-btn:hover{
  transform: scale(1.05);
}
button.logout-btn:active{
  transform: scale(.95);
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .container-fluid {
    width: 100%;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .container-fluid {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .container-fluid {
    width: 720px;
  }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .container-fluid {
    width: 960px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .container-fluid {
    width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-fluid {
    width: 1320px;
  }
}
@media (min-width: 1600px) {
  .container-fluid {
    width: 1570px;
  }
}
</style>