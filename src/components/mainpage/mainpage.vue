<template>
  <div class="main">
    <header>
      <navbar />
    </header>
    <div class="body">
      <div class="body-box container-fluid">
        <div class="first-column">
          <img src="/public/news.jpg" alt="">
        </div>
        <div class="second-column">
          <div class="obtions">
            <div class="info-list">
              <button class="info-btn">ประวัติการรักษา</button>
              <button class="info-btn">ศูนย์ความรู้</button>
              <button class="info-btn">แบบประเมิน</button>
            </div>
          </div>
          <div class="appointment">
            <button class="btn-appointment">วันนัดพบแพทย์</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
export default {
  name: "mainpage",
  components: {
    navbar,
  },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .main {
    background-image: url("/public/dara-hospital.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .body {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .body-box {
    background-color: lightgray;
    height: 80%;
    /* width: 80%; */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 30px;
    display: flex;
  }
  
  .first-column {
    width: 70%;
    height: 100%;
    /* background: red; */
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .first-column img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  
  .second-column {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  
  .obtions {
    width: 100%;
    height: 50%;
    /* background: #8954; */
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .info-list {
    width: 90%;
    height: 100%;
    background-color: #80073c;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  
  .info-list button {
    width: 70%;
    height: 75px;
    border-radius: 20px;
    border: none;
    font-size: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all .5s;
  
  }
  .appointment {
    width: 80%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .appointment button {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: 5px solid #80073c;
    font-size: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all .5s;
  }
  
  .appointment button:hover,
  .info-list button:hover{
      transform: scale(1.05);
  }
  
  .appointment button:active,
  .info-list button:active{
      transform: scale(.95);
  }
  @media (min-width: 576px) { 
  .container-fluid{
    width: 100%;
  }
 }

 /* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { 
  .container-fluid{
    width: 540px;
  }
 }
@media (min-width: 768px) { 
  .container-fluid{
    width: 720px;
  }
 }
 /* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .container-fluid{
    width: 960px;
  }
 }

 /* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .container-fluid{
    width: 1140px;
  }
 }
 @media (min-width: 1400px) {
  .container-fluid{
    width: 1320px;
  }
 }
 @media (min-width: 1600px) {
  .container-fluid{
    width: 1570px;
  }
 }
</style>