<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <InputField v-model="email" type="email" placeholder="Email" />
    <InputField v-model="password" type="password" placeholder="Password" />
    <Button type="submit" class="w-full">Login</Button>
    <AuthLinks />
    <div v-if="localError" class="text-red-500">{{ localError }}</div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import InputField from '@/components/shared/InputField.vue';
import Button from '@/components/shared/Button.vue';
import AuthLinks from '@/components/auth/AuthLinks.vue';

const email = ref('');
const password = ref('');
const localError = ref(null);

const handleSubmit = () => {
  localError.value = null;
  emit('submit', { email: email.value, password: password.value });
};
</script>

<style scoped>

</style>