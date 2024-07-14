<template>
  <nav aria-label="breadcrumb">
    <ol>
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <router-link :to="breadcrumb.href">{{ breadcrumb.label }}</router-link>
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
/* Add any styles specific to this component */
</style>