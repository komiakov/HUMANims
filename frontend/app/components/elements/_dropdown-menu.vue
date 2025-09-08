<script setup lang="ts">
const dropdownRef = ref<HTMLElement | null>(null)
const props = defineProps({
    label: {
        type: String,
        default: ""
    },
    icon_left: {
        type: String,
        default: ""
    },
    icon_right: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: "primary"
    },
    alignment: {
        type: String,
        default: "right"
    }
})

const isOpen = ref(false)

function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <div class="hmn-dropdown-menu" ref="dropdownRef">
        <ElementsButton :label="label" :class="type" :icon_left="icon_left" :icon_right="icon_right" @click="isOpen = !isOpen" />

        <div v-if="isOpen" class="hmn-dropdown-menu__body" :class="alignment">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
.hmn-dropdown-menu {
    position: relative;

    .hmn-dropdown-menu__body {
        position: absolute;
        z-index: 99999;
        display: grid;
        gap: 9px;
        min-width: 240px;
        top: 48px;
        padding: 9px;
        background-color: var(--bg-main);
        border: 1px solid var(--brbr-color);
        border-radius: 9px;

        .hmn-button {
            justify-content: start;
        }

        &.right {
            right: 0;
        }
    }
}
</style>