<template>
    <div :class="['p-4 rounded-lg text-white', cycle.color]">
      <h2 class="font-display text-7xl">{{ cycle.name }}</h2>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    cycle: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  /* Ensures the card is squared */
  div {
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
    position: relative;
  }
  
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }
  </style>