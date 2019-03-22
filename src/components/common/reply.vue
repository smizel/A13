<template>
  <div class="body">
    <div class="top">
      <img class="header_photo" :src="header" alt=""/>

      <p style="margin-right: 10px">{{name}}</p>

      <div class="top_tag">{{tag}}</div>
    </div>
    <div class="font">{{answer}}</div>
    <!--<img class="img" :src="img" alt=""/>-->
    <div class="bottom">
      <div>{{time}}</div>
      <div>
        <span>回复</span>
        <span>{{show}}</span>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: "Reply",
    data() {
      return {
        header: '/static/logo.png',
        name: '陈绘宇',
        time: '4分钟前',
        tag: 'IT',
        answer: '这段代码错在哪里了呀',
        show:'未采纳'
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

  .top_tag {
    color: #40AE4A;
    font-weight: bold;
    margin: 0 0 0 auto;
  }

  .font {
    text-align: left;
    padding: 15px 15px;
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    color: #8F8E94;
  }

</style>
