<!-- LoginForm.vue -->
<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <InputField v-model="email" type="email" :placeholder="$t('signup.emailPlaceholder')" />
    <InputField v-model="password" type="password" :placeholder="$t('signup.passwordPlaceholder')" />
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
const localError = ref(null);

const handleSubmit = () => {
  localError.value = null;
  emit('submit', { email: email.value, password: password.value });
};
</script>

<style scoped>
</style>