<template>
    <div class="space-y-4">
      <h1 class="text-2xl font-bold">Cycle Overview</h1>
      <p class="text-main-dark">Overview of all cycles.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CycleCard v-for="cycle in cycles" :key="cycle.id" :cycle="cycle" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import CycleCard from '@/components/cycle/CycleCard.vue'
  

  </script>
  
  <style scoped>
  
  </style>