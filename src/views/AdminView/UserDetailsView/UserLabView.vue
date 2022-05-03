<template>
  <div>
    <header>
        <Ad-Nav/>
    </header>
    <UserLab />
  </div>
</template>

<script>
import UserLab from "../../../components/adminpage/userDetails/userLab.vue"
export default {
  name: "UserLabView",
  components: {
    UserLab,
  },
};
</script>

<style></style>