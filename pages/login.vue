<template>
  <Background :rotateColors="true">
    <div class="flex items-center justify-center h-screen">
      <div class="bg-main-light bg-opacity-50 p-8 border border-white rounded-lg w-full max-w-md">
        <h1 class="font-headings text-4xl font-light text-center mb-8">Login</h1>
        <LoginForm @submit="handleLogin" />
      </div>
    </div>
  </Background>
</template>

<script setup>
import Background from '@/components/shared/Background.vue';
import LoginForm from '@/components/auth/LoginForm.vue';

const router = useRouter();

const handleLogin = () => {
  router.push('/dashboard'); 
};
</script>

<style scoped>

</style>