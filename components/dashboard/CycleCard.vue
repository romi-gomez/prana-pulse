<template>
  <div :class="`relative w-full pb-full rounded-lg text-main-light ${cycleBackgroundColor}`">
    <h2 class="absolute inset-0 flex items-center justify-center font-display text-7xl">{{ cycle.key }}</h2>
    <div class="absolute bottom-0 left-0 right-0 flex justify-around mb-2">
      <div
        v-for="i in 7"
        :key="i"
        class="h-2 w-1/6 rounded mx-0.5 border-2"
        :class="`${cycleBorderColor}`"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';


const props = defineProps({
  cycle: {
    type: String,
    required: true,
  },
});

const cycleBackgroundColor = computed(() => `bg-${props.cycle.key}-100`);
const cycleBorderColor = computed(() => `border-${props.cycle.key}-200`);

onMounted(()=>{
  console.log(props.cycle)
})

</script>

<style scoped>

.pb-full {
  padding-bottom: 50%;
}
</style>