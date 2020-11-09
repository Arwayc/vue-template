<template lang="pug">
.vsat-container
    .login-wrap.flex-box
        .login-wrap-left
        .login-wrap-right
            login-form
</template>

<script>
import LoginForm from "@/components/LoginForm";
export default {
    name: "home",
    components: { LoginForm },
    created() {},
};
</script>

<style lang="stylus" scoped>
.vsat-container {
    font-family: 'Roboto';
    background-color: #2c3e50;
    padding: 1px;
}

.login-wrap {
    background-color: #fff;
    width: 750px;
    border-radius: 10px;
    height: 420px;
    margin: 150px auto 0px auto;

    .login-wrap-left, .login-wrap-right {
        width: 50%;
    }

    .login-wrap-left {
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        background: url('../../assets/common/imgs/login-page-left.jpg');
        background-size: cover;
        background-position: 50%;
    }

    .login-wrap-right {
        padding: 20px 30px 0px 30px;
    }
}
</style>