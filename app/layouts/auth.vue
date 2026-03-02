<template>
    <div id="auth-page" class="all-page">
        <header class="container-flex">
            <section>

            </section>
            <section>
                <UiHmnButton icon-left="support" label="Support" :disabled="true" />
                <UiHmnButton icon-left="documentation" label="Documentation" :disabled="true" />
            </section>
        </header>
        <div id="auth-page__auth-container">
            <NuxtPage />
        </div>
    </div>
</template>

<style lang="scss">
#auth-page {
    display: grid;
    grid-template-rows: auto 1fr;
    background-color: var(--secondary-bg-color);

    header {
        padding: var(--spacing-md);
        border-bottom: 1px solid var(--primary-brdr-color);
        background-color: var(--primary-bg-color);
    }

    #auth-page__auth-container {
        width: 100%;
        max-width: 360px;
        margin: auto;

        #auth-container {
            display: grid;
            gap: var(--spacing-lg);
            padding: var(--spacing-xl);
            border-radius: var(--radius-sm);
            border: 1px solid var(--primary-brdr-color);
            background-color: var(--primary-bg-color);

            #auth-container__header {

                .ft-h1,
                .ft-label {
                    cursor: default;
                }

                .ft-h1 {
                    color: var(--primary-ft-color);
                }

                .ft-label {
                    color: var(--secondary-ft-color);
                }
            }
        }
    }
}
</style>