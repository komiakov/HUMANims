<template>
    <div id="all-page-ims" data-theme="dark">
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
        padding: 0 24px 12px;
    }
}
</style>