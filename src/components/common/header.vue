<template>
    <div class="out">
        <div class="header">
            <div>🔙</div>
            <div>问题详情</div>
            <div>更多</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .out {
        width: 100%;
    }

    .header {
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        line-height: 25px;
        background-color: #fff;
        box-shadow: darkgrey 0 1px 3px 1px;
    }

</style>