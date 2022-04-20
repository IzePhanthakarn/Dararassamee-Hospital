<template>
  <nav class="navbar navbar-box navbar-expand-lg navbar-dark static-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <strong>Happy Cop.</strong>
          </a>
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
                <a class="nav-link" aria-current="page" href="#"
                  >หน้าหลัก</a>
              </li>
              <li class="nav-item1 mx-4">
                <a class="nav-link" href="#">ข้อมูล</a>
              </li>
              <li class="nav-item1 mx-4">
                <a class="nav-link" href="#">ประวัติ</a>
              </li>
              <li class="nav-item1 mx-4">
                <a class="nav-link" href="#">ติดต่อ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
export default {
    name:"navbar"

}
</script>

<style scoped>
.navbar {
  background-color: #80073c;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.navbar-brand{
  font-size: 30px;
}
.nav-link{
  font-size: 20px;
}
.nav-link:hover{
  color: #fff;
}
</style>