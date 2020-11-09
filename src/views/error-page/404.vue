<template lang="pug">
.vsat-container
    .notfound-wrap.flex-box
        .notfound-wrap-left
            h1 Oops!
            span 页面未找到
        .notfound-wrap-right
</template>

<script>
export default {
    name: "home",
    created() {},
};
</script>

<style lang="stylus" scoped>
.notfound-wrap-right {
    background: url('../../assets/common/imgs/404.jpg');
    background-size: 102% 102%;
    background-repeat: no-repeat;
    background-position: 50%;
}

.notfound-wrap {
    width: 1000px;
    height: 80%;
    margin: 0px auto 0px auto;

    .notfound-wrap-left {
        width: 400px;
        padding-top: 250px;
    }

    .notfound-wrap-right {
        flex-grow: 1;
    }
}
</style>