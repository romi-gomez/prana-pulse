<template>
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Oracle Display</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <OracleCardInfo
          v-for="oracle in oracles"
          :key="oracle.id"
          :title="oracle.title"
          :description="oracle.description"
          :details="oracle.details"
          :meaning="oracle.meaning"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import OracleCardInfo from '@/components/oracle/OracleCardInfo.vue'
  
  // Example data for oracles, replace with actual data fetching logic
  const oracles = ref([
    {
      id: 1,
      title: 'Oracle 1',
      description: 'Description for Oracle 1',
      details: 'Details for Oracle 1',
      meaning: 'Meaning for Oracle 1',
    },
    {
      id: 2,
      title: 'Oracle 2',
      description: 'Description for Oracle 2',
      details: 'Details for Oracle 2',
      meaning: 'Meaning for Oracle 2',
    },
    {
      id: 3,
      title: 'Oracle 3',
      description: 'Description for Oracle 3',
      details: 'Details for Oracle 3',
      meaning: 'Meaning for Oracle 3',
    },
    // Add more oracle data as needed
  ])
  </script>
  
  <style scoped>
  
  </style>