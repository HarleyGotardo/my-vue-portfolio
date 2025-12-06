<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div class="absolute top-40 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative z-10 min-h-screen flex items-center">
      <div class="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div class="grid lg:grid-cols-2 gap-12 items-center mt-6">
          <!-- Text Content -->
          <div class="text-center lg:text-left space-y-8">
            <div class="space-y-4">
              <div class="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2 text-green-700 text-sm font-medium">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for work and freelance projects
              </div>
              <h1 class="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Crafting
                <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Digital</span>
                <br>
                <span class="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> Experiences</span>
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed max-w-2xl text-justify">
                Full-stack developer passionate about building scalable web applications that solve real-world problems. Specializing in Vue.js, Laravel, and modern JavaScript ecosystems.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <router-link to="/projects" class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl  transition-all duration-300 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                View My Work
              </router-link>
              <router-link to="/contact" class="bg-white border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Get In Touch
              </router-link>
            </div>

            <!-- Social Links -->
            <div class="flex items-center justify-center lg:justify-start space-x-4">
              <a href="https://www.linkedin.com/in/harley-gotardo-6a2282295/" target="_blank" class="w-12 h-12 bg-gray-100 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-300">
                <svg class="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"/>
                </svg>
              </a>
              <a href="https://github.com/harleygotardo" target="_blank" class="w-12 h-12 bg-gray-100 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-300">
                <svg class="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Profile Image with Animation -->
          <div class="relative">
            <div class="relative w-80 h-80 mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <div class="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img src="/profile.jpg" alt="Harley S. Gotardo" class="w-full h-full object-cover  transition-transform duration-500" />
              </div>
              <!-- Floating badges -->
              <div class="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg animate-bounce">
                Computer Science Graduate
              </div>
              <div class="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg">
                Harley S. Gotardo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Showcase -->
    <section class="relative z-10 py-20">
      <div class="max-w-7xl mx-auto px-6 md:px-8">
      <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">Tech Stack</h2>
      <p class="text-xl text-gray-600">Technologies I work with daily</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg  transition-all duration-300 text-center">
      <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" class="w-12 h-12" />
      </div>
      <p class="text-gray-900 font-semibold">Vue.js</p>
      </div>
      <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg  transition-all duration-300 text-center">
      <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="Laravel (PHP)" class="w-12 h-12" />
      </div>
      <p class="text-gray-900 font-semibold">Laravel</p>
      </div>
      <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg  transition-all duration-300 text-center">
      <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="w-12 h-12" />
      </div>
      <p class="text-gray-900 font-semibold">JavaScript</p>
      </div>
      <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg  transition-all duration-300 text-center">
      <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <img src="/tailwindcss-mark.d52e9897.svg" alt="Tailwind CSS" class="w-12 h-12" />
      </div>
      <p class="text-gray-900 font-semibold">Tailwind</p>
      </div>
      <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg  transition-all duration-300 text-center">
      <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" class="w-12 h-12" />
      </div>
      <p class="text-gray-900 font-semibold">MySQL</p>
      </div>
      <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg  transition-all duration-300 text-center">
      <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="REST APIs" class="w-12 h-12 rounded-full bg-gray-100 p-2" />
      </div>
      <p class="text-gray-900 font-semibold">REST APIs</p>
      </div>
      </div>
      </div>
    </section>

    <!-- Featured Projects Preview -->
    <section class="relative z-10 py-20">
      <div class="max-w-7xl mx-auto px-6 md:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p class="text-xl text-gray-600">Showcasing my best work</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl  transition-all duration-500 group">
            <div class="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <svg class="w-20 h-20 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Forest Monitoring System</h3>
              <p class="text-gray-600 mb-4">Enterprise-grade system with GIS mapping and automated workflows</p>
              <router-link to="/projects" class="text-purple-600 hover:text-purple-700 font-semibold flex items-center">
                Learn More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl  transition-all duration-500 group">
            <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <svg class="w-20 h-20 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Subscription Tracker</h3>
              <p class="text-gray-600 mb-4">Complete subscription management with automated notifications</p>
              <router-link to="/projects" class="text-purple-600 hover:text-purple-700 font-semibold flex items-center">
                Learn More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl  transition-all duration-500 group">
            <div class="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <svg class="w-20 h-20 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">HR Information System</h3>
              <p class="text-gray-600 mb-4">Comprehensive HR management with role-based access</p>
              <router-link to="/projects" class="text-purple-600 hover:text-purple-700 font-semibold flex items-center">
                Learn More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link to="/projects" class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl  transition-all duration-300 inline-flex items-center">
            View All Projects
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="relative z-10 py-20">
      <div class="max-w-4xl mx-auto px-6 md:px-8 text-center">
      <div class="rounded-3xl p-12 shadow-2xl bg-white border border-gray-200">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Ready to Work Together?</h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        I'm always excited to take on new challenges and collaborate on innovative projects. Let's create something amazing together!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link to="/contact" class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg  transition-all duration-300 inline-flex items-center justify-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Start a Conversation
        </router-link>
        <a href="https://www.linkedin.com/in/harley-gotardo-6a2282295/" target="_blank" class="bg-gray-100 border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200  transition-all duration-300 inline-flex items-center justify-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"/>
          </svg>
          Connect on LinkedIn
        </a>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Landing page component
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
