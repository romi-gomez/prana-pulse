<template>
  <Background :rotateColors="true">
    <div class="flex items-center justify-center h-screen">
      <div class="bg-main-light bg-opacity-50 p-8 border border-white rounded-lg w-full max-w-md">
        <h1 class="font-headings text-4xl font-light text-center mb-8">Signup</h1>
        <SignupForm @submit="handleSignup" />
      </div>
    </div>
  </Background>
</template>

<script setup>
import Background from '@/components/shared/Background.vue';
import SignupForm from '@/components/auth/SignupForm.vue';

const router = useRouter();

const handleSignup = () => {
  router.push('/dashboard');
};
</script>

<style scoped>

</style>