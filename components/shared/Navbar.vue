<template>
  <nav class="bg-main-dark text-white p-4">
    <ul class="flex space-x-4">
      <li><router-link to="/" class="hover:underline">Home</router-link></li>
    </ul>
    <div class="ml-auto">
      <template v-if="user">
        <span>Welcome, {{ user.email }}</span>
        <button @click="logout" class="ml-4">Logout</button>
      </template>
      <template v-else>
        <router-link to="/login" class="ml-4 hover:underline">Login</router-link>
        <router-link to="/signup" class="ml-4 hover:underline">Signup</router-link>
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