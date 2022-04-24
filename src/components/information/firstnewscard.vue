<template>
  <div class="new-information">
    <div class="left-column">
      <img
        :src="picture"
        alt=""
      />
      
    </div>
    <div class="right-column">
      <h3><a :href="linkNews" target="_blank">{{topicNews}}</a></h3>
      <p>
        {{introNews.slice(0,500)}}
      <a :href="linkNews" target="_blank">read more</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
    props:["picture","linkNews","topicNews","introNews"]
};
</script>

<style scoped>
.new-information {
  width: 100%;
  height: 400px;
  /* background: #000; */
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
}
.left-column {
  width: 50%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-column img {
  width: auto;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.right-column {
  width: 30%;
  /* background: #346; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}
.right-column h3 a {
  text-decoration: none;
  color: #000;
}
.right-column p {
  text-align: justify;
  margin-top: 10px;
}
.right-column p a{
    color: #80073c;
}
</style>