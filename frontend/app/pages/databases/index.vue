<template>
    <div id="content-ims">
        <div id="content-ims-functional-panel" class="container-flex">
            <section>
                <elements-dropdown-menu label="Create" variant="accent" icon="add" iconSide="right" alignment="left">
                    <template #>
                        <elements-button class="primary" icon="database" label="Database" to="/databases/new" />
                        <elements-button class="primary" icon="addFolder" label="Folder" :disabled="true" />
                    </template>
                </elements-dropdown-menu>
            </section>
            <section>

            </section>
        </div>
        <div id="content-ims-body">

        </div>
    </div>
</template>
