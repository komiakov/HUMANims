<script lang="ts" setup>
import { useIcons } from '@/utils/useIcons'
const icons = useIcons()

const emit = defineEmits(['click'])

const props = defineProps({
    to: {
        type: [String, null],
        default: null
    },
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
    disabled: {
        type: Boolean,
        default: false
    }
})

function handleClick(event: Event) {
    if (props.disabled) {
        event.preventDefault()
        event.stopPropagation()
        return
    }
    emit('click', event)
}
</script>

<template>
    <NuxtLink v-if="to" :to="disabled ? '' : to" class="hmn-button" @click="handleClick" :class="{ disabled }"
        :tabindex="disabled ? -1 : 0">
        <span v-if="iconSide == 'left' && icons[icon]" v-html="icons[icon]" class="hmn-button__icon"></span>
        <span v-if="label" class="hmn-button__label">{{ label }}</span>
        <span v-if="iconSide == 'right' && icons[icon]" v-html="icons[icon]" class="hmn-button__icon"></span>
    </NuxtLink>
    <button v-else class="hmn-button" :class="{ disabled }" :disabled="disabled" @click="handleClick">
        <span v-if="iconSide == 'left' && icons[icon]" v-html="icons[icon]" class="hmn-button__icon"></span>
        <span v-if="label" class="hmn-button__label">{{ label }}</span>
        <span v-if="iconSide == 'right' && icons[icon]" v-html="icons[icon]" class="hmn-button__icon"></span>
    </button>
</template>

<style lang="scss">
@mixin hover() {
    &:hover {
        @media (hover: hover) and (pointer: fine) {
            @content
        }
    }
}

.hmn-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    min-height: 42px;
    min-width: 42px;
    padding: 0 10px;
    border-radius: 6px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: .3s all;

    .hmn-button__label {
        padding: 0 9px;
        font-size: 12px;
        font-weight: 400;
    }

    .hmn-button__icon {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 18px;
            height: 18px;
        }
    }

    &.accent {
        background-color: var(--accent);

        .hmn-button__label {
            color: var(--white);
        }

        .hmn-button__icon svg path {
            stroke: var(--white);
        }
    }

    &.primary {
        .hmn-button__label {
            color: var(--ft-primary);
        }

        .hmn-button__icon svg path {
            stroke: var(--accent);
        }
    }

    &.disabled {
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
    }
}

@media (max-width: 768px) {
    .hmn-button {
        &.mbl .hmn-button__label {
            display: none;
        }
    }
}

[data-theme="light"] {
    .hmn-button {
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

        @include hover() {
            box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
        }

        &.primary {
            background-color: var(--white);
        }
    }
}

[data-theme="dark"] {
    .hmn-button {
        &.primary {
            background-color: transparent;
            border-color: var(--brdr-primary);

            @include hover() {
                background-color: var(--brdr-primary);
            }
        }
    }
}
</style>
