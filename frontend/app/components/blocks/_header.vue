<script setup lang="ts">
const route = useRoute()
const icons = useIcons()
const { theme, switchTheme } = useTheme()

const header_navigation_buttons = {
    dashboard: { label: 'Dashboard', icon: "dashboard", link: '/' },
    databases: { label: 'Databases', icon: "database", link: '/databases' },
    reports: { label: "Reports", icon: "report", link: '/reports' },
}

const is_active = (path: string) => {
    if ((path === '/' && route.path === '/') || (route.path.startsWith(path) && path !== '/')) {
        return true
    }
    return false
}

const navRef = ref<HTMLElement | null>(null)
const lineRef = ref<HTMLElement | null>(null)

const updateLinePosition = () => {
    if (!navRef.value || !lineRef.value) return
    const activeLink = navRef.value.querySelector('.header-ims_nav-link.active') as HTMLElement
    if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink
        lineRef.value.style.transform = `translateX(${offsetLeft}px)`
        lineRef.value.style.width = `${offsetWidth}px`
    }
}

onMounted(() => {
    nextTick(() => updateLinePosition())
})

watch(() => route.path, () => {
    nextTick(() => updateLinePosition())
})
</script>

<template>
    <header id="header-ims">
        <section class="container-flex">
            <section>
                <NuxtLink id="header-ims__logo" to="/">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="header-ims__logo__icon1" d="M33 0C34.6569 0 36 1.34315 36 3V33C36 34.6569 34.6569 36 33 36H3C1.34315 36 4.83199e-08 34.6569 0 33V3C0 1.34315 1.34315 4.83191e-08 3 0H33ZM12.0186 11.2402C11.7381 11.2403 11.4947 11.3352 11.2881 11.5244C11.0963 11.7135 11.0001 11.9532 11 12.2441V24.9961C11.0001 25.2724 11.0963 25.5122 11.2881 25.7158C11.4947 25.905 11.7381 26 12.0186 26H12.6387C12.9192 26 13.1557 25.905 13.3477 25.7158C13.554 25.5122 13.6571 25.2723 13.6572 24.9961V20.1924C13.6572 20.0177 13.7534 19.9297 13.9453 19.9297H17.9316C18.1233 19.9298 18.2188 20.0178 18.2188 20.1924V24.9961C18.2189 25.2723 18.3152 25.5122 18.5068 25.7158C18.7134 25.9049 18.957 25.9999 19.2373 26H19.8359C20.1311 25.9999 20.3745 25.905 20.5664 25.7158C20.7581 25.5122 20.8544 25.2724 20.8545 24.9961V12.2441C20.8544 11.9533 20.7581 11.7135 20.5664 11.5244C20.3745 11.3352 20.1311 11.2403 19.8359 11.2402H19.2373C18.957 11.2403 18.7134 11.3353 18.5068 11.5244C18.3152 11.7135 18.2188 11.9533 18.2188 12.2441V17.0264C18.2187 17.2299 18.1232 17.3319 17.9316 17.332H13.9453C13.7534 17.332 13.6573 17.23 13.6572 17.0264V12.2441C13.6571 11.9534 13.554 11.7135 13.3477 11.5244C13.1557 11.3352 12.9192 11.2402 12.6387 11.2402H12.0186ZM24.0293 14.9297C23.749 14.9297 23.5054 15.0319 23.2988 15.2354C23.1069 15.4246 23.0107 15.658 23.0107 15.9346V24.9961C23.0108 25.2725 23.107 25.5121 23.2988 25.7158C23.5055 25.905 23.7488 26 24.0293 26H24.627C24.9075 26 25.144 25.905 25.3359 25.7158C25.5423 25.5122 25.6454 25.2723 25.6455 24.9961V15.9346C25.6455 15.658 25.5426 15.4246 25.3359 15.2354C25.144 15.0316 24.9074 14.9297 24.627 14.9297H24.0293ZM24.3389 11C23.8814 11.0001 23.483 11.1674 23.1436 11.502C22.8188 11.8222 22.6562 12.201 22.6562 12.6377C22.6563 13.0889 22.8188 13.4817 23.1436 13.8164C23.483 14.1366 23.8813 14.2968 24.3389 14.2969C24.7817 14.2969 25.1655 14.1366 25.4902 13.8164C25.8297 13.4817 26 13.0889 26 12.6377C26 12.201 25.8298 11.8222 25.4902 11.502C25.1655 11.1674 24.7816 11 24.3389 11Z" fill="white"/>
                        <path id="header-ims__logo__icon2" d="M12.6387 11.2402C12.9192 11.2402 13.1557 11.3352 13.3477 11.5244C13.554 11.7135 13.6571 11.9534 13.6572 12.2441V17.0264C13.6573 17.23 13.7534 17.332 13.9453 17.332H17.9316C18.1232 17.3319 18.2187 17.2299 18.2188 17.0264V12.2441C18.2188 11.9533 18.3152 11.7135 18.5068 11.5244C18.7134 11.3353 18.957 11.2403 19.2373 11.2402H19.8359C20.1311 11.2403 20.3745 11.3352 20.5664 11.5244C20.7581 11.7135 20.8544 11.9533 20.8545 12.2441V24.9961C20.8544 25.2724 20.7581 25.5122 20.5664 25.7158C20.3745 25.905 20.1311 25.9999 19.8359 26H19.2373C18.957 25.9999 18.7134 25.9049 18.5068 25.7158C18.3152 25.5122 18.2189 25.2723 18.2188 24.9961V20.1924C18.2188 20.0178 18.1233 19.9298 17.9316 19.9297H13.9453C13.7534 19.9297 13.6572 20.0177 13.6572 20.1924V24.9961C13.6571 25.2723 13.554 25.5122 13.3477 25.7158C13.1557 25.905 12.9192 26 12.6387 26H12.0186C11.7381 26 11.4947 25.905 11.2881 25.7158C11.0963 25.5122 11.0001 25.2724 11 24.9961V12.2441C11.0001 11.9532 11.0963 11.7135 11.2881 11.5244C11.4947 11.3352 11.7381 11.2403 12.0186 11.2402H12.6387ZM24.627 14.9297C24.9074 14.9297 25.144 15.0316 25.3359 15.2354C25.5426 15.4246 25.6455 15.658 25.6455 15.9346V24.9961C25.6454 25.2723 25.5423 25.5122 25.3359 25.7158C25.144 25.905 24.9075 26 24.627 26H24.0293C23.7488 26 23.5055 25.905 23.2988 25.7158C23.107 25.5121 23.0108 25.2725 23.0107 24.9961V15.9346C23.0107 15.658 23.1069 15.4246 23.2988 15.2354C23.5054 15.0319 23.749 14.9297 24.0293 14.9297H24.627ZM24.3389 11C24.7816 11 25.1655 11.1674 25.4902 11.502C25.8298 11.8222 26 12.201 26 12.6377C26 13.0889 25.8297 13.4817 25.4902 13.8164C25.1655 14.1366 24.7817 14.2969 24.3389 14.2969C23.8813 14.2968 23.483 14.1366 23.1436 13.8164C22.8188 13.4817 22.6563 13.0889 22.6562 12.6377C22.6562 12.201 22.8188 11.8222 23.1436 11.502C23.483 11.1674 23.8814 11.0001 24.3389 11Z" fill="black"/>
                    </svg>
                    <span id="header-ims__logo__name">HUMANims</span>
                </NuxtLink>
            </section>
            <section>
                <elements-button icon_left="search" class="primary" :disabled="true" />
                <elements-button :icon_left="theme === 'light' ? 'moon' : 'sun'" class="primary" @click="switchTheme" />
                <elements-button icon_left="notification" class="primary" :disabled="true" />
                <elements-dropdown-menu id="header__dropdown" label="Andrii" icon_right="arrow_down" type="accent">
                    <template #>
                        <div id="header__dropdown__info">
                            <span id="header__dropdown__info__name">Andrii KOMIAKOV</span>
                            <span id="header__dropdown__info__email">andrii.komiakov@icloud.com</span>
                        </div>
                        <hr>
                        <elements-button icon_left="settings" label="Settings" class="primary" :disabled="true" />
                        <elements-button icon_left="license" label="License" class="primary" :disabled="true" />
                        <hr>
                        <elements-button icon_left="documentation" label="Documentation" class="primary" :disabled="true" />
                        <elements-button icon_left="support" label="Support" class="primary" :disabled="true" />
                        <hr>
                        <elements-button icon_left="log_out" label="Log Out" class="primary" :disabled="true" />
                    </template>
                </elements-dropdown-menu>
            </section>
        </section>
        <section>
            <nav ref="navRef">
                <NuxtLink v-for="btn in header_navigation_buttons" class="header-ims_nav-link"
                    :class="{ 'active': is_active(btn.link) }" :to="btn.link">
                    <span v-html="icons[btn.icon]" class="header-ims_nav-link_icon"></span>
                    <span class="header-ims_nav-link_label">{{ btn.label }}</span>
                </NuxtLink>

                <span id="header-ims_nav-line" ref="lineRef"></span>
            </nav>
        </section>
    </header>
</template>

<style lang="scss">
@mixin hover() {
    &:hover {
        @media (hover: hover) and (pointer: fine) {
            @content;
        }
    }
}

#header-ims {
    display: grid;
    gap: 12px;
    padding: 12px 12px 0;
    background-color: var(--bg-main);
    border-bottom: 1px solid var(--brbr-color);

    #header-ims__logo {
        display: flex; align-items: center; gap: 9px;
        #header-ims__logo__icon1 {
            fill: var(--accent);
        }

        #header-ims__logo__icon2 {
            fill: var(--white);
        }

        #header-ims__logo__name {
            font-size: 18px;
            color: var(--ft-main);
        }
    }

    #header__dropdown {
        #header__dropdown__info {
            display: grid; gap: 6px;
            padding: 12px 6px;
            #header__dropdown__info__name {
                font-size: 16px; font-weight: 500;
                color: var(--ft-main);
                cursor: default;
            }

            #header__dropdown__info__email {
                font-size: 12px;
                opacity: .75;
                color: var(--ft-main);
                cursor: default;
            }
        }
    }
}

nav {
    position: relative;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 9px 0;

    #header-ims_nav-line {
        position: absolute;
        height: 2px;
        width: 0;
        bottom: 0;
        background-color: var(--accent);
        transition: transform 0.3s ease, width 0.3s ease;
        transform: translateX(0);

    }

    .header-ims_nav-link {
        display: flex;
        align-items: center;
        gap: 9px;
        padding: 9px 12px 9px 9px;
        border-radius: 6px;
        transition: .3s all;
        cursor: pointer;

        .header-ims_nav-link_icon {
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                width: 18px;
                height: 18px;

                path {
                    stroke: var(--ft-secondary);
                    transition: .3s all;
                }
            }
        }

        .header-ims_nav-link_label {
            color: var(--ft-secondary);
            font-size: 13px;
            font-weight: 400;
            transition: .3s all;
        }

        &.active {
            .header-ims_nav-link_icon svg path {
                stroke: var(--ft-main);
            }

            .header-ims_nav-link_label {
                color: var(--ft-main);
            }
        }

        @include hover() {
            background-color: var(--bg-item-main);

            .header-ims_nav-link_icon svg path {
                stroke: var(--ft-main);
            }

            .header-ims_nav-link_label {
                color: var(--ft-main);
            }
        }
    }
}

@media (max-width: 480px) {
    #header-ims__logo__name {
        display: none;
    }
    nav {
        justify-content: space-between;
    }
}
</style>