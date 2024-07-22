<template>
  <nav class="bg-main-light text-main-dark p-4 flex items-center justify-between font-sans fixed top-0 left-0 w-full z-40">
    <router-link to="/" class="flex items-center">
      <img src="/images/logo.svg" alt="Logo" class="h-8 mr-4 max-w-[12rem]">
    </router-link>
    <div class="flex items-center space-x-4">
      <template v-if="user">
        <span>Welcome, {{ user.displayName || user.email }}</span>
        <button @click="logout" class="bg-main-dark text-main-light py-2 px-4 rounded hover:bg-main-medium">Logout</button>
      </template>
      <template v-else>
        <router-link to="/signup" class="font-bold hover:underline">Signup</router-link>
        <router-link to="/login" class="bg-main-dark text-main-light py-2 px-4 rounded hover:bg-main-medium">Login</router-link>
      </template>
      <LanguageSelector />
    </div>
  </nav>
</template>

<script setup>
import { useAuth } from '@/composables/useAuth';
import LanguageSelector from '@/components/shared/LanguageSelector.vue';

const { user, logout } = useAuth();

console.log("USER::::::", user)
</script>

<style scoped>
/* Add any additional styles if needed */
</style>