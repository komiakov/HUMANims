<script setup lang="ts">
const { theme } = useTheme()
</script>

<template>
    <div id="all-page-ims" :data-theme="theme">
        <blocks-header />
        <NuxtPage />
    </div>
</template>

<style lang="scss">
#all-page-ims {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    white-space: nowrap;
    background-color: var(--bg-secondary);
}
</style>
