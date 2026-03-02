<template>
    <div id="content-header">
        <section>
            <UiHmnDropdown>
                <template #btn>
                    <UiHmnButton icon-left="add" label="Create" variant="accent" />
                </template>
                <template #body>
                    <UiHmnButton icon-left="addFolder" label="Folder" variant="transparent" :small="true" />
                    <hr>
                    <UiHmnButton icon-left="database" label="Database" variant="transparent" :small="true" to="/databases/editor" />
                </template>
            </UiHmnDropdown>
            
        </section>
        <section>
            
        </section>
    </div>
    <div id="content-body">
        
    </div>
</template>