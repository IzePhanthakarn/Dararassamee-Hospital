<template>
  <nav class="navbar navbar-box navbar-expand-lg navbar-dark static-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/mainpage">
        <strong>Happy Cop.</strong>
      </router-link>
      <div class="hnavbar">
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
              <router-link class="nav-link" to="/profile">ข้อมูลผู้ป่วย</router-link>
            </li>
            <li class="nav-item1 mx-4">
              <router-link class="nav-link" to="/history">แบบประเมิน</router-link>
            </li>
            <li class="nav-item1 ms-4">
              <router-link class="nav-link" to="/contact">ข่าวประชาสัมพันธ์</router-link>
            </li>
          </ul>
        </div>
      </div>
      <ul class="navbar-nav ms-auto snavbar">
        <li class="nav-item ms-4 logout-bg">
          <button @click="logout" class="logout-btn">ออกจากระบบ</button>
        </li>
      </ul>
    </div>
  </nav>
  <div class="body">
    <div class="sidebar">
      <div class="sidebar-list">
        <p>ข้อมูลผู้ป่วย</p>
        <p>แบบประเมิน</p>
        <p>ข่าวประชาสัมพันธ์</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      return this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #80073c;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 2;
}
.hnavbar{
  display: none;
}
.container-fluid {
  width: 1570px;
}
.navbar-brand {
  font-size: 30px;
  display: flex;
  align-items: center;
}
.nav-link {
  font-size: 20px;
}
.logout-bg {
  /* height: 50px; */
  margin: 4px 0;
}
button.logout-btn {
  width: 140px;
  height: 35px;
  padding-bottom: 5px;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background: #b30a53;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s;
}
button.logout-btn:hover {
  transform: scale(1.05);
}
button.logout-btn:active {
  transform: scale(0.95);
}
.sidebar {
  width: 20vw;
  height: 100vh;
  background: #cebbc3;
  border: solid 2px #80073c;
  position: absolute;
  padding-top: 70px;
  top: 0;
  left: 0;
  z-index: 1;
}
.sidebar-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.sidebar-list p {
  padding: 10px;
  border-bottom: solid 2px #80073c;
  width: 100%;
  margin: 0;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1600px) {
  .container-fluid {
    max-width: 1320px;
  }
}
@media (max-width: 1400px) {
  .container-fluid {
    max-width: 1140px;
  }
}
@media (max-width: 1200px) {
  .container-fluid {
    max-width: 960px;
  }
}
@media (max-width: 992px) {
  .container-fluid {
    max-width: 720px;
  }
  .snavbar{
    display: none;
  }
  .hnavbar{
    display: contents;
  }
  .sidebar{
    display: none;
  }
  .mainpage{
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .container-fluid {
    width: 670px;
  }
}
@media (max-width: 670px) {
  .container-fluid {
    width: 100%;
  }
}
</style>
