<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6 md:p-8">
    <!-- Header Section -->
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
            <span class="text-white font-bold text-xl">1</span>
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
                <p class="text-sm text-gray-500">Thesis Project • 2024-2025</p>
                <div class="mt-2 space-x-2">
                  <a href="https://github.com/HarleyGotardo/forest-products-collectors-monitoring-system" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-2 py-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md">
                    View on GitHub
                  </a>
                  <a href="https://fpms-three.vercel.app/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-2 py-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md">
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Lead Developer</span>
          </div>
          <p class="text-gray-600 mb-4 leading-relaxed">
            Comprehensive web-based monitoring system for VSU's Forest Protection Unit, replacing paper-based workflows entirely.
            Features interactive GIS mapping with Leaflet.js and role-based access controls for 3 user types.
          </p>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="font-semibold text-gray-800 mb-2">Key Features</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Interactive GIS mapping with Leaflet.js</li>
                <li>• Role-based access controls (Admin, Ranger, Collector)</li>
                <li>• Database normalized to 3NF</li>
                <li>• System rating: 4.64/5 (Excellent)</li>
              </ul>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="font-semibold text-gray-800 mb-2">Impact</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Replaced paper-based workflows entirely</li>
                <li>• Improved monitoring accuracy significantly</li>
                <li>• Copyright protected by National Library</li>
                <li>• Used by VSU Forest Protection Unit</li>
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
                <p class="text-sm text-gray-500">Management System • 2025-Present</p>
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
                <a href="https://github.com/totbenz/personal-info-management-system" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md">
                  View Repository
                </a>
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
// Sidebar 1 placeholder component
</script>

<style scoped>
/* All styling handled by Tailwind CSS */
</style>
