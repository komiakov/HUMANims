<script setup lang="ts">
import { NuxtLink } from '#components'
const { icons } = useIcons();

type ButtonVariant =
    | 'primary'
    | 'transparent'
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
    <component :is="isLink ? NuxtLink : 'button'" class="btn"
        :class="[variant, { sm: small, 'mbl-hide': hideLabelOnMobile, 'w-label': label, disabled: disabled, rounded: rounded, active: active }]"
        :to="isLink ? to : undefined" :disabled="!isLink && disabled" :aria-disabled="disabled || undefined"
        :tabindex="disabled ? -1 : undefined" :type="!isLink ? 'button' : undefined" @click.capture="handleClick">
        <div v-if="iconLeft" v-html="icons[iconLeft]" class="icon btn__icon"></div>
        <span v-if="label" class="btn__label ft-label">{{ label }}</span>
        <div v-if="iconRight" v-html="icons[iconRight]" class="icon btn__icon"></div>
    </component>
</template>

<style lang="scss">
.btn {
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

    .btn__label {
        transition: var(--transition);
    }

    &.sm {
        height: var(--size-sm);
        min-width: var(--size-sm);
        border-radius: var(--radius-xs);
    }

    &.rounded {
        border-radius: var(--radius-xl);
    }

    &.w-label {
        padding: 0 var(--spacing-md);
    }
}

.btn.primary {
    background-color: var(--primary-item-color);
    border-color: var(--primary-brdr-color);

    .btn__label {
        color: var(--primary-ft-color);
    }

    .btn__icon svg path {
        fill: var(--primary-ft-color);
    }

    @include hover {
        border-color: var(--secondary-brdr-color);
        .btn__label {
            color: var(--primary-ft-color);
        }

        .btn__icon svg path {
            fill: var(--primary-ft-color);
        }
    }

    &.active {
        .btn__label {
            color: var(--primary-ft-color);
        }

        .btn__icon svg path {
            fill: var(--primary-ft-color);
        }
    }
}

.btn.transparent {
    .btn__label {
        color: var(--secondary-ft-color);
    }

    .btn__icon svg path {
        fill: var(--secondary-ft-color);
    }

    @include hover {
        background-color: var(--primary-item-color);
        .btn__label {
            color: var(--primary-ft-color);
        }

        .btn__icon svg path {
            fill: var(--primary-ft-color);
        }
    }

    &.active {
        background-color: var(--primary-item-color);
        .btn__label {
            color: var(--primary-ft-color);
        }

        .btn__icon svg path {
            fill: var(--primary-ft-color);
        }
    }
}

.btn.accent {
    background-color: var(--accent-color);
    border-color: var(--accent-brdr-color);

    .btn__label {
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

.btn.alert {
    background-color: var(--alert-color);
    border-color: var(--alert-brdr-color);

    .btn__label {
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

.btn.mbl-hide {
    @include max-width(599.9px) {
        padding: 0;

        .btn__label {
            display: none;
        }
    }
}


.btn.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
}
</style>