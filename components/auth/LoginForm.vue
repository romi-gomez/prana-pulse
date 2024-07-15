<template>
  <form class="space-y-4" @submit.prevent="handleSubmit">
    <InputField type="email" placeholder="Email" v-model="email" />
    <InputField type="password" placeholder="Password" v-model="password" />
    <Button type="submit" class="w-full bg-main-dark">Login</Button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import InputField from '@/components/shared/InputField.vue';
import Button from '@/components/shared/Button.vue';



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