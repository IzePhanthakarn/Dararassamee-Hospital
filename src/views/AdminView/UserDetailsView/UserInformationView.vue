<template>
  <div>
    <header>
        <Ad-Nav/>
    </header>
    <UserInformation />
  </div>
</template>

<script>
import UserInformation from "../../../components/adminpage/userDetails/userInfo.vue"
export default {
  name: "UserInformationView",
  components: {
    UserInformation,
  },
};
</script>

<style></style>