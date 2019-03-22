<template>
    <div class="body">


        <div v-for="replyList in replyLists">
            <div class="top">
                <img class="header_photo" :src="replyList.header" alt=""/>

                <p style="margin-right: 10px">{{replyList.name}}</p>

                <div class="top_tag">{{replyList.tag}}</div>
            </div>
            <div class="font">{{replyList.answer}}</div>
            <!--<img class="img" :src="img" alt=""/>-->
            <div class="bottom">
                <div>{{replyList.time}}</div>
                <div>
                    <span>回复</span>
                    <span>{{replyList.show}}</span>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Reply",
        data() {
            return {
                replyLists: [
                    {
                        header: '/static/logo.png',
                        name: '陈绘宇',
                        time: '4分钟前',
                        tag: '专家认证',
                        answer: '这段代码错在哪里了呀',
                        show: '未采纳'
                    }, {
                        header: '/static/logo.png',
                        name: '陈绘宇',
                        time: '4分钟前',
                        tag: '专家认证',
                        answer: '这段代码错在哪里了呀',
                        show: '未采纳'
                    }, {
                        header: '/static/logo.png',
                        name: '陈绘宇',
                        time: '4分钟前',
                        tag: '专家认证',
                        answer: '这段代码错在哪里了呀',
                        show: '未采纳'
                    },
                ],

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
        padding: 0 15px;
    }

    .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 15px;
        color: #8F8E94;
        border-bottom: 1px solid #E9E9E9;
    }

</style>
