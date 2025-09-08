<template>
    <div id="functional-panel" class="container-flex">
        <section>
            <elements-dropdown-menu id="header__dropdown" label="Create" icon_left="add" type="accent" alignment="left">
                <template #>
                    <elements-button icon_left="database" label="Database" class="primary" :disabled="true" />
                    <elements-button icon_left="add_folder" label="Folder" class="primary" :disabled="true" />
                </template>
            </elements-dropdown-menu>
        </section>
        <section>

        </section>
    </div>
</template>