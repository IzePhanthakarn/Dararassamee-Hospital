<template>
  <div>
    <div>
      <Ad-Nav />
    </div>
    <AdminNews />
  </div>
</template>

<script>
import AdminNews from "../../components/adminpage/adminNews.vue";
export default {
  name: "AdminNewsView",
  components: {
    AdminNews,
  },
};
</script>

<style></style>
