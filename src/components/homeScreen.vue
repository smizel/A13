<template>
  <div>
    <div class="show">
      <div @click="showFree">免费问答</div>
      <div @click="showPay">付费专区</div>
    </div>
    <QuestionOne v-if="isFree"/>
    <QuestionTwo v-if="isPay"/>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        isFree: true,
        isPay: false
      }
    },
    methods:{
      showFree(){
        this.isFree=true;
        this.isPay=false
      },
      showPay(){
        this.isFree=false;
        this.isPay=true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .show {
    display: flex;
    justify-content: space-around;
  }
</style>
