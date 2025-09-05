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
    }
})
</script>

<template>
    <div class="hmn-dropdown-menu">
        <ElementsButton :label="label" :class="type" :icon_left="icon_left" :icon_right="icon_right" />
    </div>
</template>

<style lang="scss">
    .hmn-dropdown-menu{
       
    }
</style>