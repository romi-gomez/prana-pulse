<template>
  <div>
    <h1>Login</h1>
    <LoginForm @submit="handleSubmit" />
    <div v-if="error" class="text-red-500">{{ error }}</div>
  </div>
</template>

<script setup>
import LoginForm from '@/components/auth/LoginForm.vue';
import { useAuth } from '@/composables/useAuth';

const { login, error } = useAuth();

const handleSubmit = async (formData) => {
  try {
    await login(formData.email, formData.password);
  } catch (err) {
    console.error('Login failed:', err.message);
  }
};
</script>

<style scoped>
/* Add any styles specific to this page */
</style>