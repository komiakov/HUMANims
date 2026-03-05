<script setup lang="ts">
const auth = useAuth()
definePageMeta({
    layout: 'auth',
    middleware: ['guest']
})

const email = ref('')
const password = ref('')
const error = ref<string | null>(null)

async function onLogin() {
  error.value = null
  try {
    await auth.login(email.value, password.value)
    await navigateTo('/ims')
  } catch (e: any) {
    error.value = e?.data?.detail || 'Login failed'
    console.log(error.value)
  }
}
</script>

<template>
    <div class="login">
        <div class="login-header">
            <h2 class="ft-h2">Log In</h2>
            <span class="ft-label">to your account</span>
        </div>
        <hr>
        <UIInput label="Email" :required="true" placeholder="e.g. your.email@email.com" v-model="email"/>
        <UIInput label="Password" :required="true" type="password" placeholder="••••••••••••••" v-model="password" />
        <UIButton label="Log In" variant="accent" @click="onLogin" />
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
