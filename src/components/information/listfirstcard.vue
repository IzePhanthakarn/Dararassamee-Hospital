<template>
    <FirstNewsCard 
        v-for="(item,index) in newscards.slice(0,1)" 
        
        :key="index"
        :picture="item.picture" 
        :topicNews="item.topicNews"
        :introNews="item.introNews"
        :linkNews="item.linkNews"
    />
</template>

<script>
import FirstNewsCard from './firstnewscard.vue';
export default {
  components: {
    FirstNewsCard
  },
  props:["newscards"]
};
</script>

<style>
</style>