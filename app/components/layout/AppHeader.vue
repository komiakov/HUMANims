<script setup lang="ts">
import AppNav from './AppNav.vue';

</script>

<template>
    <header>
        <div class="container-flex">
            <section>

            </section>
            <section>
                <UiHmnButton icon-left="search" label="Search anything ..." :hide-label-on-mobile="true" />
                <UiHmnButton icon-left="support" label="Support" :hide-label-on-mobile="true" />
                <UiHmnButton icon-left="notification" />

                <UiHmnDropdown>
                    <template #btn>
                        <UiHmnButton icon-left="user" :rounded="true" variant="accent" />
                    </template>

                    <template #body>
                        <div id="user-dropdown__info">
                            <span id="user-dropdown__info-label" class="ft-body-lg">LOGGED IN AS</span>
                            <span id="user-dropdown__info-name" class="ft-h3">Andrii KOMIAKOV</span>
                            <span id="user-dropdown__info-email" class="ft-label">andrii.komiakov@icloud.com</span>
                        </div>
                        <hr>
                        <UiHmnButton label="Settings" icon-left="settings" :small="true" variant="transparent" />
                        <UiHmnButton label="License" icon-left="license" :small="true" variant="transparent" />
                        <hr>
                        <UiHmnButton label="Documentation" icon-left="documentation" :small="true"
                            variant="transparent" />
                        <hr>
                        <UiHmnButton label="Log Out" icon-left="logOut" :small="true" variant="alert" />
                    </template>
                </UiHmnDropdown>
            </section>
        </div>
        <AppNav />
    </header>
</template>

<style lang="scss">
header {
    display: grid;
    gap: var(--spacing-xl);
    padding: var(--spacing-md) var(--spacing-md) 0;
    border-bottom: 1px solid var(--primary-brdr-color);
    background-color: var(--primary-bg-color);

    #user-dropdown__info {
        display: grid;
        min-width: 210px;
        padding: var(--spacing-sm);

        span {
            cursor: default;
        }

        .ft-body-lg,
        .ft-label {
            color: var(--secondary-ft-color);
        }

        .ft-body-lg {
            margin-bottom: var(--spacing-md);
        }

        .ft-h3 {
            color: var(--primary-ft-color);
        }

    }
}
</style>