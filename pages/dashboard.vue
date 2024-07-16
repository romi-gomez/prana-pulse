<template>
  <div class="pt-20 p-8">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <CycleCard v-for="cycle in cycles" :key="cycle.name" :cycle="cycle" />
    </div>
    <div class="mt-8 flex justify-center">
      <OracleCard cycle="pulsar" image="oracle-test.webp" />
    </div>
  </div>
</template>

<script setup>
import CycleCard from '@/components/Dashboard/CycleCard.vue';
import OracleCard from '@/components/Oracles/OracleCard.vue';
import { cycles } from '@/content/cycles.js';
</script>

<style scoped>
/* Additional styles if needed */
</style>