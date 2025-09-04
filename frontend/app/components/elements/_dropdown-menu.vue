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
    type: {
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
    <div class="hmn-dropdown-menu">
        <ElementsButton :label="label" :class="type" :icon="icon" :iconSide="iconSide" @click="isOpen = !isOpen" />
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss"></style>