<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6 md:p-8">
    <!-- Header Section -->
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
        <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
            <svg
              class="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            </div>
          <div>
            <h1 class="text-3xl font-bold text-gray-800">Featured Projects</h1>
            <p class="text-gray-600">Showcasing my development work and technical achievements</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-l-4 border-indigo-500">
          <h2 class="text-xl font-semibold text-gray-800 mb-3 flex items-center">
            <svg class="w-5 h-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Full-Stack Development Portfolio
          </h2>
          <p class="text-gray-600 leading-relaxed">
            From university management systems to forest monitoring solutions, these projects showcase my expertise in
            Vue.js, Laravel, database design, and modern web development practices. Each project demonstrates real-world
            problem-solving and technical innovation.
          </p>
        </div>
      </div>

      <!-- Featured Projects -->
      <div class="space-y-8">
        <!-- Forest Product Collectors Monitoring System -->
        <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="flex items-start justify-between mb-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800">Forest Product Collectors Monitoring System</h3>
                <p class="text-sm text-gray-500">Thesis Project • Dec 2024 - May 2025</p>
                <div class="mt-2 space-x-2">
                  <a href="https://github.com/HarleyGotardo/forest-products-collectors-monitoring-system" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-2 py-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md">
                    View on GitHub
                  </a>
                  <a href="https://fpms-three.vercel.app/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-2 py-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md">
                    Visit Website
                  </a>
                  <a href="https://drive.google.com/file/d/133bnoBTW3LTIlJqxZmYgNS_Z6x_haecp/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-2 py-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md">
                    View Documentation
                  </a>
                </div>
              </div>
            </div>
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Lead Developer</span>
          </div>
          <!-- Image Carousel -->
          <div class="relative mb-6 bg-gray-100 rounded-xl overflow-hidden">
            <div class="relative w-full" style="padding-bottom: 50%; /* 2:1 Aspect Ratio */">
              <div
                v-for="(image, index) in forestProjectImages"
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
                  v-for="(image, index) in forestProjectImages"
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
            Enterprise-grade web-based monitoring system for VSU's Forest Protection Unit, digitizing forest product collection management
            with interactive GIS mapping, automated workflows, and comprehensive analytics. ISO/IEC 25010:2023 compliant with 4.64/5 excellence rating.
          </p>

          <div class="grid md:grid-cols-3 gap-4 mb-4">
            <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 class="font-semibold text-gray-800 mb-2">Core System Features</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Multi-role authentication (Admin, Ranger, Collector)</li>
                <li>• Interactive GIS mapping with Leaflet.js</li>
                <li>• Real-time inventory management</li>
                <li>• Digital collection request workflow</li>
                <li>• Automated permit generation (PDF)</li>
              </ul>
            </div>
            <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 class="font-semibold text-gray-800 mb-2">Data & Analytics</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Normalized database design (3NF)</li>
                <li>• Comprehensive sales dashboard</li>
                <li>• Revenue tracking with visual charts</li>
                <li>• Low stock alerts & notifications</li>
                <li>• Audit trails with user tracking</li>
              </ul>
            </div>
            <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <h4 class="font-semibold text-gray-800 mb-2">Technical Excellence</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Row-level security (RLS) implementation</li>
                <li>• Mobile-responsive design</li>
                <li>• Real-time data synchronization</li>
                <li>• Cross-browser compatibility</li>
                <li>• Cloud deployment with Vercel</li>
              </ul>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="font-semibold text-gray-800 mb-2">System Impact & Results</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Replaced manual Microsoft Word-based records</li>
                <li>• Streamlined approval workflows by 70%</li>
                <li>• Enhanced data accuracy and accessibility</li>
                <li>• Copyright protected by National Library</li>
                <li>• Active deployment at VSU Forest Protection Unit</li>
              </ul>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="font-semibold text-gray-800 mb-2">Evaluation & Quality</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• ISO/IEC 25010:2023 compliant system</li>
                <li>• Overall rating: 4.64/5.0 (Excellent)</li>
                <li>• 30-participant evaluation study</li>
                <li>• Functional Suitability: 4.73/5.0</li>
                <li>• Security & Reliability: 4.77/5.0</li>
              </ul>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Vue.js</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">Supabase</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Tailwind CSS</span>
            <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">Leaflet.js</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Vercel</span>
          </div>
        </div>

        <!-- Subscription Tracking System -->
        <SubscriptionTrackingSystem />

        <!-- University Supreme Student Council Connect -->
        <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="flex items-start justify-between mb-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800">University Supreme Student Council Connect</h3>
                <p class="text-sm text-gray-500">Management System • 2025 - <span class="text-green-600">Present</span></p>
              </div>
            </div>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Database Engineer</span>
          </div>
          <p class="text-gray-600 mb-4 leading-relaxed">
            Software-based management system with cross-platform capabilities. Designed complete database architecture
            and developed backend logic for student registration, QR code attendance, and financial management.
          </p>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="font-semibold text-gray-800 mb-2">Responsibilities</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Database design and architecture in Supabase</li>
                <li>• Normalized tables to Third Normal Form (3NF)</li>
                <li>• Backend logic development</li>
                <li>• API endpoints for web-mobile communication</li>
              </ul>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="font-semibold text-gray-800 mb-2">Key Modules</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Student Registration System</li>
                <li>• QR Code-based Attendance Scanning</li>
                <li>• Fines & Fees Management</li>
                <li>• Cross-platform mobile app integration</li>
              </ul>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Next.js</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">Supabase</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Tailwind CSS</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Flutter</span>
            <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">Vercel</span>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 max-h-auto">
  <div class="flex items-start justify-between mb-6">
    <div class="flex items-center">
      <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
        <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-bold text-gray-800">Human Resource Information System (HRIS)</h3>
        <p class="text-sm text-gray-500">Client Project • 2025</p>
                        <a href="https://github.com/totbenz/personal-info-management-system" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md">
                  View Repository
                </a>
      </div>
    </div>
    <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Laravel Developer</span>
  </div>

  <p class="text-gray-600 mb-4 leading-relaxed">
    Mentoring master's degree student in developing Human Resource Information System for MIT capstone project. Also developed client's MIT Capstone: A comprehensive web-based HRIS built with Laravel for managing educational personnel, schools, and HR processes
    with secure role-based access for teachers, school heads, and administrators.
  </p>

  <div class="grid md:grid-cols-2 gap-4 mb-4">
    <div class="bg-gray-50 rounded-lg p-4">
      <h4 class="font-semibold text-gray-800 mb-2">Core Responsibilities</h4>
      <ul class="text-sm text-gray-600 space-y-1">
        <li>• Implemented role-based dashboards and authentication</li>
        <li>• Developed CRUD for personnel and school management</li>
        <li>• Designed approval workflows for leave, CTO, and service credits</li>
        <li>• Integrated PDF export and document handling modules</li>
      </ul>
    </div>
    <div class="bg-gray-50 rounded-lg p-4">
      <h4 class="font-semibold text-gray-800 mb-2">Key Features</h4>
      <ul class="text-sm text-gray-600 space-y-1">
        <li>• Leave & CTO request tracking with notifications</li>
        <li>• Digital service record generation and history tracking</li>
        <li>• Salary grade and step management with exports</li>
        <li>• Reports and analytics for personnel and schools</li>
      </ul>
    </div>
  </div>

  <div class="flex flex-wrap gap-2">
    <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Laravel</span>
    <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Livewire</span>
    <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">RESTful API</span>
    <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Tailwind CSS</span>
    <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">MySQL</span>
  </div>
</div>


        <!-- Additional Projects Grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <!-- HRIS Mentorship Project -->
          <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">HRIS - Mentorship Project</h3>
                <p class="text-xs text-gray-500">2025-Present • Technical Mentor and Developer</p>

              </div>
            </div>
            <p class="text-gray-600 text-sm mb-4">
              Mentoring master's degree student in developing Human Resource Information System for MIT capstone project.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Laravel Livewire</span>
              <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Tailwind CSS</span>
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">MySQL</span>
            </div>
          </div>

          <!-- Freelance Fitness App -->
          <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Fitness Tracking Web App</h3>
                <p class="text-xs text-gray-500">2024 • Full-Stack Developer</p>
              </div>
            </div>
            <p class="text-gray-600 text-sm mb-4">
              Personalized fitness application with dynamic workout planner based on individual goals and activity levels.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Vue.js</span>
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Supabase</span>
              <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Tailwind CSS</span>
            </div>
          </div>

          <!-- Mobile Inventory System -->
          <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Mobile Inventory System</h3>
                <p class="text-xs text-gray-500">2023 • Project Manager & Lead Developer</p>
                <p class="text-xs text-gray-500 mt-2">
                  <a href="https://github.com/HarleyGotardo/squaremind-apk-releases" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md">View APKs</a>
                </p>
              </div>
            </div>
            <p class="text-gray-600 text-sm mb-4">
              Android-based Sales and Inventory Management System for Sari-Sari Stores with offline capabilities.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Flutter</span>
              <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">SQLite</span>
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Android</span>
            </div>
          </div>

          <!-- Cash Compass -->
          <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Cash Compass Expense Tracker</h3>
                <p class="text-xs text-gray-500">2023 • Frontend Developer</p>
              </div>
            </div>
            <p class="text-gray-600 text-sm mb-4">
              My first ever experience in web development: Web-based personal finance application with expense categorization and local storage for data persistence.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">HTML5</span>
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">CSS3</span>
              <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'PortfolioProjects' })
import { ref, onMounted, onUnmounted } from 'vue'
import SubscriptionTrackingSystem from './SubscriptionTrackingSystem.vue'

// Forest Project Images Carousel
const currentImageIndex = ref(0)
const forestProjectImages = ref([
  {
    src: '/nature-cart/dashboard.png',
    alt: 'Forest Products Monitoring System Dashboard'
  },
  {
    src: '/nature-cart/forest-products.png',
    alt: 'Forest Products Management Interface'
  },
  {
    src: '/nature-cart/fp-map.png',
    alt: 'Interactive GIS Mapping with Leaflet.js'
  },
  {
    src: '/nature-cart/locations.png',
    alt: 'Location Management System'
  },
  {
    src: '/nature-cart/collection-request-management.png',
    alt: 'Collection Request Management'
  },
  {
    src: '/nature-cart/sales-report.png',
    alt: 'Sales Report and Analytics'
  },
  {
    src: '/nature-cart/login-page.png',
    alt: 'Secure Login Interface'
  },
  {
    src: '/nature-cart/signup.png',
    alt: 'User Registration System'
  }
])

let carouselInterval = null

// Carousel navigation methods
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % forestProjectImages.value.length
}

const previousImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0
    ? forestProjectImages.value.length - 1
    : currentImageIndex.value - 1
}

// Auto-advance carousel
const startCarousel = () => {
  carouselInterval = setInterval(() => {
    nextImage()
  }, 2000) // Change image every 2 seconds
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
/* All styling handled by Tailwind CSS */
</style>
