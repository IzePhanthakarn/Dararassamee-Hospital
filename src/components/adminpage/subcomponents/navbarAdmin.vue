<template>
  <nav class="navbar navbar-box navbar-expand-lg navbar-dark static-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/admin-user">
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
              <router-link class="nav-link" to="/admin-user"
                >รายชื่อผู้ป่วย</router-link
              >
            </li>
            <li class="nav-item1 mx-4">
              <router-link class="nav-link" to="/admin-evaluation"
                >ผลแบบประเมิน</router-link
              >
            </li>
            <li class="nav-item1 ms-4">
              <router-link class="nav-link" to="/admin-news"
                >ข่าวประชาสัมพันธ์</router-link
              >
            </li>
            <li class="nav-item1 ms-4">
              <router-link class="nav-link" to="/admin-elearn"
                >ศูนย์ความรู้</router-link
              >
            </li>
            <li class="nav-item ms-4 logout-bg">
              <button @click="logout" class="logout-btn">ออกจากระบบ</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="body">
    <div class="sidebar">
      <div class="sidebar-list">
        <div class="menu-list">
          <p @click="gotoAdminUser" :class="{ 'button-select-active': User }">
            รายชื่อผู้ป่วย
          </p>
          <p @click="gotoAdminEva" :class="{ 'button-select-active': Eva }">
            ผลแบบประเมิน
          </p>
          <p @click="gotoAdminNews" :class="{ 'button-select-active': News }">
            ข่าวประชาสัมพันธ์
          </p>
          <p
            @click="gotoAdminElearn"
            :class="{ 'button-select-active': Elearn }"
          >
            ศูนย์ความรู้
          </p>
        </div>
        <div class="sidebar-btn">
          <button @click="logout" class="logout-btn">ออกจากระบบ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminNavbar",
  data() {
    return {
      // User: true,
      // Eva:false,
      // News:false,
    };
  },
  methods: {
    logout() {
      return this.$router.push("/");
    },
    gotoAdminUser() {
      // this.$router.push("/admin-user");
      this.User = true;
      this.Eva = false;
      this.News = false;
      this.showUser();
    },
    gotoAdminEva() {
      // this.$router.push("/admin-history");
      this.User = false;
      this.Eva = true;
      this.News = false;
      this.showEva();
    },
    gotoAdminNews() {
      // this.$router.push("/admin-news");
      this.User = false;
      this.Eva = false;
      this.News = true;
      this.showNews();
    },
    gotoAdminElearn() {
      this.$router.push("/admin-elearn");
    },
    showUser() {
      this.$router.push("/admin-user");
    },
    showEva() {
      this.$router.push("/admin-evaluation");
    },
    showNews() {
      this.$router.push("/admin-news");
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
.hnavbar {
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
  padding-top: 69px;
  top: 0;
  left: 0;
  z-index: 1;
}
.sidebar-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.menu-list {
  width: 100%;
}
.menu-list p {
  padding: 10px;
  border-bottom: solid 2px #80073c;
  width: 100%;
  margin: 0;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}
.menu-list p:hover {
  cursor: pointer;
  background-color: #80073c;
  color: #fff;
}
.button-select-active {
  background-color: #2d9e87;
}
.sidebar-btn {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}
.sidebar-btn button {
  width: 90%;
  height: 100%;
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
  .hnavbar {
    display: contents;
  }
  .sidebar {
    display: none;
  }
  .mainpage {
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
