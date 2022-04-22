<template>
    <Historycard
        v-for="(item,index) in historycards" 
        
        :key="index"
        :date="item.date" 
        :time="item.time"
        :location="item.location"
        :docName="item.docName"
        :symptom="item.symptom"
        :docLink="item.docLink"
    />
</template>

<script>
import Historycard from './historycard.vue';

export default {
  components: {
    Historycard,
  },
  props:["historycards"]
};
</script>

<style>
</style>