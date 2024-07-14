<template>
  <div class="flex items-center justify-center">
    <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
  </div>
</template>

<script setup>
// You can add props and other setup script code here
</script>

<style scoped>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.loader {
  animation: spin 1s linear infinite;
  border-top-color: #3490dc; /* Tailwind primary color */
}
</style>