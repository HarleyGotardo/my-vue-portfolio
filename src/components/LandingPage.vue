<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6 md:p-8">
    <!-- Profile Section -->
    <div class="text-center mb-12">
      <div class="mb-6">
        <img src="/profile.jpg" alt="Harley S. Gotardo" class="w-40 h-40 mx-auto rounded-full shadow-xl border-4 border-white" />
      </div>
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Harley S. Gotardo</h1>
      <p class="text-xl text-gray-600 mb-8">Full-Stack Web Developer</p>
    </div>

    <!-- Content Sections -->
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- About Section -->
      <section class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 shadow-sm">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <div class="w-8 h-8 bg-blue-500 rounded-lg mr-3 flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
              </svg>
            </div>
            About Me
          </h2>
          <p class="text-gray-700 leading-relaxed">
            Full-stack web developer with almost 2 years of real-world experience building scalable SaaS platforms using Laravel, 
            Vue.js, and RESTful APIs. Skilled in database optimization, UI/UX design, and backend integration. Passionate about 
            leveraging modern frameworks and AI-assisted tools to solve real-world problems and drive product innovation. Looking 
            to contribute to a collaborative remote team where growth and impact are valued.
          </p>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <div class="w-8 h-8 bg-green-500 rounded-lg mr-3 flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          Skills & Expertise
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 hover:scale-105 transition-transform duration-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <span class="w-6 h-6 bg-blue-500 rounded-full mr-2 flex items-center justify-center text-white text-xs font-bold">F</span>
              Frontend
            </h3>
            <p class="text-gray-600">Vue.js, Inertia.js, HTML5, CSS3, JavaScript, Tailwind CSS, Next.js</p>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 hover:scale-105 transition-transform duration-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <span class="w-6 h-6 bg-green-500 rounded-full mr-2 flex items-center justify-center text-white text-xs font-bold">B</span>
              Backend
            </h3>
            <p class="text-gray-600">Laravel, Ruby on Rails, RESTful APIs, Supabase, Firebase, Python</p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-500 hover:scale-105 transition-transform duration-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <span class="w-6 h-6 bg-purple-500 rounded-full mr-2 flex items-center justify-center text-white text-xs font-bold">D</span>
              Database
            </h3>
            <p class="text-gray-600">PostgreSQL, SQLite, MySQL, Database Normalization (3NF)</p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <div class="w-8 h-8 bg-indigo-500 rounded-lg mr-3 flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
          </div>
          Get In Touch
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div class="flex items-center">
              <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Email</h3>
                <p class="text-gray-600">harleygothards@gmail.com</p>
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Phone</h3>
                <p class="text-gray-600">+63 960 662 3222</p>
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Location</h3>
                <p class="text-gray-600">Southern Leyte, Philippines</p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Let's Connect!</h3>
            <p class="text-gray-600 mb-4">
              Available for employment and open to remote and hybrid work arrangements. 
              Feel free to reach out if you'd like to work together!
            </p>
            <div class="flex space-x-4">
              <a href="https://www.linkedin.com/in/harley-gotardo-4bbbaa2aa/" target="_blank" class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"/>
                </svg>
              </a>
              <a href="https://github.com/HarleyGotardo" target="_blank" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors duration-200">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Landing page component
</script>

<style scoped>
/* All styling handled by Tailwind CSS */
</style>
