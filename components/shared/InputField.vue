<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input 
      :id="name" 
      :type="type" 
      :placeholder="placeholder" 
      v-model="inputValue"
      @input="$emit('update:modelValue', inputValue)" 
      class="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" 
    />
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const inputValue = ref(props.modelValue)
watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue
})
</script>

<style scoped>
/* No additional styles needed if using Tailwind */
</style>