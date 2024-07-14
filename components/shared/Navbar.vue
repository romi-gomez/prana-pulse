<template>
  <nav class="bg-main-dark text-white p-4">
    <ul class="flex space-x-4">
      <li><router-link to="/" class="hover:underline">Home</router-link></li>
      <li><router-link to="/dashboard" class="hover:underline">Profile</router-link></li>
      <li><router-link to="/oracles" class="hover:underline">Oracles</router-link></li>
      <li><router-link to="/settings" class="hover:underline">Settings</router-link></li>
      <li><router-link to="/login" class="hover:underline">Login</router-link></li>
      <li><router-link to="/signup" class="hover:underline">Signup</router-link></li>
       
    </ul>
  </nav>
</template>

<script setup>
// No additional script needed for this basic structure
</script>

<style scoped>
</style>