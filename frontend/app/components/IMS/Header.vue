<script setup lang="ts">
definePageMeta({ middleware: ['auth'] })

const auth = useAuth()

async function onLogout() {
  await auth.logout()
  await navigateTo('/auth/login')
}
</script>

<template>
    <header class="ims-header">
        <div class="ims-header__top container-flex">
            <section>
                <NuxtLink class="logo ft-h1" to="/ims">
                    <span>HUMAN</span>ims
                </NuxtLink>
            </section>
            <IMSNav class="desktop-nav" />
            <section>
                <UIButton icon-left="support" label="Support" :disabled="true" />
                <UIButton icon-left="notification" :disabled="true" />
                <UIDropdown>
                    <template #btn>
                        <UIButton class="user-btn" icon-left="user" :rounded="true" variant="accent" />
                    </template>
                    <template #body>
                        <div id="user-dropdown__info" v-if="auth.user.value">
                            <span id="user-dropdown__info-label" class="ft-body-lg">LOGGED IN AS</span>
                            <span id="user-dropdown__info-name" class="ft-h2">{{ auth.user.value.first_name }} {{ auth.user.value.last_name }}</span>
                            <span id="user-dropdown__info-email" class="ft-label">{{ auth.user.value.email }}</span>
                        </div>
                        <hr>
                        <UIButton label="Settings" icon-left="settings" :small="true" variant="transparent"
                            :disabled="true" />
                        <UIButton label="License" icon-left="license" :small="true" variant="transparent"
                            :disabled="true" />
                        <hr>
                        <UIButton label="Documentation" icon-left="documentation" :small="true" variant="transparent"
                            :disabled="true" />
                        <hr>
                        <UIButton label="Log Out" icon-left="logOut" :small="true" variant="alert" @click="onLogout" />
                    </template>
                </UIDropdown>
            </section>
        </div>
        <IMSNav class="mobile-nav" />
    </header>
</template>

<style lang="scss">
.ims-header {
    display: grid;
    gap: var(--spacing-xl);
    padding: var(--spacing-md) var(--spacing-md) 0;
    border-bottom: 1px solid var(--primary-brdr-color);

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
            margin-bottom: var(--spacing-sm);
        }

        .ft-h2 {
            font-weight: 700;
            color: var(--primary-ft-color);
        }

    }

    @include max-width(719.9px) {
        .desktop-nav {
            display: none;
        }

        .mobile-nav {
            justify-content: space-around;
        }
    }

    @include min-width(720px) {
        .ims-header__top {
            align-items: start;
        }

        .mobile-nav {
            display: none;
        }
    }
}
</style>