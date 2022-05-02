<template>
  <div>
    <header>
        <Ad-Nav/>
    </header>
    <AdminDetails />
  </div>
</template>

<script>
import AdminDetails from "../../components/adminpage/adminDetails.vue";
export default {
  name: "AdminDetailsView",
  components: {
    AdminDetails,
  },
};
</script>

<style></style>