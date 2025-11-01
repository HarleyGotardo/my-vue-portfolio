<template>
  <div class="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-10 border border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
    <div class="flex items-start justify-between mb-8">
      <div class="flex items-center">
        <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
          <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
          </svg>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Subscription Tracking System</h3>
          <p class="text-slate-500 font-medium mb-3">OJT Project • 2024</p>
          <div class="flex flex-wrap gap-2">
            <span class="inline-flex items-center px-3 py-1.5 text-sm font-medium text-purple-600 bg-purple-50 rounded-xl shadow-sm">
              Enterprise Application
            </span>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-end">
        <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-xl text-sm font-semibold mb-2 shadow-sm">Full-Stack Developer Intern</span>
        <div class="flex items-center">
          <div class="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
          <span class="text-xs text-purple-600 font-medium">Prototype</span>
        </div>
      </div>
    </div>

    <!-- Image Carousel -->
    <div class="relative mb-8 bg-slate-100 rounded-2xl overflow-hidden shadow-inner">
      <div class="relative w-full" style="padding-bottom: 50%; /* 2:1 Aspect Ratio */">
        <div
          v-for="(image, index) in subscriptionImages"
          :key="index"
          :class="['absolute inset-0 transition-opacity duration-1000 cursor-pointer group', currentImageIndex === index ? 'opacity-100' : 'opacity-0']"
          @click="openImageViewer(index)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full object-cover"
          />
          <!-- Hover overlay -->
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <svg class="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
              </svg>
              <p class="text-sm font-semibold text-slate-800 mt-2">Click to view</p>
            </div>
          </div>
        </div>

        <!-- Navigation dots -->
        <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          <button
            v-for="(image, index) in subscriptionImages"
            :key="index"
            @click="currentImageIndex = index"
            :class="['w-3 h-3 rounded-full transition-all duration-300 shadow-md',
              currentImageIndex === index ? 'bg-white scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/75']"
          ></button>
        </div>

        <!-- Navigation arrows -->
        <button
          @click="previousImage"
          class="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-2xl transition-all duration-300 backdrop-blur-sm group"
        >
          <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button
          @click="nextImage"
          class="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-2xl transition-all duration-300 backdrop-blur-sm group"
        >
          <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>

    <p class="text-slate-600 mb-8 leading-relaxed text-lg">
      Enterprise-grade subscription management system developed during my OJT, featuring comprehensive CRUD operations,
      automated expiry notifications, and role-based access controls with modern UI/UX design.
    </p>

    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 class="font-bold text-slate-900 mb-4 text-lg flex items-center">
          <svg class="w-6 h-6 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h-.5a1 1 0 000-2H8a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clip-rule="evenodd"/>
          </svg>
          Core Features
        </h4>
        <ul class="text-sm text-slate-600 space-y-3">
          <li class="flex items-start">
            <span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Complete subscription lifecycle management</span>
          </li>
          <li class="flex items-start">
            <span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Automated expiry notifications via email</span>
          </li>
          <li class="flex items-start">
            <span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Role-based access control system</span>
          </li>
          <li class="flex items-start">
            <span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Background job scheduling with Laravel</span>
          </li>
        </ul>
      </div>
      <div class="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 class="font-bold text-slate-900 mb-4 text-lg flex items-center">
          <svg class="w-6 h-6 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Technical Highlights
        </h4>
        <ul class="text-sm text-slate-600 space-y-3">
          <li class="flex items-start">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>CRUDR operations with soft delete</span>
          </li>
          <li class="flex items-start">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Real-time status monitoring (2s intervals)</span>
          </li>
          <li class="flex items-start">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Modern dashboard with notification system</span>
          </li>
          <li class="flex items-start">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>NSSM background task persistence</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div class="bg-purple-50 rounded-2xl p-6 border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 class="font-bold text-slate-900 mb-4 text-lg">Management Modules</h4>
        <ul class="text-sm text-slate-600 space-y-3">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Subscription Management</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Payment Method Tracking</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Company & Category Admin</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>User Role Management</span>
          </li>
        </ul>
      </div>
      <div class="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 class="font-bold text-slate-900 mb-4 text-lg">Automation Features</h4>
        <ul class="text-sm text-slate-600 space-y-3">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Daily email reminders</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>System notification storage</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Consolidated expiry triggers</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Background status checks</span>
          </li>
        </ul>
      </div>
      <div class="bg-emerald-50 rounded-2xl p-6 border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 class="font-bold text-slate-900 mb-4 text-lg">UI/UX Enhancements</h4>
        <ul class="text-sm text-slate-600 space-y-3">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Modern notification bell system</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Custom "No Result" animations</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Consistent color schemes</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Responsive design patterns</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-wrap gap-3">
      <span class="px-4 py-2 bg-red-100 text-red-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300">Laravel</span>
      <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300">Vue.js</span>
      <span class="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300">MySQL</span>
      <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300">Tailwind CSS</span>
      <span class="px-4 py-2 bg-amber-100 text-amber-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300">NSSM</span>
      <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300">Email Automation</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Define emits
const emit = defineEmits(['open-image-viewer'])

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

// ImageViewer method
const openImageViewer = (index) => {
  emit('open-image-viewer', subscriptionImages.value, index)
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
