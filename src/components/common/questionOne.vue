<template>
    <div class="body">

        <!--问题循环列表-->
        <div class="border">
            <div class="border" v-for="questionList in questionLists" @click="change">
                <div class="top">
                    <img class="header_photo" :src="questionList.header" alt=""/>

                    <p style="margin-right: 10px">{{questionList.name}}</p>
                    <p style="color: #40AE4A">{{questionList.status}}</p>

                    <div class="top_tag">{{questionList.tag}}</div>
                </div>
                <div class="font">{{questionList.question}}</div>
                <!--<img class="img" :src="img" alt=""/>-->
                <div class="bottom">
                    <div>{{questionList.answer}}</div>
                    <div>{{questionList.time}}</div>
                    <div>{{questionList.show}}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "QuestionOne",
        data() {
            return {
                questionLists: [
                    {
                        header: '/static/logo.png',
                        name: '陈绘宇',
                        time: '4分钟前',
                        tag: 'IT',
                        question: '这段代码错在哪里了呀',
                        img: '/static/logo.png',
                        status: '等待回答',
                        answer: '5回答',
                        show: '展开'
                    }, {
                        header: '/static/logo.png',
                        name: '陈绘宇',
                        time: '4分钟前',
                        tag: 'IT',
                        question: '这段代码错在哪里了呀',
                        img: '/static/logo.png',
                        status: '等待回答',
                        answer: '5回答',
                        show: '展开'
                    }, {
                        header: '/static/logo.png',
                        name: '陈绘宇',
                        time: '4分钟前',
                        tag: 'IT',
                        question: '这段代码错在哪里了呀',
                        img: '/static/logo.png',
                        status: '等待回答',
                        answer: '5回答',
                        show: '展开'
                    },
                ],

            }
        },
        methods: {
            change(){
                this.$router.push({  //核心语句
                    path: '/more',   //跳转的路径
                    query: {           //路由传参时push和query搭配使用 ，作用时传递参数
                        id: this.id,
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .body {
        font-size: 14px;
    }

    .border {
        border-top: #F9F9F9 solid 5px;
        border-bottom: #F9F9F9 solid 5px;
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

    .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        color: #8F8E94;
    }

</style>
