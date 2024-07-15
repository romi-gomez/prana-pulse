<template>
  <div
    class="relative w-full h-screen"
    :class="overlayClass"
  >
    <div class="relative z-10 flex items-center justify-center h-full text-white">
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

const overlayClass = ref(`bg-${props.staticColor}`);
const colors = ['pulsar-100', 'pulsar-200', 'sintonizar-100', 'sintonizar-200', 'resonar-100', 'resonar-200', 'armonizar-100', 'armonizar-200', 'expresar-100', 'expresar-200', 'sincronizar-100', 'sincronizar-200', 'amplificar-100', 'amplificar-200'];
let colorIndex = 0;
let intervalId = null;

const startColorRotation = () => {
  intervalId = setInterval(() => {
    overlayClass.value = `bg-${colors[colorIndex]}`;
    colorIndex = (colorIndex + 1) % colors.length;
  }, 1000);
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
  overlayClass.value = `bg-${props.staticColor}`;
}
</script>

<style scoped>
</style>