<script setup lang="ts">
import { NuxtLink } from '#components'
const { icons } = useIcons();

type ButtonVariant =
    | 'transparent'
    | 'primary'
    | 'accent'
    | 'alert'

interface Props {
    label?: string
    iconLeft?: keyof typeof icons
    iconRight?: keyof typeof icons
    variant?: ButtonVariant
    small?: boolean
    rounded?: boolean
    disabled?: boolean
    active?: boolean
    to?: string
    hideLabelOnMobile?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    label: '',
    variant: 'primary',
    small: false,
    disabled: false,
    active: false,
    rounded: false,
    hideLabelOnMobile: false
})

const isLink = computed(() => !!props.to && !props.disabled)

function handleClick(event: Event) {
    if (props.disabled && !isLink.value) {
        event.preventDefault()
        event.stopImmediatePropagation()
        return
    }
}
</script>

<template>
    <component :is="isLink ? NuxtLink : 'button'" class="hmn-button"
        :class="[variant, { sm: small, 'mbl-hide': hideLabelOnMobile, 'w-label': label, disabled: disabled, rounded: rounded, active: active }]"
        :to="isLink ? to : undefined" :disabled="!isLink && disabled" :aria-disabled="disabled || undefined"
        :tabindex="disabled ? -1 : undefined" :type="!isLink ? 'button' : undefined" @click.capture="handleClick">
        <div v-if="iconLeft" v-html="icons[iconLeft]" class="icon"></div>
        <span v-if="label" class="hmn-button__label ft-label">{{ label }}</span>
        <div v-if="iconRight" v-html="icons[iconRight]" class="icon"></div>
    </component>
</template>

<style lang="scss">
.hmn-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--size-md);
    min-width: var(--size-md);
    gap: var(--spacing-sm);
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: var(--transition);
    background-color: transparent;

    .hmn-button__label {
        transition: var(--transition);
    }

    &.sm {
        height: var(--size-sm);
        min-width: var(--size-sm);
    }

    &.rounded {
        border-radius: var(--radius-xl);
    }

    &.w-label {
        padding: 0 var(--spacing-md);

        &.sm {
            padding-left: var(--spacing-xs);
        }
    }
}

.hmn-button.primary {
    background-color: var(--primary-item-color);
    border-color: var(--primary-brdr-color);

    .hmn-button__label {
        color: var(--secondary-ft-color);
    }

    .icon svg path {
        fill: var(--secondary-ft-color);
    }

    @include hover {
        border-color: var(--primary-brdr-color__hover);
        .hmn-button__label {
            color: var(--primary-ft-color);
        }

        .icon svg path {
            fill: var(--primary-ft-color);
        }
    }

    &.active {
        border-color: var(--primary-brdr-color__hover);
        .hmn-button__label {
            color: var(--primary-ft-color);
        }

        .icon svg path {
            fill: var(--primary-ft-color);
        }
    }
}

.hmn-button.transparent {
    .hmn-button__label {
        color: var(--secondary-ft-color);
    }

    .icon svg path {
        fill: var(--secondary-ft-color);
    }

    @include hover {
        .hmn-button__label {
            color: var(--primary-ft-color);
        }

        .icon svg path {
            fill: var(--primary-ft-color);
        }
    }

    &.active {
        .hmn-button__label {
            color: var(--primary-ft-color);
        }

        .icon svg path {
            fill: var(--primary-ft-color);
        }
    }
}

.hmn-button.accent {
    background-color: var(--accent-color);
    border-color: var(--accent-brdr-color);

    .hmn-button__label {
        color: var(--primary-ft-color);
    }

    .icon svg path {
        fill: var(--primary-ft-color);
    }

    @include hover {
        background-color: var(--accent-color__hover);
    }

    &.active {
        background-color: var(--accent-color__hover);
    }
}

.hmn-button.alert {
    background-color: var(--alert-color);
    border-color: var(--alert-brdr-color);

    .hmn-button__label {
        color: var(--primary-ft-color);
    }

    .icon svg path {
        fill: var(--primary-ft-color);
    }

    @include hover {
        background-color: var(--alert-color__hover);
    }

    &.active {
        background-color: var(--alert-color__hover);
    }
}


.hmn-button.mbl-hide {
    @include max-width(599.9px) {
        padding: 0;

        .hmn-button__label {
            display: none;
        }
    }
}


.hmn-button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
}
</style>