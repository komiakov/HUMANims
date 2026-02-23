<template>
    <div id="all-page">
        <LayoutAppHeader />

        <div id="content">

        </div>
    </div>
</template>

<style lang="scss">
#all-page {
    background-color: var(--primary-bg-color);

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
    }
}
</style>