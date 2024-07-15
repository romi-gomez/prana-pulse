<template>
  <nav class="bg-main-dark text-white p-4">
    <ul class="flex space-x-4">
      <li><router-link to="/" class="hover:underline">Home</router-link></li>
      <li><router-link to="/dashboard" class="hover:underline">Profile</router-link></li>
      <li><router-link to="/oracles" class="hover:underline">Oracles</router-link></li>
      <li><router-link to="/settings" class="hover:underline">Settings</router-link></li>
    </ul>
    <AuthStatus />
  </nav>
</template>

<script setup>
import AuthStatus from '@/components/auth/AuthStatus.vue';
</script>

<style scoped>
</style>