<script lang="ts" setup>
import { useIcons } from '@/utils/useIcons'
const icons = useIcons()

const props = defineProps({
    label: {
        type: String,
        default: ""
    },
    to: {
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
    disabled: {
        type: Boolean,
        default: false
    },
})

function handleClick(event: Event) {
    if (props.disabled) {
        event.preventDefault()
        event.stopPropagation()
        return
    }
}
</script>

<template>
    <NuxtLink v-if="to" :to="disabled ? '' : to" class="hmn-button" @click="handleClick" :class="{ disabled }"
        tabindex="disabled ? -1 : 0">
        <span v-if="icon_left && icons[icon_left]" v-html="icons[icon_left]" class="hmn-button__icon"></span>
        <span v-if="label" class="hmn-button__label">{{ label }}</span>
        <span v-if="icon_right && icons[icon_right]" v-html="icons[icon_right]" class="hmn-button__icon"></span>
    </NuxtLink>
    <button v-else class="hmn-button" :class="{ disabled }" :disabled="disabled" @click="handleClick">
        <span v-if="icon_left && icons[icon_left]" v-html="icons[icon_left]" class="hmn-button__icon"></span>
        <span v-if="label" class="hmn-button__label">{{ label }}</span>
        <span v-if="icon_right && icons[icon_right]" v-html="icons[icon_right]" class="hmn-button__icon"></span>
    </button>
</template>

<style lang="scss">
@mixin hover() {
    &:hover {
        @media (hover: hover) and (pointer: fine) {
            @content;
        }
    }
}

.hmn-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 42px;
    height: 42px;
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    transition: .3s all;

    .hmn-button__icon {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 18px;
            height: 18px;
            path{
                transition: .3s all;
            }
        }
    }

    &.primary {
        border-color: var(--brbr-color);

        .hmn-button__icon svg path {
            stroke: var(--ft-secondary);
        }

        @include hover() {
            background-color: var(--bg-item-main);
            .hmn-button__icon svg path {
                stroke: var(--ft-main);
            }
        }
    }

    &.disabled {
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
    }
}
</style>