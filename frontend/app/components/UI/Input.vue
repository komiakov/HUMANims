<script setup lang="ts">
const { icons } = useIcons();
const inputId = useId();
const passwordVisible = ref(false);

interface Props {
    modelValue?: string;
    placeholder?: string;
    label?: string;
    required?: boolean;
    error?: string;
    supportMessage?: string;
    type?: string;
    clearBtn?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: "",
    required: false,
    error: "",
    type: "text",
    supportMessage: "",
    clearBtn: false,
});

const emit = defineEmits(["update:modelValue"]);

const inputType = computed(() => {
    if (props.type !== "password") return props.type;
    return passwordVisible.value ? "text" : "password";
});

function onInput(event: Event) {
    emit(
        "update:modelValue",
        (event.target as HTMLInputElement | HTMLTextAreaElement).value
    );
}

function clear() {
    emit("update:modelValue", "");
}

function onPasswordBtnDown() {
    passwordVisible.value = !passwordVisible.value;
}
</script>

<template>
    <div class="input">
        <div v-if="label" class="input__label container-flex">
            <span class="input__label-text ft-label">{{ label }}</span>
            <span v-if="required" class="input__label-required ft-label">Required</span>
        </div>

        <div class="input__body">
            <input :id="inputId" class="ft-body-lg" :placeholder="placeholder" :required="required" autocomplete="off"
                :type="inputType" :value="modelValue" @input="onInput" />
            <div v-if="modelValue && clearBtn" class="input__btn">
                <div v-html="icons.close" class="icon" @click="clear"></div>
            </div>
            <div v-if="modelValue && props.type === 'password'" class="input__btn" :class="{ pressed: passwordVisible }"
                @click="onPasswordBtnDown">
                <div v-html="passwordVisible ? icons.eyeClose :  icons.eye " class="icon"></div>
            </div>
        </div>

        <div v-if="supportMessage" class="support-message">
            <div v-html="icons.documentation" class="icon"></div>
            <span class="ft-label">{{ supportMessage }}</span>
        </div>
    </div>
</template>

<style lang="scss">
.input {
    display: grid;
    gap: var(--spacing-xs);

    .input__label {

        .input__label-text,
        .input__label-required {
            cursor: default;
        }

        .input__label-text {
            color: var(--primary-ft-color);
        }

        .input__label-required {
            padding: 2px var(--spacing-md);
            font-size: 10px;
            color: var(--secondary-ft-color);
            border: 1px solid var(--primary-brdr-color);
            border-radius: var(--radius-xl);
            background-color: var(--primary-item-color);
        }
    }

    .input__body {
        display: flex;
        align-items: center;
        height: var(--size-md);
        min-width: var(--size-md);
        gap: var(--spacing-sm);
        padding: var(--spacing-sm) 2px var(--spacing-sm) var(--spacing-sm);
        border: 1px solid var(--secondary-brdr-color);
        border-radius: var(--radius-sm);
        cursor: pointer;
        transition: var(--transition);
        background-color: var(--primary-item-color);

        input {
            flex: 1;
            color: var(--primary-ft-color);
        }

        .input__btn {
            display: flex;
            align-items: center;
            justify-content: center;
            height: var(--size-sm);
            width: var(--size-sm);

            border-radius: var(--radius-xs);
            cursor: pointer;
            transition: var(--transition);

            .icon svg path {
                fill: var(--secondary-ft-color);
            }

            @include hover {
                background-color: var(--secondary-item-color);
                .icon svg path {
                    fill: var(--primary-ft-color);
                }
            }
        }

        &:focus-within {
            border-color: var(--accent-brdr-color);
        }
    }
}
</style>