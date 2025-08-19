<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Backdrop -->
    <div
      class="absolute inset-0 bg-black/80 backdrop-blur-sm"
      @click="closeModal"
    ></div>

    <!-- Modal Content -->
    <div class="relative z-10 max-w-4xl max-h-[90vh] mx-4">
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-20"
        aria-label="Close image viewer"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Navigation Arrows -->
      <button
        v-if="images.length > 1"
        @click="previousImage"
        class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-20 bg-black/50 rounded-full p-2 hover:bg-black/70"
        aria-label="Previous image"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <button
        v-if="images.length > 1"
        @click="nextImage"
        class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-20 bg-black/50 rounded-full p-2 hover:bg-black/70"
        aria-label="Next image"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      <!-- Image Container -->
      <div class="relative bg-white rounded-lg overflow-hidden shadow-2xl">
        <img
          :src="currentImage.src"
          :alt="currentImage.alt"
          class="w-full h-auto max-h-[80vh] object-contain"
          @wheel="handleZoom"
          @mousedown="startPan"
          @mousemove="pan"
          @mouseup="stopPan"
          @mouseleave="stopPan"
        />

        <!-- Image Info -->
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
          <h3 class="text-lg font-semibold mb-1">{{ currentImage.title || currentImage.alt }}</h3>
          <p v-if="currentImage.description" class="text-sm text-gray-200">{{ currentImage.description }}</p>
          <div v-if="images.length > 1" class="flex items-center justify-center mt-2 space-x-2">
            <span class="text-sm text-gray-300">{{ currentIndex + 1 }} / {{ images.length }}</span>
          </div>
        </div>
      </div>

      <!-- Thumbnail Navigation -->
      <div v-if="images.length > 1" class="flex justify-center mt-4 space-x-2">
        <button
          v-for="(image, index) in images"
          :key="index"
          @click="goToImage(index)"
          class="w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105"
          :class="index === currentIndex ? 'border-blue-500' : 'border-white/50 hover:border-white'"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  images: {
    type: Array,
    default: () => []
  },
  initialIndex: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['close'])

const currentIndex = ref(props.initialIndex)
const isPanning = ref(false)
const panStart = ref({ x: 0, y: 0 })

const currentImage = computed(() => {
  return props.images[currentIndex.value] || {}
})

const closeModal = () => {
  emit('close')
}

const nextImage = () => {
  if (props.images.length > 1) {
    currentIndex.value = (currentIndex.value + 1) % props.images.length
  }
}

const previousImage = () => {
  if (props.images.length > 1) {
    currentIndex.value = currentIndex.value === 0
      ? props.images.length - 1
      : currentIndex.value - 1
  }
}

const goToImage = (index) => {
  currentIndex.value = index
}

const handleZoom = (event) => {
  event.preventDefault()
  // Zoom functionality can be added here if needed
}

const startPan = (event) => {
  isPanning.value = true
  panStart.value = { x: event.clientX, y: event.clientY }
}

const pan = () => {
  if (!isPanning.value) return
  // Pan functionality can be added here if needed
}

const stopPan = () => {
  isPanning.value = false
}

// Handle keyboard navigation
const handleKeydown = (event) => {
  if (!props.isOpen) return

  switch (event.key) {
    case 'Escape':
      closeModal()
      break
    case 'ArrowLeft':
      previousImage()
      break
    case 'ArrowRight':
      nextImage()
      break
  }
}

// Watch for changes in initialIndex
watch(() => props.initialIndex, (newIndex) => {
  currentIndex.value = newIndex
})

// Add/remove keyboard event listeners
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
