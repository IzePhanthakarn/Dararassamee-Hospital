<template>
  <div>
    <header>
        <Ad-Nav/>
    </header>
    <EvaWarning />
  </div>
</template>

<script>
import EvaWarning from "../../../components/adminpage/adminData/eva-warning.vue";
export default {
  name: "EvaWarningView",
  components: {
    EvaWarning,
  },
};
</script>

<style></style>