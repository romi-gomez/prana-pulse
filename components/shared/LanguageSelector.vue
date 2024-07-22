<template>
  <div class="relative">
    <button @click="toggleDropdown" class="py-2 px-4 rounded bg-main-light text-main-dark border border-main-dark flex items-center">
      <span>{{ currentLocaleDisplay }}</span>
      <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div class="py-1">
        <button @click="setLocale('en')" class="block px-4 py-2 text-sm text-main-dark hover:bg-main-light w-full text-left">En</button>
        <button @click="setLocale('es')" class="block px-4 py-2 text-sm text-main-dark hover:bg-main-light w-full text-left">Es</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const currentLocale = ref(locale.value);
const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const setLocale = (lang) => {
  locale.value = lang;
  currentLocale.value = lang;
  dropdownOpen.value = false;
};

const currentLocaleDisplay = computed(() => {
  return currentLocale.value === 'en' ? 'En' : 'Es';
});

watch(locale, (newLocale) => {
  currentLocale.value = newLocale;
});
</script>

<style scoped>
/* Additional styling if needed */
</style>