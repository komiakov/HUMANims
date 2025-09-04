<script setup lang="ts">
import { useThemes } from "@/utils/useThemes"
const { theme } = useThemes();
</script>

<template>
    <div id="all-page-ims" :data-theme="theme">
        <BlocksHeader />
        <NuxtPage />
    </div>
</template>

<style lang="scss">
#all-page-ims {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 12px;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    white-space: nowrap;
    background-color: var(--bg-main);

    #content-ims {
        display: grid; 
        grid-template-rows: auto 1fr;
        overflow: hidden;
        white-space: nowrap;
        gap: 12px;
        height: 100%;
        padding: 0 24px 12px;

        #content-ims-functional-panel{
            padding: 6px;
            background-color: var(--bg-secondary);
            border-radius: 9px;
        }
    }
}
</style>