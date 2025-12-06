<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div class="absolute top-40 right-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
    </div>

    <!-- Header Section -->
    <div class="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-20">
      <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-12 mb-16 hover:shadow-2xl transition-all duration-500">
        <div class="flex items-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
            <svg
              class="w-8 h-8 text-white transition-colors"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
            </svg>
            </div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-2">Work Experience</h1>
            <p class="text-gray-600 text-lg font-medium">Professional journey and achievements</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-l-4 border-purple-500 shadow-sm">
          <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            Professional Development
          </h2>
          <p class="text-gray-700 leading-relaxed text-lg text-justify">
            Full-stack developer experienced in building and maintaining scalable web applications across Laravel, Vue.js, Next.js, and NestJS, with hands-on expertise in REST/GraphQL API integrations, integrating JWT-based authentication, CI/CD automation, and database optimization—proven through successful contributions to production-grade systems during internships at High6 Creatives and Brice Holding LLC.
          </p>
        </div>
      </div>

      <!-- Work Experience Timeline -->
      <div class="space-y-8 mb-16">
        <!-- Brice Holding LLC Internship -->
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-12 hover:shadow-2xl  transition-all duration-500 relative">
          <div class="flex items-start justify-between mb-8">
            <div class="flex items-center">
              <div class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mr-6 relative shadow-lg">
          <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
            <path d="M8 13l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
              </div>
              <div>
          <h3 class="text-2xl font-bold text-gray-900">Junior Software Developer Intern</h3>
          <p class="text-emerald-600 font-bold text-lg">Brice Holding LLC</p>
          <p class="text-lg mb-3 text-gray-500">August - November 2025 • Hybrid</p>
          <span class="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-xl text-sm font-bold shadow-sm">3 Months Contract</span>
              </div>
            </div>
            <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-sm font-bold shadow-sm">Completed</span>
          </div>
          <p class="text-gray-600 mb-8 leading-relaxed text-lg text-justify">
            Developed and maintained scalable micro-frontend and microservices architectures for a B2B payment processing platform using Next.js and NestJS, integrating REST and GraphQL APIs, integrating JWT-based authentication across multiple subdomains, and managing CI/CD pipelines with Docker and GitHub Actions for production deployment.
          </p>
          <div class="flex flex-wrap gap-4">
            <span class="px-4 py-2 bg-green-100 text-green-800 rounded-xl text-sm font-semibold shadow-sm">Internship</span>
            <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-semibold shadow-sm">Remote</span>
            <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-sm font-semibold shadow-sm">Completed</span>
          </div>
        </div>
        <!-- High6 Internship -->
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-12 hover:shadow-2xl  transition-all duration-500">
          <div class="flex items-start justify-between mb-8">
            <div class="flex items-center">
              <div class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <svg class="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Jr. Laravel Developer Intern</h3>
                <p class="text-emerald-600 font-bold text-lg">High6</p>
                <p class="text-lg mb-3 text-gray-500">April - August 2024 • 5 Months</p>
                <span class="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-xl text-sm font-bold shadow-sm">Internship</span>
              </div>
            </div>
            <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-sm font-bold shadow-sm">Completed</span>
          </div>
          <p class="text-gray-600 mb-8 leading-relaxed text-lg text-justify">
Built an end-to-end subscription management system using Laravel, Vue.js, and Inertia.js by designing normalized MySQL databases, automating email notifications with Laravel Jobs, and delivering full-stack features independently with consistent sprint completion and strong collaboration within the Laravel team.
          </p>
          <div class="flex flex-wrap gap-4">
            <span class="px-4 py-2 bg-green-100 text-green-800 rounded-xl text-sm font-semibold shadow-sm">Internship</span>
            <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-semibold shadow-sm">Laravel</span>
            <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-xl text-sm font-semibold shadow-sm">Vue.js</span>
            <span class="px-4 py-2 bg-orange-100 text-orange-800 rounded-xl text-sm font-semibold shadow-sm">MySQL</span>
            <span class="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-xl text-sm font-semibold shadow-sm">SaaS</span>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-12 mb-16 hover:shadow-2xl transition-all duration-500">
        <h3 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <svg class="w-8 h-8 text-purple-600 mr-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
          Education
        </h3>
        <div class="space-y-10">
          <div class="flex items-start">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
              <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900">Bachelor of Science in Computer Science</h4>
              <p class="text-purple-600 font-bold text-lg mb-3">Visayas State University</p>
              <p class="text-gray-600 text-lg">Graduated: 2024</p>
              <p class="text-gray-600 text-lg mt-4 text-justify">Specialized in intelligent systems, database management and software engineering with focus on modern web technologies and full-stack development.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
              <svg class="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"/>
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v-1z"/>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900">Thesis: <em class="text-gray-700">"HRIS: A Web-Based Human Resource Information System"</em></h4>
              <p class="text-gray-600 text-lg mt-3 text-justify">Developed a comprehensive HR management system featuring employee records, attendance tracking, and payroll management using Laravel and Vue.js.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="w-5 h-5 bg-blue-400 rounded-full mt-2 mr-6 flex-shrink-0 shadow-lg"></div>
            <div class="flex-1">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h4 class="text-xl font-bold text-gray-900 mb-2">Technical Vocational Livelihood – Information Communications Technology</h4>
                  <p class="text-blue-600 font-bold text-lg mb-1">San Juan National High School</p>
                  <p class="text-lg text-gray-500">2019 – 2021</p>
                </div>
                <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-bold shadow-sm">Completed</span>
              </div>
              <div class="bg-gray-50 rounded-2xl p-6">
                <p class="text-gray-600 leading-relaxed text-lg">
                  <strong class="text-gray-900">Academic Achievement:</strong> Graduated with High Honors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Professional Reference -->
      <div class="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
        <h3 class="text-3xl font-bold mb-8 text-gray-900 text-center">Professional Reference</h3>
        <div class="max-w-xl mx-auto text-center">
          <div class="flex flex-col items-center mb-6">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 shadow">
              <svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-900">Jude B. Rola</h4>
            <p class="text-gray-500 text-base font-medium">Thesis Adviser</p>
            <p class="text-gray-500 text-base mb-2">Visayas State University</p>
            <a href="mailto:jude.rola@vsu.edu.ph" class="inline-flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-gray-700 font-medium transition-all duration-200">
              <svg class="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              jude.rola@vsu.edu.ph
            </a>
          </div>
          <p class="text-gray-600 mt-6 text-base">
            Available for employment &mdash; Open to remote, onsite, or hybrid work arrangements
          </p>
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
