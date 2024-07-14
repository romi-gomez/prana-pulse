
<template>
    <input 
      :type="type" 
      :placeholder="placeholder" 
      class="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" 
    />
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  })
  </script>
  
  <style scoped>
  /* No additional styles needed if using Tailwind */
  </style>