<template>
  <div class="selector-title container-fluid">
    <fa :icon="['fas', 'book-medical']" class="selector-icon" />
    <h1>แบบประเมิน</h1>
  </div>
  <div class="body-box container-fluid">
    <div class="button-area">
      <div class="button-content">
        <button>แบบประเมินสุขภาพจิต(Q5)</button>
      </div>
      <div class="button-content">
        <button>แบบประเมินโรคซึมเศร้า(Q9)</button>
      </div>
      <div class="button-content">
        <button>แบบประเมินการฆ่าตัวตาย(Q8)</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("./select-evaluation.css");
</style>
