<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>Email</label>
      <input v-model="email" type="email" required />
    </div>
    <div>
      <label>Password</label>
      <input v-model="password" type="password" required />
    </div>
    <button type="submit">Login</button>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '@/composables/useAuth';

const emit = defineEmits(['submit']);

const email = ref('');
const password = ref('');
const { login, error } = useAuth();

const handleSubmit = async () => {
  await login(email.value, password.value);
  if (!error.value) {
    emit('submit');
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>