<script setup lang="ts">
definePageMeta({
    layout: 'ims'
})

const { createDatabase } = useDatabase()

</script>

<template>
    <div class="content-header container-flex">
        <section>
            <UIDropdown>
                <template #btn>
                    <UIButton icon-left="add" label="Create" variant="accent" />
                </template>
                <template #body>
                    <UIButton label="Folder" icon-left="addFolder" :small="true" variant="transparent" :disabled="true" />
                    <hr>
                    <UIButton label="Database" icon-left="database" :small="true" variant="transparent" @click="createDatabase()" />
                </template>
            </UIDropdown>
        </section>
        <section>
            
        </section>
    </div>

    <div class="content-body">

    </div>
</template>