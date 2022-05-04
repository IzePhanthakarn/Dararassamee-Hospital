<template>
  <div>
    <header>
      <Ad-Nav />
    </header>
    <AdminUser />
  </div>
</template>

<script>
import AdminUser from "../../components/adminpage/adminUser.vue";
export default {
  name: "AdminUserView",
  components: {
    AdminUser,
  },
};
</script>

<style></style>
