<script setup>
import { RouterView, useRoute } from 'vue-router'
import { ref, watch, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const isSidebarOpen = ref(false)
const sidebarRef = ref(null)
const isDesktop = ref(false)

// Toggle sidebar
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// Close sidebar
const closeSidebar = () => {
  isSidebarOpen.value = false
}

// Close sidebar when clicking outside
const handleClickOutside = (event) => {
  if (sidebarRef.value && !sidebarRef.value.contains(event.target) && !event.target.closest('.burger-menu')) {
    closeSidebar()
  }
}

// Handle window resize
const handleResize = () => {
  isDesktop.value = window.innerWidth >= 1024
  if (isDesktop.value) {
    isSidebarOpen.value = false // Reset mobile state when switching to desktop
  }
}

// Close sidebar when route changes
watch(() => route.path, () => {
  closeSidebar()
})

// Add/remove event listeners
onMounted(() => {
  // Set initial desktop state
  isDesktop.value = window.innerWidth >= 1024

  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Mobile Header with Burger Menu -->
    <header class="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-200 z-50">
      <div class="flex items-center px-4 py-3">
        <button
          @click="toggleSidebar"
          class="burger-menu p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 mr-3"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <div class="flex items-center space-x-3">
          <img src="../public/profile.jpg" alt="Harley Gotardo" class="w-8 h-8 rounded-full object-cover">
          <h1 class="text-sm font-semibold text-gray-800">Harley Gotardo - Full Stack Web Developer</h1>
        </div>
      </div>
    </header>

    <!-- Overlay for mobile -->
    <div
      v-if="isSidebarOpen"
      class="lg:hidden fixed inset-0 bg-white/20 backdrop-blur-sm z-40 transition-all duration-300"
      @click="closeSidebar"
    ></div>

    <!-- Sidebar Navigation -->
    <nav
      ref="sidebarRef"
      class="w-64 bg-white shadow-lg border-r border-gray-200 fixed h-full overflow-y-auto z-50 transition-transform duration-300 ease-in-out"
      :class="{
        'translate-x-0': isSidebarOpen || isDesktop,
        '-translate-x-full lg:translate-x-0': !isSidebarOpen && !isDesktop
      }"
    >
      <!-- Mobile Close Button -->
      <div class="lg:hidden flex justify-end p-4">
        <button
          @click="closeSidebar"
          class="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close menu"
        >
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Profile Header -->
      <div class="p-6 border-b border-gray-100 lg:mt-0 -mt-4">
        <div class="flex items-center space-x-3">
          <img src="../public/profile.jpg" alt="Harley Gotardo" class="w-12 h-12 rounded-full object-cover border-2 border-blue-100 shadow-sm">
          <div>
            <h2 class="text-sm font-semibold text-gray-800">Harley Gotardo</h2>
            <p class="text-xs text-gray-500">Full Stack Developer</p>
          </div>
        </div>
        <!-- Resume Button -->
        <div class="mt-4">
          <a
            href="https://drive.google.com/file/d/1XoZg4c_784t9q5juZrAyT5Y7FHKSCdbY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            View Resume
          </a>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="mt-6">
        <ul class="space-y-1 px-3">
          <li>
            <router-link
              to="/"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 group"
              :class="{
                'bg-blue-50 text-blue-700 border-r-2 border-blue-500': $route.path === '/',
                'text-gray-600 hover:text-gray-900': $route.path !== '/'
              }"
            >
              <svg class="w-5 h-5 mr-3 transition-colors" :class="{
                'text-blue-500': $route.path === '/',
                'text-gray-400 group-hover:text-blue-500': $route.path !== '/'
              }" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
              </svg>
              About
            </router-link>
          </li>
          <li class="mb-1">
            <router-link
              to="/academic-experience"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-rose-50 hover:text-rose-700 group"
              :class="{
                'bg-rose-50 text-rose-700 border-r-2 border-rose-500': $route.path === '/academic-experience',
                'text-gray-600 hover:text-gray-900': $route.path !== '/academic-experience'
              }"
            >
            <svg
              class="w-6 h-6 mr-3 transition-colors"
              :class="{
                'text-red-500': $route.path === '/academic-experience',
                'text-gray-400 group-hover:text-red-500': $route.path !== '/academic-experience'
              }"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
              Academic Experience
            </router-link>
          </li>
          <li>
            <router-link
              to="/projects"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-700 group"
              :class="{
                'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-500': $route.path === '/projects',
                'text-gray-600 hover:text-gray-900': $route.path !== '/projects'
              }"
            >
              <svg class="w-5 h-5 mr-3 transition-colors" :class="{
                'text-indigo-500': $route.path === '/projects',
                'text-gray-400 group-hover:text-indigo-500': $route.path !== '/projects'
              }" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              Projects
            </router-link>
          </li>
          <li>
            <router-link
              to="/experience"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-700 group relative"
              :class="{
              'bg-emerald-50 text-emerald-700 border-r-2 border-emerald-500': $route.path === '/experience',
              'text-gray-600 hover:text-gray-900': $route.path !== '/experience'
              }"
            >
              <svg class="w-5 h-5 mr-3 transition-colors" :class="{
              'text-emerald-500': $route.path === '/experience',
              'text-gray-400 group-hover:text-emerald-500': $route.path !== '/experience'
              }" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
              </svg>
              Experience
              <span class="flex items-center ml-2 relative">
                <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
              </span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/skills"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-rose-50 hover:text-rose-700 group"
              :class="{
                'bg-rose-50 text-rose-700 border-r-2 border-rose-500': $route.path === '/skills',
                'text-gray-600 hover:text-gray-900': $route.path !== '/skills'
              }"
            >
              <svg class="w-5 h-5 mr-3 transition-colors" :class="{
                'text-rose-500': $route.path === '/skills',
                'text-gray-400 group-hover:text-rose-500': $route.path !== '/skills'
              }" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Skills
            </router-link>
          </li>
          <li>
            <router-link
              to="/certificates"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-rose-50 hover:text-rose-700 group"
              :class="{
                'bg-rose-50 text-rose-700 border-r-2 border-rose-500': $route.path === '/certificates',
                'text-gray-600 hover:text-gray-900': $route.path !== '/certificates'
              }"
            >
              <svg class="w-5 h-5 mr-3 transition-colors" :class="{
                'text-rose-500': $route.path === '/certificates',
                'text-gray-400 group-hover:text-rose-500': $route.path !== '/certificates'
              }" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 13a2 2 0 00-2 2V16a2 2 0 002 2h8a2 2 0 002-2v-3a2 2 0 00-2-2h-8zm-1-5a1 1 0 011-1h2a1 1 0 011 1v3.57a1 1 0 01-1 1h-2a1 1 0 01-1-1V8zm2 0a1 1 0 011-1h2a1 1 0 011 1v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"/>
              </svg>
              Certificates
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 group"
              :class="{
                'bg-amber-50 text-amber-700 border-r-2 border-amber-500': $route.path === '/contact',
                'text-gray-600 hover:text-gray-900': $route.path !== '/contact'
              }"
            >
              <svg class="w-5 h-5 mr-3 transition-colors" :class="{
                'text-amber-500': $route.path === '/contact',
                'text-gray-400 group-hover:text-amber-500': $route.path !== '/contact'
              }" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Contact
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Footer -->
      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-gray-50">
        <p class="text-xs text-gray-500 text-center"> @{{ new Date().getFullYear() }} Harley Gotardo</p>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main class="flex-1 lg:ml-64 min-h-screen pt-16 lg:pt-0">
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Import Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* Apply Inter font system-wide */
:root {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* Apply font to all elements */
* {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* Optional: Add font smoothing for better rendering */
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Your existing styles */
</style>
