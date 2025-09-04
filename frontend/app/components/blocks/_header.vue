<script setup lang="ts">
import { useThemes } from "@/utils/useThemes"

const route = useRoute()
const { theme, changeTheme } = useThemes();

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
            <elements-button label="Dashboard" class="mbl header-ims__nav-btn" icon="home" to="/"
                :class="isActive('/') ? 'accent' : 'primary'" />
            <elements-button label="Databases" class="mbl header-ims__nav-btn" icon="database" to="/databases"
                :class="isActive('/databases') ? 'accent' : 'primary'" />
            <elements-button label="Reports" class="primary mbl header-ims__nav-btn" icon="report" :disabled="true" />
        </section>
        <section>
            <elements-button class="primary" :icon="theme == 'light' ? 'moon' : 'sun'" @click="changeTheme" />
            <elements-button class="primary" icon="notification" :disabled="true" />
            <elements-dropdown-menu label="Andrii" variant="accent mbl" icon="arrowDown" iconSide="right">
                <template #>
                    <elements-button class="primary" icon="settings" label="Settings" :disabled="true" />
                    <elements-button class="primary" icon="license" label="License" :disabled="true" />
                    <hr>
                    <elements-button class="primary" icon="documentation" label="Documentation" :disabled="true" />
                    <elements-button class="primary" icon="support" label="Support" :disabled="true" />
                    <hr>
                    <elements-button class="primary" icon="logOut" label="Log Out" :disabled="true" />
                </template>
            </elements-dropdown-menu>
        </section>
    </header>
</template>

<style lang="scss">
#header-ims {
    padding: 12px;
    background-color: var(--bg-secondary);
}

@media (min-width: 769px) {
    #header-ims .header-ims__nav-btn {
        min-width: 134px;
    }
}
</style>