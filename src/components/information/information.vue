<template>
  <header>
    <navbar />
  </header>
  <body>
    <div class="body-box container-fluid">
      <div class="information-title">
        <fa :icon="['fas', 'newspaper']" class="news-icon" />
        <h1>ศูนย์ความรู้</h1>
      </div>
      <div class="topsite">
        <form class="searchbox">
          <div class="searchbox-bg">
            <input type="text" placeholder="ค้นหา.." />
            <button type="submit" class="submit-btn">
              <fa :icon="['fas', 'magnifying-glass']" class="search-icon" />
            </button>
          </div>
        </form>
        <div class="topic-bar">
          <button class="first-btn">ทั่วไป</button>
          <button class="normal-btn">โควิด-19</button>
          <button class="normal-btn">สุขภาพ</button>
          <button class="normal-btn">การแพทย์พื้นฐาน</button>
          <button class="normal-btn">ประกันสุขภาพ</button>
          <button class="last-btn">เทรนด์</button>
        </div>
      </div>
      <div class="new-information">
        <div class="left-column">
          <img src="/public/news1.png" alt="" />
        </div>
        <div class="right-column">
          <h3><a href="#">Lorem lpsum</a></h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            dolores quam quaerat maiores eaque voluptates ratione repellendus
            numquam voluptas iusto perspiciatis nesciunt, delectus saepe dolor
            doloribus reprehenderit magni eos porro consequatur ipsa
            necessitatibus! Distinctio voluptate iusto aperiam aspernatur qui
            enim accusamus excepturi error aliquid, non ducimus ad minima
            praesentium beatae itaque! Inventore explicabo sed esse veniam odio
            perferendis voluptatibus adipisci quas perspiciatis fuga recusandae
            nam similique amet illo minus, excepturi, ea rerum itaque aspernatur
            atque libero.
          </p>
        </div>
      </div>
      <div class="other-information">
        <listnews :newscards="newscards" />
      </div>
    </div>
  </body>
</template>

<script>
import navbar from "../mainpage/navbar.vue";
import listnews from './listnews.vue';
export default {
  components: {
    navbar,
    listnews
  },
  data(){
    return{
      newscards:[
        {
          picture:"https://img.pptvhd36.com/health/thumbor/2022/04/21/cusArticle-5272ba7ee7.jpg",
          topicNews: "โควิดวันนี้ 10 จังหวัด",
          introNews: "โควิดวันนี้ 10 จังหวัดป่วยสูงสุด อีสานพุ่งแรงหลายจังหวัด",
          linkNews: "https://www.pptvhd36.com/health/news/575",
        },
        {
          picture:"https://img.pptvhd36.com/health/thumbor/2022/04/21/cusArticle-8c01c282a2.jpg",
          topicNews:"เปิดแนวทางการรับวัคซีน",
          introNews:"เปิดแนวทางการฉีดวัคซีนโควิด-19 สำหรับทุกวัยและกลุ่มผู้ที่เคยติดเชื้อจนหายแล้ว",
          linkNews:"https://www.pptvhd36.com/health/news/579"
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url('./information.css');
</style>