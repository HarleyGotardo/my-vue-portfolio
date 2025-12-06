<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div class="absolute top-40 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
    </div>

    <!-- Header Section -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
      <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-12 mb-16 hover:shadow-2xl transition-all duration-500">
        <div class="flex items-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-2">Academic Experience</h1>
            <p class="text-gray-600 text-lg font-medium">Educational journey and academic achievements</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-l-4 border-purple-500 shadow-sm">
          <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            Academic Foundation
          </h2>
          <p class="text-gray-700 leading-relaxed text-lg text-justify">
            My academic journey has provided me with a strong foundation in Computer Science, encompassing both theoretical
            knowledge and practical application through various projects and research initiatives.
          </p>
        </div>
      </div>

      <!-- Academic Achievements Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Computer Science Foundation -->
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl  transition-all duration-500">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
              <svg class="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Programming & Development</h3>
          </div>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Acquired foundational knowledge in Computer Science</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Conducted code testing in C#</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Familiar with Software Engineering concepts</span>
            </li>
          </ul>
        </div>

        <!-- Project Development -->
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl  transition-all duration-500">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
              <svg class="w-7 h-7 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Academic Projects</h3>
          </div>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Collaborated on 'Navi' project at VSU</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Developed 'Cash Compass' Web Application</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Developed simple expert systems</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Built e-commerce web app using HTML, CSS, JS and Firebase</span>
            </li>
          </ul>
        </div>

        <!-- Research & AI -->
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl  transition-all duration-500">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
              <svg class="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Research & AI</h3>
          </div>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Developed 'Fuzzy Logic-Based Emotion Recognition from Eye Tracking' Project</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Familiar with visual computing/computer vision concepts</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Collected images of cassava leaves for variety classification</span>
            </li>
          </ul>
        </div>

        <!-- Mobile Development -->
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl  transition-all duration-500">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
              <svg class="w-7 h-7 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM8 4h4v10H8V4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Mobile Development</h3>
          </div>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Developed 'Android-Based Sari-Sari Store Sales and Inventory Management System'</span>
            </li>
          </ul>
        </div>

        <!-- Leadership & Management -->
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl  transition-all duration-500">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
              <svg class="w-7 h-7 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Leadership Experience</h3>
          </div>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Experience as Project Manager in Software Engineering Project</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Served as 2nd-year representative in Computer Science Student Society</span>
            </li>
          </ul>
        </div>

        <!-- Technical Foundation -->
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl  transition-all duration-500">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
              <svg class="w-7 h-7 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"/>
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v-1z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Technical Foundation</h3>
          </div>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Two years of senior high school experience majoring in ICT Strand</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Acquired foundational knowledge in networking concepts</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Computer system unit knowledge</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Achievement Gallery -->
      <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-12 mb-16 hover:shadow-2xl transition-all duration-500">
        <h3 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <svg class="w-8 h-8 text-purple-600 mr-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
          </svg>
          Academic Achievement Gallery
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Certificate Copyright -->
          <div class="group cursor-pointer" @click="openImageViewer(0)">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ">
              <img src="/achievements/certificate-copyright.jpg" alt="Certificate Copyright" class="w-full h-56 object-cover group- transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-sm font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <h4 class="font-bold text-gray-900 text-lg mb-2">Copyright Protection Certificate</h4>
              <p class="text-gray-600 leading-relaxed text-justify">A milestone reached! I received a certificate for successfully copyrighting my thesis system, the Forest Product Collectors Monitoring System, which is a comprehensive web-based monitoring system for the VSU Forest Protection Unit. It's a small document, but a massive achievement, as it symbolizes the value and significance of my work.</p>
            </div>
          </div>

          <!-- Diploma -->
          <div class="group cursor-pointer" @click="openImageViewer(1)">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ">
              <img src="/achievements/diploma.jpg" alt="Diploma" class="w-full h-56 object-cover group- transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-sm font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <h4 class="font-bold text-gray-900 text-lg mb-2">Holding My Diploma on Stage</h4>
              <p class="text-gray-600 leading-relaxed text-justify">One of the greatest moments of my life! This photo captures the moment when I proudly held my diploma on stage during my graduation ceremony. It's a feeling of accomplishment and a culmination of all the hard work and sacrifices I made throughout my academic journey. I'm grateful to have shared this moment with my loved ones and friends.</p>
            </div>
          </div>

          <!-- OJT Presentation -->
          <div class="group cursor-pointer" @click="openImageViewer(2)">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ">
              <img src="/achievements/ojt-present.jpg" alt="OJT Presentation" class="w-full h-56 object-cover group- transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-sm font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <h4 class="font-bold text-gray-900 text-lg mb-2">Conquering Public Speaking</h4>
              <p class="text-gray-600 leading-relaxed text-justify">I took a leap of faith and shared my internship experience with fellow students during the VSU Faculty of Engineering and VSU Faculty of Computing Student Internship Program Pre-Departure Orientation. It was a challenging but empowering experience, proving to myself that I can overcome my fears and effectively communicate my ideas to a wider audience.</p>
            </div>
          </div>

          <!-- Outstanding Achievement -->
          <div class="group cursor-pointer" @click="openImageViewer(3)">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ">
              <img src="/achievements/outstanding.jpg" alt="Outstanding Achievement" class="w-full h-56 object-cover group- transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-sm font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <h4 class="font-bold text-gray-900 text-lg mb-2">From Zero to Hero</h4>
              <p class="text-gray-600 leading-relaxed text-justify">I began my internship with zero full-stack development experience, but thanks to High6's guidance and patience, I learned, stumbled, and eventually found my footing. Being recognized as Outstanding Computer Science Trainee feels surreal. I'm grateful for every lesson learned along the way, and I look forward to continuing my growth as a developer.</p>
            </div>
          </div>

          <!-- Thesis Defense -->
          <div class="group cursor-pointer" @click="openImageViewer(4)">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ">
              <img src="/achievements/thesis-defense.jpg" alt="Thesis Defense" class="w-full h-56 object-cover group- transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-sm font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <h4 class="font-bold text-gray-900 text-lg mb-2">Thesis Defense</h4>
              <p class="text-gray-600 leading-relaxed text-justify">
                I conceptualized, designed, developed, and defended my undergraduate thesis from start to finish. It was a challenging but rewarding experience that taught me the value of perseverance, time management, and self-motivation. I'm grateful for God's guidance throughout the process and proud to have successfully defended my work. A milestone I'll always treasure.
              </p>
            </div>
          </div>

          <!-- Turn Over Ceremony -->
          <div class="group cursor-pointer" @click="openImageViewer(5)">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ">
              <img src="/achievements/turn-over.jpg" alt="Turn Over Ceremony" class="w-full h-56 object-cover group- transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-sm font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <h4 class="font-bold text-gray-900 text-lg mb-2">Turn Over Ceremony</h4>
              <p class="text-gray-600 leading-relaxed text-justify">
                What started as an academic requirement evolved into a real-world solution. My system, built for VSU's forest product collectors, is now serving its intended purpose. It's fulfilling to see learning make a tangible impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Completed Projects Summary -->
      <div class="bg-white rounded-3xl p-12 text-gray-900 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
        <h3 class="text-3xl font-bold mb-6">Academic Journey Complete</h3>
        <p class="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
          My academic experience has provided me with a solid foundation in computer science, practical project development skills,
          and leadership experience that I now apply in my professional career.
        </p>
        <div class="grid md:grid-cols-3 gap-8 mt-10">
          <div class="text-center">
        <div class="text-4xl font-bold text-purple-600 mb-3">15+</div>
        <div class="text-gray-700 text-lg font-medium">Academic Projects</div>
          </div>
          <div class="text-center">
        <div class="text-4xl font-bold text-purple-600 mb-3">4</div>
        <div class="text-gray-700 text-lg font-medium">Years of Study</div>
          </div>
          <div class="text-center">
        <div class="text-4xl font-bold text-purple-600 mb-3">6+</div>
        <div class="text-gray-700 text-lg font-medium">Achievements</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Viewer Component -->
    <ImageViewer
      :is-open="isImageViewerOpen"
      :images="achievementImages"
      :initial-index="selectedImageIndex"
      @close="closeImageViewer"
    />
  </div>
</template>

<script setup>
import ImageViewer from './ImageViewer.vue'
import { ref } from 'vue'

// Image viewer state
const isImageViewerOpen = ref(false)
const selectedImageIndex = ref(0)

// Achievement images data
const achievementImages = ref([
  {
    src: '/achievements/certificate-copyright.jpg',
    alt: 'Certificate Copyright',
    title: 'Copyright Protection Certificate',
    description: 'A milestone reached! I received a certificate for successfully copyrighting my thesis system, the Forest Product Collectors Monitoring System.'
  },
  {
    src: '/achievements/diploma.jpg',
    alt: 'Diploma',
    title: 'Holding My Diploma on Stage',
    description: 'One of the greatest moments of my life! This photo captures the moment when I proudly held my diploma on stage during my graduation ceremony.'
  },
  {
    src: '/achievements/ojt-present.jpg',
    alt: 'OJT Presentation',
    title: 'Conquering Public Speaking',
    description: 'I took a leap of faith and shared my internship experience with fellow students during the VSU Faculty of Computing Student Internship Program.'
  },
  {
    src: '/achievements/outstanding.jpg',
    alt: 'Outstanding Achievement',
    title: 'From Zero to Hero',
    description: 'I began my internship with zero full-stack development experience, but thanks to High6\'s guidance and patience, I learned and grew.'
  },
  {
    src: '/achievements/thesis-defense.jpg',
    alt: 'Thesis Defense',
    title: 'Thesis Defense',
    description: 'I conceptualized, designed, developed, and defended my undergraduate thesis from start to finish. It was a challenging but rewarding experience.'
  },
  {
    src: '/achievements/turn-over.jpg',
    alt: 'Turn Over Ceremony',
    title: 'Turn Over Ceremony',
    description: 'What started as an academic requirement evolved into a real-world solution. My system is now serving its intended purpose.'
  }
])

// Open image viewer
const openImageViewer = (index) => {
  selectedImageIndex.value = index
  isImageViewerOpen.value = true
}

// Close image viewer
const closeImageViewer = () => {
  isImageViewerOpen.value = false
}
</script>
