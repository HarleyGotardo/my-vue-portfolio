<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-20 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div class="absolute top-40 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
    </div>

    <!-- Header Section -->
    <div class="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-20">
      <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-10 mb-12 hover:shadow-2xl transition-all duration-500">
        <div class="flex items-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-2">Technical Skills</h1>
            <p class="text-gray-600 text-lg font-medium">Technologies and competencies I work with</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-l-4 border-purple-500 shadow-sm">
          <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
            Technical Expertise
          </h2>
          <p class="text-gray-700 leading-relaxed text-lg">
            Comprehensive skill set spanning frontend and backend development, database management, and modern development
            tools. Experienced in building scalable applications with focus on performance optimization and user experience.
          </p>
        </div>
      </div>

      <!-- Technical Skills Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <!-- Frontend Development -->
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl  transition-all duration-500">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Frontend Development</h3>
          </div>
            <div class="space-y-4">
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-green-100 text-green-800 rounded-xl text-sm font-semibold">Vue.js</span>
              <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-xl text-sm font-semibold">Inertia.js</span>
              <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-sm font-semibold">Next.js</span>
              <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-semibold">React</span>
              <span class="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-xl text-sm font-semibold">Nuxt.js</span>
              <span class="px-4 py-2 bg-pink-100 text-pink-800 rounded-xl text-sm font-semibold">Vite</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-orange-100 text-orange-800 rounded-xl text-sm font-semibold">HTML5</span>
              <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-semibold">CSS3</span>
              <span class="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-xl text-sm font-semibold">JavaScript</span>
              <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-xl text-sm font-semibold">TypeScript</span>
              <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-sm font-semibold">Sass/SCSS</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-xl text-sm font-semibold">Tailwind CSS</span>
              <span class="px-4 py-2 bg-pink-100 text-pink-800 rounded-xl text-sm font-semibold">Micro-Frontend</span>
              <span class="px-4 py-2 bg-green-100 text-green-800 rounded-xl text-sm font-semibold">Bootstrap</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-xl text-sm font-semibold">API Integrations</span>
              <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-semibold">Responsive Design</span>
              <span class="px-4 py-2 bg-orange-100 text-orange-800 rounded-xl text-sm font-semibold">SPA (Single Page Apps)</span>
            </div>
            </div>
        </div>

        <!-- Backend Development -->
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl  transition-all duration-500">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <svg class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"/>
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v-1z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Backend Development</h3>
          </div>
          <div class="space-y-4">
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-red-100 text-red-800 rounded-xl text-sm font-semibold">Laravel</span>
              <span class="px-4 py-2 bg-red-100 text-red-800 rounded-xl text-sm font-semibold">Ruby on Rails</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-semibold">RESTful APIs</span>
              <span class="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-xl text-sm font-semibold">Python</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-orange-100 text-orange-800 rounded-xl text-sm font-semibold">Job Queues</span>
              <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-xl text-sm font-semibold">Schedulers</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-orange-100 text-orange-800 rounded-xl text-sm font-semibold">Node.JS</span>
              <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-xl text-sm font-semibold">Microservices</span>
            </div>
          </div>
        </div>

        <!-- Database Technologies -->
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl  transition-all duration-500">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Database Technologies</h3>
          </div>
          <div class="space-y-4">
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-semibold">PostgreSQL</span>
              <span class="px-4 py-2 bg-orange-100 text-orange-800 rounded-xl text-sm font-semibold">MySQL</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-sm font-semibold">SQLite</span>
              <span class="px-4 py-2 bg-green-100 text-green-800 rounded-xl text-sm font-semibold">Supabase</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-xl text-sm font-semibold">Normalization (3NF)</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-xl text-sm font-semibold">Query Optimization</span>
            </div>
          </div>
        </div>

        <!-- Mobile Development -->
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl  transition-all duration-500">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <svg class="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM8 4h4v10H8V4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Mobile Development</h3>
          </div>
          <div class="space-y-4">
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-semibold">Flutter</span>
              <span class="px-4 py-2 bg-green-100 text-green-800 rounded-xl text-sm font-semibold">Dart</span>
              <span class="px-4 py-2 bg-green-100 text-green-800 rounded-xl text-sm font-semibold">React Native</span>
            </div>
          </div>
        </div>

        <!-- Tools & Platforms -->
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl  transition-all duration-500">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Tools & Platforms</h3>
          </div>
          <div class="space-y-4">
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-sm font-semibold">Git</span>
              <span class="px-4 py-2 bg-black text-white rounded-xl text-sm font-semibold">Vercel</span>
              <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-semibold">GitHub Actions</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-orange-100 text-orange-800 rounded-xl text-sm font-semibold">Firebase</span>
              <span class="px-4 py-2 bg-red-100 text-red-800 rounded-xl text-sm font-semibold">Pusher</span>
              <span class="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-xl text-sm font-semibold">CapRover</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-semibold">JSON APIs</span>
              <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-xl text-sm font-semibold">CI/CD</span>
              <span class="px-4 py-2 bg-green-100 text-green-800 rounded-xl text-sm font-semibold">DevOps</span>
            </div>
          </div>
        </div>

        <!-- Core Competencies -->
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl  transition-all duration-500">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <svg class="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
                <path d="M8 13l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Core Competencies</h3>
          </div>
            <div class="space-y-4">
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-green-100 text-green-800 rounded-xl text-sm font-semibold">Full-Stack Web Development</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-semibold">API Design & Integration</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-xl text-sm font-semibold">Backend Development & Database Management</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-orange-100 text-orange-800 rounded-xl text-sm font-semibold">Frontend Development</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-xl text-sm font-semibold">DevOps & CI/CD</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-pink-100 text-pink-800 rounded-xl text-sm font-semibold">Software Engineering Practices</span>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-xl text-sm font-semibold">System Optimization & Scalability</span>
            </div>
            </div>
        </div>
      </div>

      <!-- Soft Skills & Methodologies -->
      <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-10 mb-12 hover:shadow-2xl transition-all duration-500">
        <h3 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <svg class="w-8 h-8 text-purple-600 mr-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
          </svg>
          Soft Skills & Methodologies
        </h3>
        <div class="grid md:grid-cols-2 gap-10">
          <div>
            <h4 class="text-xl font-bold text-gray-900 mb-6">Professional Skills</h4>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-3 h-3 bg-purple-500 rounded-full mr-4 shadow-lg"></div>
                <span class="text-gray-700 text-lg">Project Management</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-purple-500 rounded-full mr-4 shadow-lg"></div>
                <span class="text-gray-700 text-lg">Team Leadership</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-purple-500 rounded-full mr-4 shadow-lg"></div>
                <span class="text-gray-700 text-lg">Client Communication</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-purple-500 rounded-full mr-4 shadow-lg"></div>
                <span class="text-gray-700 text-lg">Problem Solving</span>
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-xl font-bold text-gray-900 mb-6">Development Methodologies</h4>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-3 h-3 bg-pink-500 rounded-full mr-4 shadow-lg"></div>
                <span class="text-gray-700 text-lg">Agile Methodologies</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-pink-500 rounded-full mr-4 shadow-lg"></div>
                <span class="text-gray-700 text-lg">Database Design & Normalization</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-pink-500 rounded-full mr-4 shadow-lg"></div>
                <span class="text-gray-700 text-lg">API Development</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-pink-500 rounded-full mr-4 shadow-lg"></div>
                <span class="text-gray-700 text-lg">UI/UX Design Principles</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline Section -->
      <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-500">
        <h3 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <svg class="w-8 h-8 text-purple-600 mr-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
          </svg>
          Professional Timeline
        </h3>
        <div class="space-y-8">
          <div class="flex items-start">
            <div class="w-5 h-5 bg-purple-500 rounded-full mt-2 mr-6 flex-shrink-0 shadow-lg"></div>
            <div>
              <h4 class="font-bold text-gray-900 text-lg">Current Position</h4>
              <p class="text-gray-600 text-base">Unemployed</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="w-5 h-5 bg-pink-400 rounded-full mt-2 mr-6 flex-shrink-0 shadow-lg"></div>
            <div>
              <h4 class="font-bold text-gray-900 text-lg">Previous Experience</h4>
              <p class="text-gray-600 text-base">Jr. Software Developer Intern at NGnair Payments</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="w-5 h-5 bg-purple-400 rounded-full mt-2 mr-6 flex-shrink-0 shadow-lg"></div>
            <div>
              <h4 class="font-bold text-gray-900 text-lg">Education & Training</h4>
              <p class="text-gray-600 text-base">Visayas State University - Bachelors Degree</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'SkillsSection' });
// Sidebar 3 placeholder component
</script>

<style scoped>
/* All styling handled by Tailwind CSS */
</style>
