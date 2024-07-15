<template>
  <div>
    <h1>Signup</h1>
    <SignupForm @submit="handleSignup" />
  </div>
</template>

<script setup>
import SignupForm from '@/components/auth/SignupForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleSignup = () => {
  router.push('/dashboard');
};
</script>

<style scoped>

</style>