<template>
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Overview</h2>
      <p class="text-gray-700">Welcome to your dashboard. Here you can see an overview of your activities and progress.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'

  // Example data for activities, replace with actual data fetching logic
  const activities = ref([
    { id: 1, name: 'Activity 1', description: 'Description for Activity 1' },
    { id: 2, name: 'Activity 2', description: 'Description for Activity 2' },
    { id: 3, name: 'Activity 3', description: 'Description for Activity 3' },
    // Add more activity data as needed
  ])
  </script>
  
  <style scoped>
  
  </style>