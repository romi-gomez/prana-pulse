<template>
  <div class="flex justify-center items-center h-full">
    <div class="oracle-card relative w-48 h-72 bg-white rounded-lg shadow-lg overflow-hidden animate-float transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-5">
      <div :class="['absolute inset-0 m-1.5 border-4 rounded-lg', cycleBorderColor]"></div>
      <div class="absolute inset-0 m-1.5 border-8 border-white rounded-lg"></div>
      <div class="absolute inset-0 rounded-lg overflow-hidden">
        <img :src="`/images/${image}`" alt="Oracle Card" class="w-full h-full object-cover transition-transform duration-500 ease-in-out" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  cycle: {
    type: String,
    required: true,
  },
});

const cycleBorderColor = computed(() => {
  switch (props.cycle) {
    case 'Pulsar':
      return 'border-pulsar-100';
    case 'Sintonizar':
      return 'border-sintonizar-100';
    case 'Resonar':
      return 'border-resonar-100';
    case 'Armonizar':
      return 'border-armonizar-100';
    case 'Expresar':
      return 'border-expresar-100';
    case 'Sincronizar':
      return 'border-sincronizar-100';
    case 'Amplificar':
      return 'border-amplificar-100';
    default:
      return 'border-main-dark';
  }
});
</script>

<style scoped>
.oracle-card {
  animation: float 4s ease-in-out alternate infinite;
  transition: transform 0.5s ease-in-out;
}

.oracle-card:hover {
  animation: hoverEffect 0.5s ease-in-out;
}

.oracle-card img {
  transition: transform 0.5s ease-in-out;
}

.oracle-card:hover img {
  transform: scale(1.1);
}

@keyframes float {
  0% {
    transform: translate3d(0, 15px, 0);
  }
  100% {
    transform: translate3d(0, -15px, 0);
  }
}

@keyframes hoverEffect {
  0% {
    transform: rotate3d(1, 2.0, 3.0, 0deg) scale(1);
  }
  100% {
    transform: rotate3d(1, 2.0, 3.0, 20deg) scale(1.2);
  }
}
</style>