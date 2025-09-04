<script setup lang="ts">
const dropdownRef = ref<HTMLElement | null>(null)
const props = defineProps({
    label: {
        type: String,
        default: ""
    },
    icon: {
        type: String,
        default: ""
    },
    iconSide: {
        type: String,
        default: "left"
    },
    alignment: {
        type: String,
        default: "right"
    },
    variant: {
        type: String,
        default: "primary"
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
        <ElementsButton :label="label" :class="variant" :icon="icon" :iconSide="iconSide" @click="isOpen = !isOpen" />
        <div v-if="isOpen" class="hmn-dropdown-menu_body" :class="alignment">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
.hmn-dropdown-menu {
    position: relative;

    .hmn-dropdown-menu_body {
        z-index: 1000;
        position: absolute;
        display: grid;
        gap: 12px;
        padding: 9px;
        top: 60px;
        min-width: 240px;
        background-color: var(--bg-secondary);
        border-radius: 9px;

        .hmn-button{
            justify-content: start;
        }

        &.right {
            right: 0;
        }

        &.left {
            left: 0;
        }
    }
}
[data-theme="light"] {
    .hmn-dropdown-menu .hmn-dropdown-menu_body {
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
}

[data-theme="dark"] {
    .hmn-dropdown-menu .hmn-dropdown-menu_body {
        border: 1px solid var(--brdr-primary);
    }
}
</style>