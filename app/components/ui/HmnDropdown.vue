<script setup lang="ts">
const { isOpen, dropdownRef: rootRef } = useClickOutside()

const anchorRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);

const { dropdownStyle, recompute } = useTeleportDropdownPosition({
    isOpen,
    anchorRef,
    dropdownRef,
    align: "left",
    offset: 6,
    preferPlacement: "bottom",
    boundaryPadding: 8,
    matchAnchorWidth: false,
});

function toggle() {
    isOpen.value = !isOpen.value
    if (isOpen.value) recompute()
}
</script>

<template>
    <div class="hmnDropdown" ref="rootRef"> 
        <div ref="anchorRef" class="hmnDropdown__btn" @click="toggle">
            <slot name="btn"></slot>
        </div>

        <div v-show="isOpen" ref="dropdownRef" class="hmnDropdown__body" :style="dropdownStyle"
            role="menu">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<style lang="scss">
.hmnDropdown__body {
    display: grid;
    gap: var(--spacing-sm);
    min-width: 210px;
    background-color: var(--primary-bg-color);
    padding: var(--spacing-sm);
    border-radius: var(--radius-sm);
    border: 1px solid var(--primary-brdr-color);

    .hmn-button {
        justify-content: start;
    }
}
</style>