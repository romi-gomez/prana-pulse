<template>
  <div>
    <h1>Login</h1>
    <LoginForm @submit="handleLogin" />
  </div>
</template>

<script setup>
import LoginForm from '@/components/auth/LoginForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogin = () => {
  router.push('/dashboard'); 
};
</script>

<style scoped>
/* Add any styles specific to this page */
</style>