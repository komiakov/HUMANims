<script setup lang="ts">
const { icons } = useIcons();
</script>

<template>
    <nav>
        <section id="nav-top">
            <div class="navigation">
                <NuxtLink class="nav-link active">
                    <div v-html="icons['dashboard']" class="icon"></div>
                </NuxtLink>
                <NuxtLink class="nav-link">
                    <div v-html="icons['database']" class="icon"></div>
                </NuxtLink>
                <NuxtLink class="nav-link">
                    <div v-html="icons['report']" class="icon"></div>
                </NuxtLink>
            </div>
        </section>
        <section id="nav-bottom">
            <div class="navigation">
                <NuxtLink class="nav-link">
                    <div v-html="icons['message']" class="icon"></div>
                </NuxtLink>
                <NuxtLink class="nav-link">
                    <div v-html="icons['settings']" class="icon"></div>
                </NuxtLink>
                <NuxtLink class="nav-link">
                    <div v-html="icons['documentation']" class="icon"></div>
                </NuxtLink>
            </div>
        </section>
    </nav>
</template>

<style lang="scss">
nav {
    display: grid;
    align-content: space-between;

    .navigation {
        display: grid;
        gap: var(--block-gap);
        padding: var(--item-padding);
        border-radius: var(--item-radius);
        background-color: var(--background-color__block);

        .nav-link {
            display: flex;
            align-items: center;
            justify-content: center;
            @include base-size;
            border-radius: var(--item-radius);
            background-color: transparent;
            cursor: pointer;
            transition: background-color .3s;

            svg path {
                stroke: var(--font-secondary);
                transition: stroke .3s;
            }

            @include hover {
                background-color: var(--background-color__main);

                svg path {
                    stroke: var(--font-main);
                }
            }

            &.active {
                background-color: var(--primary);

                svg path {
                    stroke: var(--font-main);
                }
            }
        }
    }
}
</style>