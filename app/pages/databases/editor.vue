<template>
    <div id="content-header" class="container-flex">
        <section>
            <UiHmnButton icon-left="arrowLeft" to="/databases" />
            <UiHmnVHr />
            <UiHmnButton icon-left="add" label="Add column" />
        </section>
        <section>
            <UiHmnButton class="desktop-item" icon-left="import" label="Import xlsx" />
            <UiHmnButton class="desktop-item" icon-left="translate" label="Translations" />
            <UiHmnButton class="desktop-item" icon-left="editForm" label="Edit form" />
            <UiHmnVHr class="desktop-item" />
            <UiHmnButton icon-left="deploy" label="Deploy" variant="accent" />

            <UiHmnVHr class="mobile-item" />
            <UiHmnDropdown class="mobile-item" >
                <template #btn>
                    <UiHmnButton icon-left="more" />
                </template>
                <template #body>
                    <UiHmnButton icon-left="import" label="Import xlsx" variant="transparent" :small="true" />
                    <hr>
                    <UiHmnButton icon-left="translate" label="Translations" variant="transparent" :small="true"/>
                    <UiHmnButton icon-left="editForm" label="Edit form"  variant="transparent" :small="true" />
                </template>
            </UiHmnDropdown>
        </section>
    </div>
    <div id="content-body">
        
    </div>
</template>

<style lang="scss">
#content-header {
    @include max-width(719.0px) {
        .desktop-item {
            display: none;
        }
    }
    @include min-width(720px) {
        .mobile-item {
            display: none;
        }
    }
}
</style>