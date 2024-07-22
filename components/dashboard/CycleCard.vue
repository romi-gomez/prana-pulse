<template>
  <div :class="`relative w-full pb-full rounded-lg text-main-light ${cycleBackgroundColor}`">
    <h2 class="cycle-text absolute inset-0 flex items-center justify-center font-display text-7xl">
      {{ $t(displayName) }}
    </h2>
    <div class="absolute bottom-0 left-0 right-0 flex justify-around mb-2">
      <div
        v-for="i in 7"
        :key="i"
        class="h-2 w-1/6 rounded mx-0.5"
        :class="`${progressBackground}`"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  cycle: {
    type: Object,
    required: true,
  },
});

const { t, locale } = useI18n();
const cycleBackgroundColor = computed(() => `bg-${props.cycle.key}-100`);
const progressBackground = computed(() => `bg-${props.cycle.key}-200`);

// Get the display name based on the current locale
const displayName = computed(() => `${props.cycle.displayName[locale.value]}`);

console.log(props.cycle.displayName)

console.log("displayname::::::",displayName)

</script>

<style scoped>
.pb-full {
  padding-bottom: 100%;
}

.cycle-text {
  transition: all 0.3s ease-in-out;
}

.cycle-text:hover {
  animation: hoverEffect 0.6s ease-in-out forwards;
}

@keyframes hoverEffect {
  0%, 100% {
    color: var(--tw-color-main-light);
    transform: scale(1) translate3d(0, 0, 0);
    letter-spacing: normal;
  }
  50% {
    color: var(--tw-color-${props.cycle.key}-200); /* Change to the desired color */
    transform: scale(1.25) translate3d(0, 0, 0);
    letter-spacing: 0.1em;
  }
}
</style>