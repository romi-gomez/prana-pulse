<template>
  <div class="flex justify-center items-center h-full">
    <div 
      class="oracle-card relative w-56 h-96 bg-main-light rounded-lg shadow-lg overflow-hidden transition-transform duration-500 ease-in-out" 
      @click="flipCard" 
      :class="{ 'is-flipped': isFlipped }"
    >
      <!-- Card Inner -->
      <div class="card-inner relative w-full h-full">
        <!-- Front Side -->
        <div class="card-front absolute inset-0 rounded-lg overflow-hidden backface-hidden">
          <!-- Outer Container with cycle border -->
          <div :class="['absolute inset-0 m-1 border-4 rounded-lg pointer-events-none', `border-${cycle}-100`]">
            <!-- Inner Container with white border -->
            <div class="absolute inset-0 m-1 rounded pointer-events-none overflow-hidden">
              <img :src="`/images/${image}`" alt="Oracle Card" class="w-full h-full object-cover transition-transform duration-500 ease-in-out" />
            </div>
          </div>
        </div>
        <!-- Back Side -->
        <div class="card-back absolute inset-0 rounded-lg overflow-hidden backface-hidden">
          <!-- Outer Container with cycle border -->
          <div :class="['absolute inset-0 m-1 border-4 rounded pointer-events-none', `border-${cycle}-100`]">
            <!-- Inner Container with white border -->
            <div class="absolute inset-0 m-1 rounded pointer-events-none overflow-hidden">
              <img :src="`/images/${imageBack}`" alt="Oracle Card Back" class="w-full h-full object-cover transition-transform duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  imageBack: {
    type: String,
    required: true,
  },
  cycle: {
    type: String,
    required: true,
  },
});

const isFlipped = ref(false);

const flipCard = () => {
  isFlipped.value = !isFlipped.value;
};
</script>

<style scoped>
.oracle-card {
  animation: float 4s ease-in-out alternate infinite;
  perspective: 1000px;
}

.card-inner {
  transform-style: preserve-3d;
  transition: transform 0.6s;
  width: 100%;
  height: 100%;
}

.oracle-card.is-flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: inherit;
}

.card-back {
  transform: rotateY(180deg);
}

.oracle-card:hover {
  animation: hoverEffect 2s ease-in-out;
}

@keyframes float {
  0% {
    transform: translate3d(0, 15px, 0);
  }
  100% {
    transform: translate3d(0, -15px, 0);
  }
}

@keyframes hoverEffect {
  0% {
    transform: rotate3d(1, 2.0, 3.0, 0deg) scale(1) translate3d(0, 15px, 0);
  }
  50% {
    transform: rotate3d(1, 2.0, 3.0, 10deg) scale(1.2);
  }
  100% {
    transform: rotate3d(1, 2.0, 3.0, 0deg) scale(1) translate3d(0, -15px, 0);
  }
}
</style>