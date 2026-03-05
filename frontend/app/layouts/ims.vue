<script lang="ts" setup>

</script>

<template>
    <div class="page" id="ims-page">
        <IMSHeader />

        <div class="content">
            <NuxtPage />
        </div>
    </div>
</template>

<style lang="scss">
#ims-page {
    &, .content {
        display: grid;
        grid-template-rows: auto 1fr;
    }

    .content {
        &, .content-body {
            height: 100%;
            overflow: hidden;
        }

        .content-header {
            padding: var(--spacing-md);
            border-bottom: 1px solid var(--primary-brdr-color);
        }

        .content-body {
            background-color: var(--accent-bg-color);
        }
    }
}
</style>