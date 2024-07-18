<template>
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Cycle Progress</h2>
      <div class="w-full bg-gray-200 rounded-full h-4">
        <div class="bg-primary h-4 rounded-full" :style="{ width: `${progress}%` }"></div>
      </div>
      <p class="text-main-dark">{{ progress }}% completed</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Example progress data, replace with actual logic
  const progress = ref(50)
  </script>
  
  <style scoped>
  
  </style>