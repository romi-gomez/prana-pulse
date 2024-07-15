<template>
    <header class="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/" class="text-primary hover:underline">Home</router-link>
          </li>
          <li>
            <router-link to="/profile" class="text-primary hover:underline">Profile</router-link>
          </li>
          <li>
            <router-link to="/settings" class="text-primary hover:underline">Settings</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  // No additional script needed
  </script>
  
  <style scoped>
  
  </style>