<template>
  <div>
    <header>
      <Ad-Nav />
    </header>
    <AdminElearn />
  </div>
</template>

<script>
import AdminElearn from "../../components/adminpage/adminElearn.vue";
export default {
  name: "AdminElearnView",
  components: {
    AdminElearn,
  },
};
</script>

<style></style>
