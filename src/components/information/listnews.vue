<template>
    <newscard 
        v-for="(item,index) in newscards.slice(1)" 
        
        :key="index"
        :picture="item.picture" 
        :topicNews="item.topicNews"
        :introNews="item.introNews"
        :linkNews="item.linkNews"
    />
</template>

<script>
import newscard from "./newscard.vue";
export default {
  components: {
    newscard,
  },
  props:["newscards"]
};
</script>

<style>
</style>