<template>
    <header id="header-ims" class="container-flex">
        <section>
            <elements-button label="Dashboard" class="accent mbl" icon="home" />
            <elements-button label="Databases" class="primary mbl" icon="database" :disabled="true" />
            <elements-button label="Reports" class="primary mbl" icon="report" :disabled="true" />
        </section>
        <section>
            <elements-button class="primary" icon="notification" :disabled="true" />
        </section>
    </header>
</template>

<style lang="scss">
#header-ims {
    padding: 12px 24px;
    background-color: var(--bg-secondary);
}
</style>