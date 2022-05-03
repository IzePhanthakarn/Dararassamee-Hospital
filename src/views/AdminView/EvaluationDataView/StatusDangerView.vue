<template>
  <div>
    <header>
        <Ad-Nav/>
    </header>
    <EvaDanger />
  </div>
</template>

<script>
import EvaDanger from "../../../components/adminpage/adminData/eva-danger.vue";
export default {
  name: "EvaDangerView",
  components: {
    EvaDanger,
  },
};
</script>

<style></style>