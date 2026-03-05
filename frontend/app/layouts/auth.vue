<template>
    <div class="page" id="auth-page">
        <header class="auth-header container-flex">
            <section>
                <NuxtLink class="logo ft-h1" to="/auth/login">
                    <span>HUMAN</span>ims
                </NuxtLink>
            </section>
            <section>
                <UIButton icon-left="support" label="Support" :disabled="true" />
                <UIButton icon-left="documentation" label="Documentation" :disabled="true" :hide-label-on-mobile="true" />
            </section>
        </header>

        <div class="auth-content">
            <div class="auth-content__container">
                <NuxtPage />
            </div> 
        </div>
    </div>
</template>

<style lang="scss">
#auth-page {
    display: grid;
    grid-template-rows: auto 1fr;
    .auth-header {
        padding: var(--spacing-md);
        border-bottom: 1px solid var(--primary-brdr-color);
        background-color: var(--primary-bg-color);
    }

    .auth-content {
        display: grid;
        align-items: center;
        align-content: center;
        padding: var(--spacing-md);
        background-color: var(--accent-bg-color);

        .auth-content__container {
            max-width: 480px;
            width: 100%;
            margin: 0 auto;
            padding: var(--spacing-lg);
            border: 1px solid var(--primary-brdr-color);
            border-radius: var(--radius-sm);
            background-color: var(--primary-bg-color);
        }
    }
}
</style>