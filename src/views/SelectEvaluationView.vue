<template>
  <div>
    <header>
      <Nav />
    </header>
    <SelectEvaluation />
  </div>
</template>

<script>
import SelectEvaluation from "../components/select-evaluation/select-evaluation.vue";
export default {
  name: "SelectEvaluationView",
  components: {
    SelectEvaluation,
  },
};
</script>

<style></style>
