<template lang="pug">
.window
    header.toolbar.toolbar-header
        h1.title Header
    .window-content
        .pane-group
            .pane-sm.sidebar ...
            .pane
                router-view
    footer.toolbar.toolbar-footer
        h1.title Footer
</template>

<script>
export default {
    name: "Common",
    created() {},
};
</script>
