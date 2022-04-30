<template>
  <div>
    <header>
        <Nav />
    </header>
    <EvaluationQ8 />
  </div>
</template>

<script>
import EvaluationQ8 from "../components/evaluation/evaluationQ8.vue";
export default {
  name: "EvaluationViewQ8",
  components: {
    EvaluationQ8,
  },
};
</script>

<style>
</style>