<template>
    <div class="language-selector flex gap-4">
      <button @click="setLocale('en')" :class="buttonClass('en')">En</button>
      <button @click="setLocale('es')" :class="buttonClass('es')">Es</button>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  import { ref, watch } from 'vue';
  
  const { locale } = useI18n();
  const currentLocale = ref(locale.value);
  
  const setLocale = (lang) => {
    locale.value = lang;
    currentLocale.value = lang;
  };
  
  watch(locale, (newLocale) => {
    currentLocale.value = newLocale;
  });
  
  const buttonClass = (lang) => {
    return `py-2 px-4 rounded transition-colors duration-300 ${
      currentLocale.value === lang ? 'font-bold text-blue-500' : 'text-main-dark'
    } hover:text-blue-500`;
  };
  </script>
  
  <style scoped>
  /* Scoped styles if any */
  </style>