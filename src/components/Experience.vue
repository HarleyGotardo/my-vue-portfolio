<template>
  <div class="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-6 md:p-8">
    <!-- Header Section -->
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
        <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
            <svg
              class="w-10 h-10 transition-colors"
              :class="{
              'text-white': $route.path === '/experience',
              'text-emerald-100 group-hover:text-white': $route.path !== '/experience'
              }"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
            </svg>
            </div>
          <div>
            <h1 class="text-3xl font-bold text-gray-800">Work Experience</h1>
            <p class="text-gray-600">Professional journey and achievements</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-500">
          <h2 class="text-xl font-semibold text-gray-800 mb-3 flex items-center">
            <svg class="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            Professional Development
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Almost 2 years of real-world experience in full-stack development, specializing in Laravel, Vue.js, and
            scalable SaaS platforms. From internships to technical mentorship, each role has contributed to my growth
            as a developer and problem solver.
          </p>
        </div>
      </div>

      <!-- Work Experience Timeline -->
      <div class="space-y-8 mb-8">
        <!-- High6 Internship -->
        <!-- Brice Holding LLC Internship -->
        <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 relative">
          <div class="flex items-start justify-between mb-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4 relative">
          <!-- Green Pulse Circle -->
          <span class="absolute -top-2 -right-2 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
          </span>
          <svg class="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
          </svg>
              </div>
              <div>
          <h3 class="text-xl font-bold text-gray-800">Intern <strong class="text-green-800">(Active)</strong></h3>
          <p class="text-emerald-600 font-semibold">Brice Holding LLC</p>
          <p class="text-sm mb-1 text-gray-500">August - Current 2025 • Remote</p>
          <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">3 Months Contract</span>
              </div>
            </div>
            <span class="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">Active</span>
          </div>
          <p class="text-gray-600 mb-4 leading-relaxed">
            Currently serving as an Intern at Brice Holding LLC, contributing to ongoing projects and gaining valuable industry experience in a dynamic remote environment.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">Internship</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Remote</span>
            <span class="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs">Active</span>
          </div>
        </div>
        <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="flex items-start justify-between mb-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800">Full-Stack Developer Intern</h3>
                <p class="text-emerald-600 font-semibold">High6 - Web Design & E-commerce Development Company</p>
                <p class="text-sm mb-1 text-gray-500">June - August 2024 • Remote</p>
                <a
                  class="hover:bg-red-200 text-xs bg-red-100 px-2 py-1 rounded-full"
                  href="https://drive.google.com/file/d/1SLEvOXqw6RlHNzNkNPHu6szHcfjVrqry/view?usp=sharing"
                  target="_blank"
                  rel="noopener"
                >
                  Read Documentation
                </a>
                <a
                  class="text-xs bg-blue-100 px-2 py-1 ml-2 rounded-full hover:bg-blue-200"
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7228638121465184256/"
                  target="_blank"
                  rel="noopener"
                >
                  View LinkedIn Post
                </a>
              </div>
            </div>
            <span class="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">305 Hours</span>
          </div>
          <p class="text-gray-600 mb-4 leading-relaxed">
            Digital agency specializing in custom web solutions and e-commerce platforms for SMEs. Gained hands-on experience
            in full-stack development while contributing to real client projects.
          </p>
          <div class="grid md:grid-cols-2 gap-6 mb-4">
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="font-semibold text-gray-800 mb-3">Key Achievements</h4>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Built internal Subscription Tracking System, streamlining record-keeping significantly
                </li>
                <li class="flex items-start">
                  <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Engineered CRUD operations with soft delete and restore functionality
                </li>
                <li class="flex items-start">
                  <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Automated expiry reminders via Laravel job queues and schedulers
                </li>
              </ul>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="font-semibold text-gray-800 mb-3">Technical Contributions</h4>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Customized UI components using Vue.js and Tailwind CSS
                </li>
                <li class="flex items-start">
                  <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Normalized complex relational tables, optimizing query performance
                </li>
                <li class="flex items-start">
                  <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Managed backend logic with Laravel and Inertia.js
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs">Laravel</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">Vue.js</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Inertia.js</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Tailwind CSS</span>
            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Job Queues</span>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-8">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <svg class="w-6 h-6 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
          Education
        </h3>
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="w-4 h-4 bg-teal-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
            <div class="flex-1">
              <div class="flex items-start justify-between mb-2">
                <div>
                  <h4 class="text-lg font-semibold text-gray-800">Bachelor of Science in Computer Science</h4>
                  <p class="text-teal-600 font-medium">Visayas State University</p>
                  <p class="text-sm text-gray-500">2021 – 2025</p>
                </div>
                <span class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-medium">Completed</span>
              </div>
              <div class="bg-gray-50 rounded-lg p-4 mb-4">
                <h5 class="font-semibold text-gray-800 mb-2">Academic Achievements</h5>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Outstanding Computer Science Trainee Award – Full Stack Developer</li>
                  <li>• Dean's List and Chairman's List Achiever</li>
                  <li>• 2nd Year Representative – Computer Science Student Society Organization</li>
                  <li>• Project Manager – Software Engineering 1 & 2</li>
                </ul>
              </div>
              <div class="bg-blue-50 rounded-lg p-4">
                <h5 class="font-semibold text-gray-800 mb-2">Thesis Project</h5>
                <p class="text-sm text-gray-600">
                  <strong>Development of a Web-Based Monitoring System for the Forest Product Collectors of the Visayas State University</strong><br>
                  Copyright Protected by the National Library of the Philippines
                </p>
              </div>
            </div>
          </div>

          <div class="flex items-start">
            <div class="w-4 h-4 bg-blue-400 rounded-full mt-1 mr-4 flex-shrink-0"></div>
            <div class="flex-1">
              <div class="flex items-start justify-between mb-2">
                <div>
                  <h4 class="text-lg font-semibold text-gray-800">Technical Vocational Livelihood – Information Communications Technology</h4>
                  <p class="text-blue-600 font-medium">San Juan National High School</p>
                  <p class="text-sm text-gray-500">2019 – 2021</p>
                </div>
                <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Completed</span>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <p class="text-sm text-gray-600">
                  <strong>Academic Achievement:</strong> Graduated with High Honors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Professional Reference -->
      <div class="bg-gradient-to-r from-emerald-700 to-teal-800 rounded-2xl p-8 text-white">
        <h3 class="text-2xl font-bold mb-6 text-center">Professional Reference</h3>
        <div class="max-w-2xl mx-auto text-center">
          <div class="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h4 class="text-xl font-semibold mb-2">Jude B. Rola</h4>
            <p class="text-emerald-100 mb-1">Thesis Adviser</p>
            <p class="text-emerald-100 mb-3">Visayas State University</p>
            <a href="mailto:jude.rola@vsu.edu.ph" class="inline-flex items-center text-white hover:text-emerald-200 transition-colors duration-200">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              jude.rola@vsu.edu.ph
            </a>
          </div>
          <!-- <p class="text-emerald-100 mt-6">
            Available for employment | Open to remote and hybrid work arrangements
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'ExperienceSection' });
// Sidebar 2 placeholder component
</script>

<style scoped>
/* All styling handled by Tailwind CSS */
</style>
