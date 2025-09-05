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
        lineRef.value.style.transform = `translateX(${offsetLeft - 6}px)`
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

            </section>
            <section>
                <elements-button :icon_left="theme === 'light' ? 'sun' : 'moon'" class="primary"
                    @click="switchTheme" />
                <elements-button icon_left="notification" class="primary" :disabled="true" />
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
}

nav {
    position: relative;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 9px 6px;

    #header-ims_nav-line {
        position: absolute;
        height: 2px;
        width: 0;
        bottom: 0;
        background-color: var(--ft-main);
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

@media (max-width: 600px) {
    nav {
        justify-content: space-between;
    }
}
</style>