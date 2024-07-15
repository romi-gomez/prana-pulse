<template>
    <header class="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/dashboard" class="text-primary hover:underline">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/settings" class="text-primary hover:underline">Settings</router-link>
          </li>
          <li>
            <router-link to="/Oracles" class="text-primary hover:underline">Oracles</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  
  </style>