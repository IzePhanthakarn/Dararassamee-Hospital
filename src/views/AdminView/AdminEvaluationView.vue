<template>
  <div>
    <header>
      <Ad-Nav/>
    </header>
    <AdminEvaluation />
  </div>
</template>

<script>
import AdminEvaluation from "../../components/adminpage/adminEvaluation.vue";
export default {
  name: "AdminEvaluationView",
  components: {
    AdminEvaluation,
  },
};
</script>

<style></style>
