<template>
  <div>
    <header>
        <Ad-Nav/>
    </header>
    <UserDisease />
  </div>
</template>

<script>
import UserDisease from "../../../components/adminpage/userDetails/userDisease.vue"
export default {
  name: "UserDiseaseView",
  components: {
    UserDisease,
  },
};
</script>

<style></style>