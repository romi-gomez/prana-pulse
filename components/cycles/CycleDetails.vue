<template>
    <div class="space-y-4">
      <h1 class="text-2xl font-bold">Cycle Detail</h1>
      <p class="text-gray-700">This is where the details of the cycle will be displayed.</p>
      <CycleOverview />
      <CycleProgress />
    </div>
  </template>
  
  <script setup>
  import CycleSummary from '@/components/cycle/CycleSummary.vue'
  import CycleProgress from '@/components/cycle/CycleProgress.vue'
  </script>
  
  <style scoped>
  /* No additional styles needed if using Tailwind */
  </style>