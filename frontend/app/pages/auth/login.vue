<script setup lang="ts">
definePageMeta({
    layout: 'auth'
})

</script>

<template>
    <div class="login">
        <div class="login-header">
            <h2 class="ft-h2">Log In</h2>
            <span class="ft-label">to your account</span>
        </div>
        <hr>
        <UIInput label="Email" :required="true" placeholder="e.g. your.email@email.com" />
        <UIInput label="Password" :required="true" type="password" placeholder="••••••••••••••" />
        <UIButton label="Log In" variant="accent" to="/ims" />
    </div>
</template>

<style lang="scss">
.login {
    display: grid;
    gap: var(--spacing-lg);
    .login-header {
        .ft-h2,
        .ft-label {
            cursor: default;
        }

        .ft-h2 {
            color: var(--primary-ft-color);
        }

        .ft-label {
            color: var(--secondary-ft-color);
        }
    }
}
</style>
