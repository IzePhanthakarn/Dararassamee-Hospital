<template>
  <header>
    <Navbar />
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
          <button class="normal-btn third-btn">สุขภาพ</button>
          <button class="normal-btn fourth-btn">การแพทย์พื้นฐาน</button>
          <button class="normal-btn">ประกันสุขภาพ</button>
          <button class="last-btn">เทรนด์</button>
        </div>
      </div>
      <div class="first-news">
      <ListFirstCard :newscards="newscards" />
      </div>
      <div class="other-information">
        <Listnews :newscards="newscards" />
      </div>
    </div>
  </body>
</template>

<script>
import Navbar from "../mainpage/navbar.vue";
import ListFirstCard from "./listfirstcard.vue";
import Listnews from "./listnews.vue";

export default {
  components: {
    Navbar,
    Listnews,
    ListFirstCard,
  },
  data() {
    return {
      newscards: [
        {
          picture:
            "https://img.pptvhd36.com/health/thumbor/2022/04/24/cusArticle-108202bb4b.jpg",
          topicNews: "โควิดวันนี้ (22เม.ย.)",
          introNews: `ศบค. รายงานสถานการณ์โควิดวันนี้ ติดเชื้อรวม 17,784 ราย ส่วนเสียชีวิต 126 ราย ปอดอักเสบ 1,929 ราย
ศูนย์ข้อมูลโควิด-19 รายงานสถานการณ์การแพร่ระบาดของโควิด-19 วันที่ 24 เมษายน 2565 ยอดผู้ติดเชื้อรวม 17,784 ราย จำแนกเป็น ผู้ป่วยจากในประเทศ 17,706  ราย และผู้ป่วยมาจากต่างประเทศ 78 ราย หายป่วยกลับบ้าน 22,846 ราย ผู้ป่วยกำลังรักษา 183,154 ราย และเสียชีวิต 126 ราย ผู้ป่วยปอดอักเสบรักษาตัวอยู่ในโรงพยาบาล 1,929 ราย เฉลี่ยจังหวัดละ 25 ราย อัตราครองเตียง ร้อยละ 24.5 ส่วนผู้ป่วยสะสม (ตั้งแต่วันที่ 1 ม.ค.65) 1,942,439 หายป่วยสะสม (ตั้งแต่วันที่ 1 ม.ค.65) 1,786,451 ราย`,
          linkNews: "https://www.pptvhd36.com/health/news/607",
        },
        {
          picture:
            "https://img.pptvhd36.com/health/thumbor/2022/04/21/cusArticle-5272ba7ee7.jpg",
          topicNews: "โควิดวันนี้ 10 จังหวัด",
          introNews: `ศูนย์ข้อมูลโควิด-19 รายงานสถานการณ์การแพร่ระบาดของโควิด-19 วันที่ 21 เมษายน 2565 ยอดผู้ติดเชื้อรวม 21,931 ราย จำแนกเป็น ผู้ป่วยจากในประเทศ 21,816 ราย และผู้ป่วยมาจากต่างประเทศ 115 ราย หายป่วยกลับบ้าน 24,619 ราย ผู้ป่วยกำลังรักษา 188,926 ราย และเสียชีวิต 129 ราย ผู้ป่วยปอดอักเสบรักษาตัวอยู่ในโรงพยาบาล 2,021 ราย เฉลี่ยจังหวัดละ 26 ราย อัตราครองเตียง ร้อยละ 25.1 ส่วนผู้ป่วยสะสม (ตั้งแต่วันที่ 1 ม.ค.65) 1,882,795 ราย หายป่วยสะสม (ตั้งแต่วันที่ 1 ม.ค.65) 1,721,418 ราย`,
          linkNews: "https://www.pptvhd36.com/health/news/575",
        },
        {
          picture:
            "https://img.pptvhd36.com/health/thumbor/2022/04/21/cusArticle-8c01c282a2.jpg",
          topicNews: "เปิดแนวทางการรับวัคซีน",
          introNews:
            `หลายคนสงสัยว่าติดเชื้อโควิด-19 รักษาหายแล้ว ต้องฉีดวัคซีนป้องกันโควิด-19 อีกไหม และเมื่อไหร่ถึงควรฉีด สำหรับผู้ป่วยโควิด-19 ที่รักษาหายแล้ว ร่างกายจะมีภูมิต้านทานต่อเชื้อโรคนั้นโดยธรรมชาติ ในช่วงระยะเวลาหนึ่ง ซึ่งภูมิต้านทานจะมีมากหรือน้อย ขึ้นกับแต่ละบุคคล เมื่อเวลาผ่านไปจะลดลงตามลำดับ ขณะที่โควิด-19 สายพันธุ์โอมิครอนมีการแพร่กระจายเชื้อได้ดีและสามารถติดซ้ำได้ภายใน 30-40 วัน จึงมีแนวทางการฉีดวัคซีนจากกระทรวงสาธารณะสุข ดังนี้`,
          linkNews: "https://www.pptvhd36.com/health/news/579",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("./information.css");
</style>