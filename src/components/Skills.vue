<template>
  <div class="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 p-6 md:p-8">
    <!-- Header Section -->
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-3xl font-bold text-gray-800">Technical Skills</h1>
            <p class="text-gray-600">Technologies and competencies I work with</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border-l-4 border-rose-500">
          <h2 class="text-xl font-semibold text-gray-800 mb-3 flex items-center">
            <svg class="w-5 h-5 text-rose-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
            Technical Expertise
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Comprehensive skill set spanning frontend and backend development, database management, and modern development
            tools. Experienced in building scalable applications with focus on performance optimization and user experience.
          </p>
        </div>
      </div>

      <!-- Technical Skills Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- Frontend Development -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800">Frontend Development</h3>
          </div>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Vue.js</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Inertia.js</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">Next.js</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">HTML5</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">CSS3</span>
              <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">JavaScript</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-medium">Tailwind CSS</span>
            </div>
          </div>
        </div>

        <!-- Backend Development -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"/>
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v-1z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800">Backend Development</h3>
          </div>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Laravel</span>
              <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Ruby on Rails</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">RESTful APIs</span>
              <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Python</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">Job Queues</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Schedulers</span>
            </div>
          </div>
        </div>

        <!-- Database Technologies -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800">Database Technologies</h3>
          </div>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">PostgreSQL</span>
              <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">MySQL</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">SQLite</span>
              <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Supabase</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Normalization (3NF)</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">Query Optimization</span>
            </div>
          </div>
        </div>

        <!-- Mobile Development -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM8 4h4v10H8V4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800">Mobile Development</h3>
          </div>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Flutter</span>
              <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Android Development</span>
            </div>
          </div>
        </div>

        <!-- Tools & Platforms -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800">Tools & Platforms</h3>
          </div>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">Git</span>
              <span class="px-3 py-1 bg-black text-white rounded-full text-xs font-medium">Vercel</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">Firebase</span>
              <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Pusher</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">JSON APIs</span>
            </div>
          </div>
        </div>

        <!-- Core Competencies -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800">Core Competencies</h3>
          </div>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">CRUD Operations</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Role-Based Access</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">System Integration</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">Real-time Features</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Soft Skills & Methodologies -->
      <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-8">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <svg class="w-6 h-6 text-pink-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
          </svg>
          Soft Skills & Methodologies
        </h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-lg font-semibold text-gray-800 mb-4">Professional Skills</h4>
            <div class="space-y-3">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Project Management</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Team Leadership</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Client Communication</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Problem Solving</span>
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-gray-800 mb-4">Development Methodologies</h4>
            <div class="space-y-3">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Agile Methodologies</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Database Design & Normalization</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Performance Optimization</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span class="text-gray-700">UI/UX Design Principles</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline Section -->
      <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <svg class="w-6 h-6 text-rose-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
          </svg>
          Professional Timeline
        </h3>
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="w-4 h-4 bg-rose-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
            <div>
              <h4 class="font-semibold text-gray-800">Current Position</h4>
              <p class="text-gray-600 text-sm">Jr. Full Stack Developer Intern at <strong>Brice Holding LLC</strong></p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="w-4 h-4 bg-pink-400 rounded-full mt-1 mr-4 flex-shrink-0"></div>
            <div>
              <h4 class="font-semibold text-gray-800">Previous Experience</h4>
              <p class="text-gray-600 text-sm">Jr. Laravel Developer Intern at High6</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="w-4 h-4 bg-purple-400 rounded-full mt-1 mr-4 flex-shrink-0"></div>
            <div>
              <h4 class="font-semibold text-gray-800">Education & Training</h4>
              <p class="text-gray-600 text-sm">Visayas State University - Bachelors Degree</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Sidebar 3 placeholder component
</script>

<style scoped>
/* All styling handled by Tailwind CSS */
</style>
