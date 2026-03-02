<script setup lang="ts">
const { icons } = useIcons();
const inputId = useId();

interface Props {
    modelValue?: string;
    placeholder?: string;
    label?: string;
    required?: boolean;
    error?: string;
    supportMessage?: string;
    type?: string;
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: "",
    required: false,
    error: "",
    type: "text",
    supportMessage: ""
});

const emit = defineEmits(["update:modelValue"]);

function onInput(event: Event) {
    emit(
        "update:modelValue",
        (event.target as HTMLInputElement | HTMLTextAreaElement).value
    );
}

function clear() {
    emit("update:modelValue", "");
}
</script>

<template>
    <div class="hmn-input">
        <div v-if="label" class="hmn-input__label container-flex">
            <span class="hmn-input__label-text ft-label">{{ label }}</span>
            <span v-if="required" class="hmn-input__label-required ft-label">Required</span>
        </div>

        <div class="hmn-input__body">
            <input :id="inputId" class="ft-body-lg" :placeholder="placeholder" :required="required" autocomplete="off"
                :type="type" :value="modelValue" @input="onInput" />
            <div v-if="modelValue" v-html="icons.close" class="icon" @click="clear"></div>
        </div>

        <div v-if="supportMessage" class="support-message">
            <div v-html="icons.documentation" class="icon"></div>
            <span class="ft-label">{{ supportMessage }}</span>
        </div>
    </div>
</template>

<style lang="scss">
.hmn-input {
    display: grid;
    gap: var(--spacing-xs);

    .hmn-input__label {
        .hmn-input__label-text,
        .hmn-input__label-required {
            cursor: default;
        }

        .hmn-input__label-text {
            color: var(--primary-ft-color);
        }

        .hmn-input__label-required {
            padding: 2px var(--spacing-md);
            font-size: 10px;
            color: var(--secondary-ft-color);
            border: 1px solid var(--primary-brdr-color);
            border-radius: var(--radius-xl);
            background-color: var(--primary-item-color);
        }
    }

    .hmn-input__body {
        display: flex;
        align-items: center;
        height: var(--size-md);
        min-width: var(--size-md);
        gap: var(--spacing-sm);
        padding: var(--spacing-sm);
        border: 1px solid var(--primary-brdr-color);
        border-radius: var(--radius-sm);
        cursor: pointer;
        transition: var(--transition);
        background-color: var(--primary-item-color);

        input {
            flex: 1;
            color: var(--primary-ft-color);
        }

        .icon svg path {
            fill: var(--secondary-ft-color);
        }

        &:focus-within {
            border-color: var(--accent-brdr-color);
        }
    }
}
</style>