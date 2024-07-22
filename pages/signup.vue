<!-- Signup.vue -->
<template>
  <Background :rotateColors="true">
    <div class="flex items-center justify-center h-screen">
      <div class="bg-main-light bg-opacity-50 p-8 border border-white rounded-lg w-full max-w-md">
        <h1 class="font-headings text-4xl font-light text-center mb-8">{{ $t('signup.signuptitle') }}</h1>
        <SignupForm @submit="handleSignup" />
      </div>
    </div>
  </Background>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import SignupForm from '@/components/auth/SignupForm.vue';
import Background from '@/components/shared/Background.vue';

const router = useRouter();

const handleSignup = async ({ username, email, password }) => {
  try {
    const auth = getAuth();
    const firestore = getFirestore();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: username });

    await setDoc(doc(firestore, 'users', userCredential.user.uid), {
      displayName: username,
      email: email,
      progress: {
        pulsar: [false, false, false, false, false, false, false],
        sintonizar: [false, false, false, false, false, false, false],
        resonar: [false, false, false, false, false, false, false],
        armonizar: [false, false, false, false, false, false, false],
        expresar: [false, false, false, false, false, false, false],
        sincronizar: [false, false, false, false, false, false, false],
        amplificar: [false, false, false, false, false, false, false]
      }
    });

    router.push('/dashboard');
  } catch (error) {
    console.error('Error signing up:', error);
  }
};
</script>

<style scoped>
</style>