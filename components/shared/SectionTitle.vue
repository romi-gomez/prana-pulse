<template>
    <div class="my-4">
      <h2 class="text-2xl font-semibold text-mainDark">{{ title }}</h2>
    </div>
</template>
  
<script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    title: {
      type: String,
      required: true
    }
  })
</script>
  
<style scoped>
 </style>