<template>
  <div class="news-box">
    <div class="img-newsbox">
      <img :src="picture" alt="" />
    </div>
    <div class="text-newsbox">
      <h4>
        <a :href="linkNews" target="_blank">{{topicNews}}</a>
      </h4>
      <p>
        {{introNews}}
      </p>
      <a :href="linkNews" target="_blank" class="readmore">read more</a>
    </div>
  </div>
</template>

<script>
export default {
    props:["picture","linkNews","topicNews","introNews"]
};
</script>

<style scoped>
@import url('./newscard.css');
</style>