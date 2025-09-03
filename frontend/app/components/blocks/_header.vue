<script setup lang="ts">
const route = useRoute()
const isActive = (path: string) => {
    if ((path === '/' && route.path === '/') || (route.path.startsWith(path) && path !== '/')) {
        return true
    }
    return false
}
</script>

<template>
    <header id="header-ims" class="container-flex">
        <section>
            <elements-button label="Dashboard" class="mbl" icon="home" to="/" :class="isActive('/') ? 'accent' : 'primary'" />
            <elements-button label="Databases" class="mbl" icon="database" to="/databases" :class="isActive('/databases') ? 'accent' : 'primary'" />
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