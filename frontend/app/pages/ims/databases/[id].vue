<script setup lang="ts">
definePageMeta({
    layout: 'ims'
})

const route = useRoute()
const supabase = useSupabaseClient()

const databaseId = route.params.id as string

</script>

<template>
    <div class="content-header container-flex">
        <section>
            <UIInput />
        </section>
    </div>

    <div class="content-body">

    </div>
</template>