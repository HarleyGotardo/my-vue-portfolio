<template>
  <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
    <div class="flex items-start justify-between mb-6">
      <div class="flex items-center">
        <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
          <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
          </svg>
        </div>
        <div>
          <h3 class="text-xl font-bold text-gray-800">Subscription Tracking System</h3>
          <p class="text-sm text-gray-500">OJT Project • 2024</p>
          <div class="mt-2 space-x-2">
            <span class="inline-flex items-center px-2 py-1 text-xs font-medium text-purple-600 bg-purple-50 rounded-md">
              Enterprise Application
            </span>
          </div>
        </div>
      </div>
      <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Full-Stack Developer Intern</span>
    </div>
    
    <!-- Image Carousel -->
    <div class="relative mb-6 bg-gray-100 rounded-xl overflow-hidden">
      <div class="relative w-full" style="padding-bottom: 50%; /* 2:1 Aspect Ratio */">
        <div
          v-for="(image, index) in subscriptionImages"
          :key="index"
          :class="['absolute inset-0 transition-opacity duration-1000', currentImageIndex === index ? 'opacity-100' : 'opacity-0']"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Navigation dots -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button
            v-for="(image, index) in subscriptionImages"
            :key="index"
            @click="currentImageIndex = index"
            :class="['w-2 h-2 rounded-full transition-colors duration-300',
              currentImageIndex === index ? 'bg-white' : 'bg-white/50']"
          ></button>
        </div>

        <!-- Navigation arrows -->
        <button
          @click="previousImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button
          @click="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>

    <p class="text-gray-600 mb-4 leading-relaxed">
      Enterprise-grade subscription management system developed during my OJT, featuring comprehensive CRUD operations,
      automated expiry notifications, and role-based access controls with modern UI/UX design.
    </p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
      <div class="bg-gray-50 rounded-lg p-4">
        <h4 class="font-semibold text-gray-800 mb-2">Core Features</h4>
        <ul class="text-sm text-gray-600 space-y-1">
          <li>• Complete subscription lifecycle management</li>
          <li>• Automated expiry notifications via email</li>
          <li>• Role-based access control system</li>
          <li>• Background job scheduling with Laravel</li>
        </ul>
      </div>
      <div class="bg-gray-50 rounded-lg p-4">
        <h4 class="font-semibold text-gray-800 mb-2">Technical Highlights</h4>
        <ul class="text-sm text-gray-600 space-y-1">
          <li>• CRUDR operations with soft delete</li>
          <li>• Real-time status monitoring (2s intervals)</li>
          <li>• Modern dashboard with notification system</li>
          <li>• NSSM background task persistence</li>
        </ul>
      </div>
    </div>
    
    <div class="grid md:grid-cols-3 gap-4 mb-4">
      <div class="bg-purple-50 rounded-lg p-4">
        <h4 class="font-semibold text-gray-800 mb-2">Management Modules</h4>
        <ul class="text-sm text-gray-600 space-y-1">
          <li>• Subscription Management</li>
          <li>• Payment Method Tracking</li>
          <li>• Company & Category Admin</li>
          <li>• User Role Management</li>
        </ul>
      </div>
      <div class="bg-blue-50 rounded-lg p-4">
        <h4 class="font-semibold text-gray-800 mb-2">Automation Features</h4>
        <ul class="text-sm text-gray-600 space-y-1">
          <li>• Daily email reminders</li>
          <li>• System notification storage</li>
          <li>• Consolidated expiry triggers</li>
          <li>• Background status checks</li>
        </ul>
      </div>
      <div class="bg-green-50 rounded-lg p-4">
        <h4 class="font-semibold text-gray-800 mb-2">UI/UX Enhancements</h4>
        <ul class="text-sm text-gray-600 space-y-1">
          <li>• Modern notification bell system</li>
          <li>• Custom "No Result" animations</li>
          <li>• Consistent color schemes</li>
          <li>• Responsive design patterns</li>
        </ul>
      </div>
    </div>
    
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs">Laravel</span>
      <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Vue.js</span>
      <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">MySQL</span>
      <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Tailwind CSS</span>
      <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">NSSM</span>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">Email Automation</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Subscription Tracking Images Carousel
const currentImageIndex = ref(0)
const subscriptionImages = ref([
  {
    src: '/subs-tracker/dashboard.png',
    alt: 'Subscription Tracking System Dashboard'
  },
  {
    src: '/subs-tracker/dashboard2.png',
    alt: 'Enhanced Dashboard with Notifications'
  },
  {
    src: '/subs-tracker/create-subscription.png',
    alt: 'Create Subscription Interface'
  },
  {
    src: '/subs-tracker/users.png',
    alt: 'User Management System'
  },
  {
    src: '/subs-tracker/create-user.png',
    alt: 'User Creation Interface'
  }
])

let carouselInterval = null

// Carousel navigation methods
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % subscriptionImages.value.length
}

const previousImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0
    ? subscriptionImages.value.length - 1
    : currentImageIndex.value - 1
}

// Auto-advance carousel
const startCarousel = () => {
  carouselInterval = setInterval(() => {
    nextImage()
  }, 3000) // Change image every 3 seconds
}

const stopCarousel = () => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
    carouselInterval = null
  }
}

// Lifecycle hooks
onMounted(() => {
  startCarousel()
})

onUnmounted(() => {
  stopCarousel()
})
</script>

<style scoped>
/* Component-specific styles if needed */
</style>
