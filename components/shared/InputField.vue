<template>
  <div class="relative">
    <input
      :type="type"
      :placeholder="placeholder"
      class="w-full px-4 py-2 border-b border-main-dark bg-transparent text-main-dark placeholder-main-dark focus:outline-none focus:ring-0"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
/* Optional: Additional styles if needed */
</style>