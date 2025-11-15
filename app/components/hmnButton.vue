<script setup lang="ts">
const { icons } = useIcons();

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    },
    iconLeft: {
        type: String,
        default: ''
    },
    iconRight: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <NuxtLink v-if="link" class="hmn-button">
        <div v-if="iconLeft" v-html="icons[iconLeft]" class="hmn-button_icon icon"></div>
        <span class="hmn-button_label">{{ label }}</span>
        <div v-if="iconRight" v-html="icons[iconRight]" class="hmn-button_icon icon"></div>
    </NuxtLink>
    <button v-else class="hmn-button">
        <div v-if="iconLeft" v-html="icons[iconLeft]" class="hmn-button_icon icon"></div>
        <span class="hmn-button_label">{{ label }}</span>
        <div v-if="iconRight" v-html="icons[iconRight]" class="hmn-button_icon icon"></div>
    </button>
</template>

<style lang="scss">
.hmn-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--item-gap);
    @include base-size;
    border-radius: var(--item-radius);
    cursor: pointer;

    .hmn-button_label {
        color: var(--font-main);
        @include ft-small-regular;
    }

    &.secondary {
        
    }
}
</style>