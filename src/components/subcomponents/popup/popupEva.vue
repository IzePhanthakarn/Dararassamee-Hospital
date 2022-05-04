<template>
<div class="body-popup">
  <div class="popup">
    <div class="popup-inner">
      <div class="box-popup-icon">
        <fa :icon="['fas', 'triangle-exclamation']" class="popup-icon" />
      </div>
      <div class="text-alert">
        <h2>
          แบบประเมินต่อไปนี้จะมีการเก็บบันทึกข้อมูลส่วนตัวของคุณ
          รวมถึงเรื่องสภาพทางการเงินและสภาพครอบครัว
          ทั้งนี้ก็เพื่อที่จะนำข้อมมูลที่เก็บรวบรวม
          มาใช้ในการประเมินสุขภาพจิตและคัดกรองความเสี่ยงต่อการเป็นโรคซึมเศร้า
          หากพบว่าคุณมีภาวะเสี่ยงต่อการเป็นโรคซึมเศร้าหรือมีภาวะเสี่ยงทางสุขภาพจิตด้านอื่น
          ๆ ทางเราจะรีบติดต่อกลับมาเพื่อดำเนินการรักษาให้เร็วที่สุด ขอบคุณค่ะ !
        </h2>
      </div>
      <div class="popupbox">
        <button class="popup-save" @click="TogglePopup()">ยอมรับ</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ["TogglePopup", "CanclePopup"],
  methods: {
    TogglePopup() {
      return this.$router.push("/select-evaluation");
    },
  },
};
</script>

<style scoped>

.text-alert{
  padding: 50px;
  display: flex;
  text-align: center;
  border: 2px solid black;
  border-radius: 20px;
  background-color: lightgray;
}
.box-popup-icon {
  display: flex;
  justify-content: center;
  margin: 0 0 15px 0;
}
.popup-icon {
  font-size: 100px;
  color: rgb(210, 0, 0);
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-inner {
  background-color: #fff;
  padding: 30px;
  border-radius: 30px;
  border: 2px solid black;
}

button.popup-save {
  font-weight: bold;
  margin-top: 30px;
  margin-right: 20px;
  width: 100%;
  height: 60px;
  font-size: 23px;
  background-color: #80073c;
  border-radius: 20px;
  border: 1.75px solid black;
  color: white;
}
.popupbox {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
