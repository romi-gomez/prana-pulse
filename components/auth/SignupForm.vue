<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <InputField v-model="username" type="text" placeholder="Username" />
    <InputField v-model="email" type="email" placeholder="Email" />
    <InputField v-model="password" type="password" placeholder="Password" />
    <InputField v-model="confirmPassword" type="password" placeholder="Confirm Password" />
    <Button type="submit" class="w-full bg-main-dark">Register</Button>
    <div v-if="localError" class="text-red-500">{{ localError }}</div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import InputField from '@/components/shared/InputField.vue';
import Button from '@/components/shared/Button.vue';


const emit = defineEmits(['submit']);

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const username = ref('');
const localError = ref(null);

const handleSubmit = () => {
  localError.value = null;
  if (password.value !== confirmPassword.value) {
    localError.value = 'Passwords do not match';
  } else {
    emit('submit', { email: email.value, password: password.value, username: username.value });
  }
};
</script>

<style scoped>

</style>