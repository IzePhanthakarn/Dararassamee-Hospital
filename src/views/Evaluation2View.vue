<template>
  <div>
    <header>
        <Nav />
    </header>
    <Evaluation2 />
  </div>
</template>

<script>
import Evaluation2 from "../components/evaluation/evaluation2.vue";
export default {
  name: "EvaluationView",
  components: {
    Evaluation2,
  },
};
</script>

<style>
</style>