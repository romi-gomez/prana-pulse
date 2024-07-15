<template>
    <div>
      <div v-if="user">
        <p>Welcome, {{ user.email }}</p>
        <button @click="logout">Logout</button>
      </div>
      <div v-else>
        <AuthLinks />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useAuth } from '@/composables/useAuth';
  import AuthLinks from '@/components/auth/AuthLinks.vue';
  
  const { user, logout } = useAuth();
  </script>
  
  <style scoped>
  /* Add any styles specific to this component */
  </style>