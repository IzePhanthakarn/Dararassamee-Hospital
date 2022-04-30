<template>
  <div class="selector-title container-fluid">
    <fa :icon="['fas', 'book-medical']" class="selector-icon" />
    <h1>แบบประเมิน</h1>
  </div>
  <div class="body-box container-fluid">
    <div class="button-area">
      <div class="button-content">
        <button @click="goQ5">แบบประเมินสุขภาพจิต(Q5)</button>
      </div>
      <div class="button-content">
        <button @click="goQ9">แบบประเมินโรคซึมเศร้า(Q9)</button>
      </div>
      <div class="button-content">
        <button @click="goQ8">แบบประเมินการฆ่าตัวตาย(Q8)</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectEva",
  methods: {
    goQ5() {
      return this.$router.push("/evaluationQ5");
    },
    goQ9() {
      return this.$router.push("/evaluationQ9");
    },
    goQ8() {
      return this.$router.push("/evaluationQ8");
    },
  },
};
</script>

<style scoped>
@import url("./select-evaluation.css");
</style>
