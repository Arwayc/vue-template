<template>
    <div class="home">demo</div>
</template>

<script>
export default {
    name: "home",
    created() {
        window.$get("/", {}, false).then((res) => {});
    },
};
</script>
