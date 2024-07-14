<template>
    <div class="space-y-4">
      <h1 class="text-2xl font-bold">Cycle Overview</h1>
      <p class="text-gray-700">Overview of all cycles.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CycleCard v-for="cycle in cycles" :key="cycle.id" :cycle="cycle" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import CycleCard from '@/components/cycle/CycleCard.vue'
  
  // Example data for cycles, replace with actual data fetching logic
  const cycles = ref([
    { id: 1, name: 'Cycle 1', description: 'Description for Cycle 1' },
    { id: 2, name: 'Cycle 2', description: 'Description for Cycle 2' },
    { id: 3, name: 'Cycle 3', description: 'Description for Cycle 3' },
    // Add more cycle data as needed
  ])
  </script>
  
  <style scoped>
  /* No additional styles needed if using Tailwind */
  </style>