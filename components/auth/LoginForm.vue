<template>
    <form class="space-y-4">
      <InputField type="email" placeholder="Email" />
      <InputField type="password" placeholder="Password" />
      <Button type="submit" class="w-full">Login</Button>
      <AuthLinks />
    </form>
  </template>
  
  <script setup>
  import InputField from '@/components/shared/InputField.vue'
  import Button from '@/components/shared/Button.vue'
  import AuthLinks from '@/components/auth/AuthLinks.vue'
  </script>
  
  <style scoped>
  /* No additional styles needed if using Tailwind */
  </style>