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
        padding: 0 6px 12px;

        #content-ims-functional-panel {
            padding: 6px;
            background-color: var(--bg-secondary);
            border-radius: 9px;
        }
    }
}

[data-theme="light"] {
    #content-ims-functional-panel {
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
}

[data-theme="dark"] {
    #content-ims-functional-panel {
        border: 1px solid var(--brdr-primary);
    }
}
</style>