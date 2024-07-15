<template>
    <div class="p-4">
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <p class="text-gray-700">{{ description }}</p>
      <div class="mt-4">
        <p class="text-gray-600"><strong>Details:</strong> {{ details }}</p>
        <p class="text-gray-600"><strong>Meaning:</strong> {{ meaning }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    details: {
      type: String,
      required: true
    },
    meaning: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped>
  
  </style>