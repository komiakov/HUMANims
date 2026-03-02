<template>
    <div class="all-page" id="ims-page">
        <LayoutAppHeader />

        <div id="content">
            <NuxtPage />
        </div>
    </div>
</template>

<style lang="scss">
#ims-page {

    &,
    #content {
        display: grid;
        align-items: start;
        align-content: start;
        grid-template-rows: auto 1fr;
        overflow: hidden;
    }
    #content {
        height: 100%;
        background-color: var(--secondary-bg-color);

        #content-header {
            padding: var(--spacing-sm) var(--spacing-md);
            border-bottom: 1px solid var(--primary-brdr-color);
        }
    }
}
</style>