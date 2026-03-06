<script setup lang="ts">
definePageMeta({
    layout: 'ims'
})
const route = useRoute()

const dbName = route.params.id as string
</script>

<template>
    <div class="content-header container-flex">
        <section>
            <UIInput v-model="dbName" />
        </section>
    </div>

    <div class="content-body">

    </div>
</template>