<template>
  <div class="body">
    <div class="top">
      <img class="header_photo" :src="header" alt="">
      <div class="header_p">
        <p>{{name}}</p>
        <p>{{time}}</p>
      </div>
      <div class="top_tag">{{tag}}</div>
    </div>
    <div class="font">{{question}}</div>
    <img class="img" :src="img" alt="">
    <div class="bottom">
      <div style="color: #40AE4A">{{status}}</div>
      <div>{{payfor}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "QuestionTwo",
    data() {
      return {
        header: '/static/logo.png',
        name: '陈绘宇',
        time: '4分钟前',
        tag: 'IT',
        question: '这段代码错在哪里了呀',
        img: '/static/logo.png',
        status: '等待回答',
        payfor: '悬赏5积分',
      }
    }
  }
</script>

<style scoped>
  .body {
    font-size: 14px;
  }

  .top {
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .header_photo {
    width: 30px;
    height: 30px;
    border: 1px solid #40AE4A;
    border-radius: 100px;
    margin-right: 10px;
  }

  .header_p p {
    margin: 0;
  }

  .top_tag {
    width: 40px;
    border: 2px solid #40AE4A;
    border-radius: 5px;
    color: #40AE4A;
    font-weight: bold;
    margin: 0 0 0 auto;
  }

  .font {
    text-align: left;
    padding: 15px 15px;
  }
  .img {
    width: 100%;
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
  }
</style>
