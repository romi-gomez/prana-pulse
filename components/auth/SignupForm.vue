<template>
    <form class="space-y-4">
      <InputField type="text" placeholder="Username" />
      <InputField type="email" placeholder="Email" />
      <InputField type="password" placeholder="Password" />
      <InputField type="password" placeholder="Confirm Password" />
      <Button type="submit" class="w-full">Register</Button>
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