<!-- SignupForm.vue -->
<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <InputField v-model="username" type="text" :placeholder="$t('signup.usernamePlaceholder')" />
    <InputField v-model="email" type="email" :placeholder="$t('signup.emailPlaceholder')" />
    <InputField v-model="password" type="password" :placeholder="$t('signup.passwordPlaceholder')" />
    <InputField v-model="confirmPassword" type="password" :placeholder="$t('signup.confirmPasswordPlaceholder')" />
    <Button type="submit" class="w-full bg-main-dark">{{ $t('signup.registerButton') }}</Button>
    <div v-if="localError" class="text-red-500">{{ localError }}</div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import InputField from '@/components/shared/InputField.vue';
import Button from '@/components/shared/Button.vue';

const emit = defineEmits(['submit']);
const { t } = useI18n();

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const username = ref('');
const localError = ref(null);

const handleSubmit = () => {
  localError.value = null;
  if (password.value !== confirmPassword.value) {
    localError.value = t('passwordsDoNotMatch');
  } else {
    emit('submit', { email: email.value, password: password.value, username: username.value });
  }
};
</script>

<style scoped>
</style>