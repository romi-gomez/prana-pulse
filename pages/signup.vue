<template>
  <div>
    <h1>Register</h1>
    <SignupForm @submit="handleSubmit" />
    <div v-if="error" class="text-red-500">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SignupForm from '@/components/auth/SignupForm.vue';
import { useAuth } from '@/composables/useAuth';

const { register, error } = useAuth();

const handleSubmit = async (formData) => {
  try {
    await register(formData.email, formData.password, formData.username);
  } catch (err) {
    console.error('Registration failed:', err.message);
  }
};
</script>

<style scoped>

</style>