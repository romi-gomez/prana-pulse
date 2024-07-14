<template>
    <div class="border rounded-lg p-4 shadow-md">
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <p class="text-gray-700">{{ description }}</p>
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
    }
  })
  </script>
  
  <style scoped>
  /* No additional styles needed if using Tailwind */
  </style>