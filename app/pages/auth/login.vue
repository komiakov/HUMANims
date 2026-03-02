<script setup lang="ts">
definePageMeta({
    layout: 'auth'
})
</script>

<template>
    <div id="auth-container">
        <section id="auth-container__header">
            <h1 class="ft-h1">Sign in</h1>
            <span class="ft-label">to your account</span>
        </section>

        <hr>

        <UiHmnInput placeholder="e.g. your.email@email.com" label="Email" :required="true"/>
        <UiHmnInput label="Password" type="password" placeholder="••••••••••••••" :required="true"/>

        <UiHmnButton label="Log In" variant="accent" :disabled="true" />
        <hr>
        <UiHmnButton label="Don’t have an account? Sign up" to="/auth/register" :disabled="true" />
    </div>
</template>

<style lang="scss">

</style>