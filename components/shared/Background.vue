<template>
    <div class="relative w-full h-screen overflow-hidden group">
      <img
        src="/images/background.webp"
        alt="Background Image"
        class="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 ease-in-out transform group-hover:scale-105"
      />
      <div
        class="absolute inset-0 transition-all duration-5000 ease-in-out bg-opacity-70 z-10"
        :class="currentColorClass"
      ></div>
      <div class="relative z-20 flex items-center justify-center h-full">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const props = defineProps({
    rotateColors: {
      type: Boolean,
      default: false
    },
    staticColor: {
      type: String,
      default: 'pulsar-100'
    }
  });
  
  const colors = [
    'bg-pulsar-100', 'bg-pulsar-200', 
    'bg-sintonizar-100', 'bg-sintonizar-200', 
    'bg-resonar-100', 'bg-resonar-200', 
    'bg-armonizar-100', 'bg-armonizar-200', 
    'bg-expresar-100', 'bg-expresar-200', 
    'bg-sincronizar-100', 'bg-sincronizar-200', 
    'bg-amplificar-100', 'bg-amplificar-200'
  ];
  
  const currentColorClass = ref(`bg-${props.staticColor}`);
  
  let colorIndex = colors.indexOf(`bg-${props.staticColor}`);
  let intervalId = null;
  
  const startColorRotation = () => {
    intervalId = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      currentColorClass.value = colors[colorIndex];
    }, 5000); // Change color every 5 seconds
  };
  
  const stopColorRotation = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };
  
  if (props.rotateColors) {
    onMounted(() => {
      startColorRotation();
    });
    onBeforeUnmount(() => {
      stopColorRotation();
    });
  } else {
    currentColorClass.value = `bg-${props.staticColor}`;
  }
  </script>
  
  <style scoped>
  </style>