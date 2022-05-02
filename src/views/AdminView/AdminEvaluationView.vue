<template>
  <div>
    <div>
      <Ad-Nav/>
    </div>
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
