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

const navItems = ref([
    { label: "Dashboard", icon: 'dashboard', link: '/' },
    { label: "Databases", icon: 'database', link: '/databases' },
    { label: "Reports", icon: 'report', link: '/reports' },
])

const underlineLeft = ref(0)
const underlineWidth = ref(0)

const nav = ref<HTMLElement | null>(null)

function updateUnderline() {
    const container = nav.value
    if (!container) return

    const activeEl = container.querySelector(".nav-link.active") as HTMLElement | null
    if (!activeEl) return

    const containerRect = container.getBoundingClientRect()
    const activeRect = activeEl.getBoundingClientRect()

    underlineLeft.value = activeRect.left - containerRect.left
    underlineWidth.value = activeRect.width
}

watch(
    () => route.fullPath,
    () => nextTick().then(updateUnderline)
)

const handleResize = () => updateUnderline()

onMounted(() => {
    nextTick(() => {
        updateUnderline()

        window.addEventListener("resize", handleResize)
    })
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<template>
    <nav ref="nav">
        <div class="nav-underline" :style="{
            width: underlineWidth + 'px',
            left: underlineLeft + 'px'
        }"></div>

        <UiHmnButton v-for="navItem in navItems" :key="navItem.link" class="nav-link" :active="isActive(navItem.link)"
            :label="navItem.label" :icon-left="navItem.icon" :to="navItem.link" variant="transparent" />
    </nav>
</template>

<style lang="scss">
nav {
    position: relative;
    display: flex;
    gap: var(--spacing-xs);
    padding-bottom: var(--spacing-xs);

    .nav-underline {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        background-color: var(--accent-brdr-color);
        border-radius: 2px;
        transition: var(--transition);
        pointer-events: none;
    }

    @include max-width (599.9px) {
        justify-content: space-around;
    }
}
</style>