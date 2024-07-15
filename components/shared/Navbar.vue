<template>
  <nav class="bg-main-light text-main-dark p-4 flex items-center justify-between font-headings">
    <router-link to="/" class="flex items-center">
      <img src="/images/logo.svg" alt="Logo" class="h-8 mr-4 max-w-[12rem]">
    </router-link>
    <div class="flex items-center space-x-4">
      <template v-if="user">
        <span>Welcome, {{ user.email }}</span>
        <button @click="logout" class="bg-main-dark text-main-light py-2 px-4 rounded hover:bg-main-medium">Logout</button>
      </template>
      <template v-else>
        <router-link to="/signup" class="font-bold hover:underline">Signup</router-link>
        <router-link to="/login" class="bg-main-dark text-main-light py-2 px-4 rounded hover:bg-main-medium">Login</router-link>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { useAuth } from '@/composables/useAuth';

const { user, logout } = useAuth();
</script>

<style scoped>
</style>