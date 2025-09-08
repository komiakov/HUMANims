<script setup lang="ts">
const { theme } = useTheme()
</script>

<template>
    <div id="all-page-ims" :data-theme="theme">
        <blocks-header />
        <div id="content-ims">
            <NuxtPage />
        </div>
    </div>
</template>

<style lang="scss">
#all-page-ims {
    display: grid;
    grid-template-rows: auto 1fr;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    white-space: nowrap;
    background-color: var(--bg-secondary);

    #content-ims {
        height: 100%;
        overflow: hidden;
        white-space: nowrap;

        #functional-panel {
            padding: 12px;
            background-color: var(--bg-main);
            border-bottom: 1px solid var(--brbr-color);
        }
    }
}
</style>
