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
  <div class="flex min-h-screen bg-slate-50">
    <!-- Mobile Header with Burger Menu -->
    <header class="lg:hidden fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/60 z-50">
      <div class="flex items-center px-4 py-3">
        <button
          @click="toggleSidebar"
          class="burger-menu p-2 rounded-xl hover:bg-slate-100 transition-all duration-200 mr-3 group"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6 text-slate-600 group-hover:text-slate-900 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <div class="flex items-center space-x-3">
          <div class="relative">
            <img src="../public/profile.jpg" alt="Harley Gotardo" class="w-8 h-8 rounded-full object-cover ring-2 ring-slate-200">
            <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
          </div>
          <h1 class="text-sm font-semibold text-slate-800">Harley Gotardo</h1>
          <span class="text-xs text-slate-500 hidden sm:inline">Full Stack Developer</span>
        </div>
      </div>
    </header>

    <!-- Overlay for mobile -->
    <div
      v-if="isSidebarOpen"
      class="lg:hidden fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-all duration-300"
      @click="closeSidebar"
    ></div>

    <!-- Sidebar Navigation -->
    <nav
      ref="sidebarRef"
      class="w-64 bg-white/95 backdrop-blur-md shadow-lg border-r border-slate-200/60 fixed h-full overflow-y-auto z-50 transition-transform duration-300 ease-in-out"
      :class="{
        'translate-x-0': isSidebarOpen || isDesktop,
        '-translate-x-full lg:translate-x-0': !isSidebarOpen && !isDesktop
      }"
    >
      <!-- Mobile Close Button -->
      <div class="lg:hidden flex justify-end p-4">
        <button
          @click="closeSidebar"
          class="p-2 rounded-xl hover:bg-slate-100 transition-all duration-200 group"
          aria-label="Close menu"
        >
          <svg class="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Profile Header -->
      <div class="p-6 border-b border-slate-100 lg:mt-0 -mt-4">
        <div class="flex items-center space-x-3">
          <div class="relative">
            <img src="../public/profile.jpg" alt="Harley Gotardo" class="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 shadow-sm">
            <div class="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
              <svg class="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
          <div>
            <h2 class="text-sm font-semibold text-slate-800">Harley Gotardo</h2>
            <p class="text-xs text-slate-500">Full Stack Developer</p>
            <div class="flex items-center mt-1">
              <div class="w-2 h-2 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></div>
              <span class="text-xs text-emerald-600 font-medium">Available for work</span>
            </div>
          </div>
        </div>
        <!-- Resume Button -->
        <div class="mt-4">
          <a
            href="https://flowcv.com/resume/aur4kwgw8dhq"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center w-full px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group"
          >
            <svg class="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              class="flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 group"
              :class="{
                'bg-slate-100 text-slate-900 border-l-2 border-blue-500 shadow-sm': $route.path === '/',
                'text-slate-600 hover:text-slate-900': $route.path !== '/'
              }"
            >
              <svg class="w-5 h-5 mr-3 transition-all duration-200" :class="{
                'text-blue-500 scale-110': $route.path === '/',
                'text-slate-400 group-hover:text-blue-500 group-hover:scale-110': $route.path !== '/'
              }" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
              </svg>
              <span class="transition-all duration-200" :class="{
                'font-semibold': $route.path === '/'
              }">About</span>
            </router-link>
          </li>
          <li class="mb-1">
            <router-link
              to="/academic-experience"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-rose-50 hover:text-rose-900 group"
              :class="{
                'bg-rose-50 text-rose-900 border-l-2 border-rose-500 shadow-sm': $route.path === '/academic-experience',
                'text-slate-600 hover:text-slate-900': $route.path !== '/academic-experience'
              }"
            >
            <svg
              class="w-6 h-6 mr-3 transition-all duration-200"
              :class="{
                'text-rose-500 scale-110': $route.path === '/academic-experience',
                'text-slate-400 group-hover:text-rose-500 group-hover:scale-110': $route.path !== '/academic-experience'
              }"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
            <span class="transition-all duration-200" :class="{
              'font-semibold': $route.path === '/academic-experience'
            }">Academic Experience</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/projects"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-900 group"
              :class="{
                'bg-indigo-50 text-indigo-900 border-l-2 border-indigo-500 shadow-sm': $route.path === '/projects',
                'text-slate-600 hover:text-slate-900': $route.path !== '/projects'
              }"
            >
              <svg class="w-5 h-5 mr-3 transition-all duration-200" :class="{
                'text-indigo-500 scale-110': $route.path === '/projects',
                'text-slate-400 group-hover:text-indigo-500 group-hover:scale-110': $route.path !== '/projects'
              }" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              <span class="transition-all duration-200" :class="{
                'font-semibold': $route.path === '/projects'
              }">Projects</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/experience"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-900 group relative"
              :class="{
              'bg-emerald-50 text-emerald-900 border-l-2 border-emerald-500 shadow-sm': $route.path === '/experience',
              'text-slate-600 hover:text-slate-900': $route.path !== '/experience'
              }"
            >
              <svg class="w-5 h-5 mr-3 transition-all duration-200" :class="{
              'text-emerald-500 scale-110': $route.path === '/experience',
              'text-slate-400 group-hover:text-emerald-500 group-hover:scale-110': $route.path !== '/experience'
              }" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
              </svg>
              <span class="transition-all duration-200" :class="{
                'font-semibold': $route.path === '/experience'
              }">Experience</span>
              <span class="flex items-center ml-auto">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-white shadow-sm"></span>
              </span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/skills"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-amber-50 hover:text-amber-900 group"
              :class="{
                'bg-amber-50 text-amber-900 border-l-2 border-amber-500 shadow-sm': $route.path === '/skills',
                'text-slate-600 hover:text-slate-900': $route.path !== '/skills'
              }"
            >
              <svg class="w-5 h-5 mr-3 transition-all duration-200" :class="{
                'text-amber-500 scale-110': $route.path === '/skills',
                'text-slate-400 group-hover:text-amber-500 group-hover:scale-110': $route.path !== '/skills'
              }" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="transition-all duration-200" :class="{
                'font-semibold': $route.path === '/skills'
              }">Skills</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/certificates"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-violet-50 hover:text-violet-900 group"
              :class="{
                'bg-violet-50 text-violet-900 border-l-2 border-violet-500 shadow-sm': $route.path === '/certificates',
                'text-slate-600 hover:text-slate-900': $route.path !== '/certificates'
              }"
            >
              <svg class="w-5 h-5 mr-3 transition-all duration-200" :class="{
                'text-violet-500 scale-110': $route.path === '/certificates',
                'text-slate-400 group-hover:text-violet-500 group-hover:scale-110': $route.path !== '/certificates'
              }" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 13a2 2 0 00-2 2V16a2 2 0 002 2h8a2 2 0 002-2v-3a2 2 0 00-2-2h-8zm-1-5a1 1 0 011-1h2a1 1 0 011 1v3.57a1 1 0 01-1 1h-2a1 1 0 01-1-1V8zm2 0a1 1 0 011-1h2a1 1 0 011 1v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"/>
              </svg>
              <span class="transition-all duration-200" :class="{
                'font-semibold': $route.path === '/certificates'
              }">Certificates</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-orange-50 hover:text-orange-900 group"
              :class="{
                'bg-orange-50 text-orange-900 border-l-2 border-orange-500 shadow-sm': $route.path === '/contact',
                'text-slate-600 hover:text-slate-900': $route.path !== '/contact'
              }"
            >
              <svg class="w-5 h-5 mr-3 transition-all duration-200" :class="{
                'text-orange-500 scale-110': $route.path === '/contact',
                'text-slate-400 group-hover:text-orange-500 group-hover:scale-110': $route.path !== '/contact'
              }" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span class="transition-all duration-200" :class="{
                'font-semibold': $route.path === '/contact'
              }">Contact</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Footer -->
      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100 bg-slate-50/50 backdrop-blur-sm">
        <p class="text-xs text-slate-500 text-center font-medium"> @{{ new Date().getFullYear() }} Harley Gotardo</p>
        <div class="flex items-center justify-center mt-2 space-x-3">
          <a href="https://github.com/HarleyGotardo" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-slate-600 transition-colors duration-200">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/harley-gotardo" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-slate-600 transition-colors duration-200">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
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
