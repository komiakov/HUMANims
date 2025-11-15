<script setup lang="ts">
const { icons } = useIcons();
const route = useRoute()

function isActive(path: string) {
    const current = route.fullPath

    if (path === "/") {
        return current === "/"
    }

    return current.startsWith(path)
}

const topLinks = ref([
    { name: "Dashboard", link: '/', icon: 'dashboard' },
    { name: "Databases", link: '/databases', icon: 'database' },
    { name: "Reports", link: '/reports', icon: 'report' },
])

const bottomLinks = ref([
    { name: "Settings", link: '/settings', icon: 'settings' },
    { name: "License", link: '/license', icon: 'license' },
    { name: "Documentation", link: '/documentation', icon: 'documentation' },
])

</script>

<template>
    <nav>
        <section id="nav-top">
            <NuxtLink to="/" id="logo">
                <div v-html="icons['logo']" class="icon"></div>
            </NuxtLink>

            <div class="navigation">
                <UTooltip text="Messages" arrow :content="{
                    align: 'center',
                    side: 'right'
                }" :ui="{ content: 'hmn-tooltip', arrow: 'hmn-tooltip-arrow' }" :delay-duration="0">
                    <button class="nav-link">
                        <div v-html="icons['message']" class="icon"></div>
                    </button>
                </UTooltip>
            </div>

            <div class="navigation">
                <UTooltip v-for="link in topLinks" :text="link.name" arrow :content="{
                    align: 'center',
                    side: 'right'
                }" :ui="{ content: 'hmn-tooltip', arrow: 'hmn-tooltip-arrow' }" :delay-duration="0">
                    <NuxtLink :to="link.link" class="nav-link" :class="{ 'active': isActive(link.link) }">
                        <div v-html="icons[link.icon]" class="icon"></div>
                    </NuxtLink>
                </UTooltip>
            </div>
        </section>
        <section id="nav-bottom">
            <div class="navigation">
                <UTooltip v-for="link in bottomLinks" :text="link.name" arrow :content="{
                    align: 'center',
                    side: 'right'
                }" :ui="{ content: 'hmn-tooltip', arrow: 'hmn-tooltip-arrow' }" :delay-duration="0">
                    <NuxtLink :to="link.link" class="nav-link" :class="{ 'active': isActive(link.link) }">
                        <div v-html="icons[link.icon]" class="icon"></div>
                    </NuxtLink>
                </UTooltip>
            </div>

            <div class="navigation">
                <UTooltip text="Profile" arrow :content="{
                    align: 'center',
                    side: 'right'
                }" :ui="{ content: 'hmn-tooltip', arrow: 'hmn-tooltip-arrow' }" :delay-duration="0">
                    <button class="nav-link" id="user-btn">
                        <span class="initials">AK</span>
                    </button>
                </UTooltip>
            </div>
        </section>
    </nav>
</template>

<style lang="scss">
nav {
    display: grid;
    align-content: space-between;

    section {
        display: grid;
        gap: var(--block-gap);

        #logo svg {
            @include base-size;
        }

        .navigation {
            display: grid;
            gap: var(--block-gap);
            padding: var(--item-padding);
            border-radius: var(--item-radius);
            background-color: var(--background-color__block);

            .nav-link {
                display: flex;
                align-items: center;
                justify-content: center;
                @include base-size;
                border-radius: var(--item-radius);
                background-color: transparent;
                cursor: pointer;
                transition: background-color .3s;

                svg path {
                    stroke: var(--font-secondary);
                    transition: stroke .3s;
                }

                .ui-tooltip {
                    background-color: var(--accent) !important;
                }

                @include hover {
                    background-color: var(--background-color__main);

                    svg path {
                        stroke: var(--font-main);
                    }
                }

                &.active {
                    background-color: var(--primary);

                    svg path {
                        stroke: var(--font-main);
                    }
                }
            }
        }

        #user-btn {
            background-color: var(--background-color__main);

            .initials {
                font-size: 14px;
                font-weight: 500;
                color: var(--accent);
            }
        }
    }
}
</style>