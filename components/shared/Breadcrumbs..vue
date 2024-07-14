<template>
    <nav class="text-gray-700" aria-label="Breadcrumb">
      <ol class="list-reset flex">
        <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="flex items-center">
          <router-link :to="breadcrumb.href" class="text-blue-600 hover:underline">
            {{ breadcrumb.label }}
          </router-link>
          <span v-if="index < breadcrumbs.length - 1" class="mx-2">/</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    breadcrumbs: {
      type: Array,
      required: true,
      default: () => []
    }
  })
  </script>
  
  <style scoped>
  </style>