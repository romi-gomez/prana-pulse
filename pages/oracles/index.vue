<template>
    <div class="p-4">
      <SectionTitle title="Oracles" />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <router-link to="/oracle/animal" class="block p-6 bg-main-light text-main-dark rounded-lg shadow hover:bg-main-medium hover:text-white">
          <h2 class="text-xl font-bold">Animals Oracle</h2>
          <p>Discover insights from the animal kingdom.</p>
        </router-link>
        <router-link to="/oracle/tarot" class="block p-6 bg-main-light text-main-dark rounded-lg shadow hover:bg-main-medium hover:text-white">
          <h2 class="text-xl font-bold">Tarot Oracle</h2>
          <p>Unveil the mysteries of the Tarot cards.</p>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import SectionTitle from '@/components/shared/SectionTitle.vue'
  </script>
  
  <style scoped>

  </style>