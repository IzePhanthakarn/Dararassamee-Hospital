<template>
    <NewsCard 
        v-for="(item,index) in newscards" 
        
        :key="index"
        :picture="item.picture" 
        :topicNews="item.topicNews"
        :introNews="item.introNews"
        :linkNews="item.linkNews"
    />
</template>

<script>
import NewsCard from "./newscard.vue";
export default {
  components: {
    NewsCard,
  },
  props:["newscards"]
};
</script>

<style>
</style>