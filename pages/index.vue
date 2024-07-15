<template>
  <Background :rotateColors="true">
    <div class="flex flex-col items-center justify-center h-screen text-white text-center">
      <div>
        <h1 class="font-headings text-4xl font-light">
          Connect to
          <span class="block font-display text-9xl">Your Inner Rhythm</span>
        </h1>
        <router-link to="/signup" class="inline-block mt-8 px-8 py-3 border border-white text-white rounded-full text-1xl bg-main-dark bg-opacity-20 hover:bg-opacity-30 transition-colors duration-300 tracking-wider">
          I want to connect
        </router-link>
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div @click="scrollToContent" class="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 animate-bounce text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  </Background>
</template>

<script setup>
import Background from '@/components/shared/Background.vue';

const scrollToContent = () => {
  const yOffset = -70; // Offset for fixed header if any
  const element = document.getElementById('content');
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};
</script>

<style scoped>
body {
  overflow-y: hidden;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>