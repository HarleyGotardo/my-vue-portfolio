<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div
        class="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
      ></div>
      <div
        class="absolute top-40 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"
      ></div>
      <div
        class="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"
      ></div>
    </div>

    <!-- Header Section -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
      <div
        class="bg-white border border-gray-200 rounded-3xl shadow-xl p-12 mb-16 hover:shadow-2xl transition-all duration-500"
      >
        <div class="flex items-center mb-8">
          <div
            class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
          >
            <svg
              class="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
              />
            </svg>
          </div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-2">
              Featured Projects
            </h1>
            <p class="text-gray-600 text-lg font-medium">
              Showcasing my development work and technical achievements
            </p>
          </div>
        </div>

        <div
          class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-l-4 border-purple-500 shadow-sm"
        >
          <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg
              class="w-6 h-6 text-purple-600 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Full-Stack Development Portfolio
          </h2>
          <p class="text-gray-700 leading-relaxed text-lg text-justify">
            From university management systems to forest monitoring solutions,
            these projects showcase my expertise in Vue.js, Laravel, database
            design, and modern web development practices. Each project
            demonstrates real-world problem-solving and technical innovation.
          </p>
        </div>
      </div>

      <!-- Featured Projects -->
      <div class="space-y-10">
        <!-- Forest Product Collectors Monitoring System -->
        <div
          class="bg-white border border-gray-200 rounded-3xl shadow-xl p-12 hover:shadow-2xl  transition-all duration-500"
        >
          <div class="flex items-start justify-between mb-8">
            <div class="flex items-center">
              <div
                class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
              >
                <svg
                  class="w-8 h-8 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">
                  Forest Product Collectors Monitoring System
                </h3>
                <p class="text-gray-500 font-medium mb-3">
                  Thesis Project • Dec 2024 - May 2025
                </p>
                <div class="flex flex-wrap gap-2">
                  <a
                    href="https://github.com/HarleyGotardo/forest-products-collectors-monitoring-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl transition-all duration-200"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                    View on GitHub
                  </a>
                  <a
                    href="https://fpms-three.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl transition-all duration-200"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Visit Website
                  </a>
                  <a
                    href="https://drive.google.com/file/d/133bnoBTW3LTIlJqxZmYgNS_Z6x_haecp/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl transition-all duration-200"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    View Documentation
                  </a>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-end">
              <span
                class="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-xl text-sm font-semibold mb-2 shadow-sm"
                >Lead Developer</span
              >
              <div class="flex items-center">
                <div
                  class="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"
                ></div>
                <span class="text-xs text-emerald-600 font-medium"
                  >Active Deployment</span
                >
              </div>
            </div>
          </div>
          <!-- Image Carousel -->
          <div
            class="relative mb-8 bg-slate-100 rounded-2xl overflow-hidden shadow-inner"
          >
            <div
              class="relative w-full"
              style="padding-bottom: 50%; /* 2:1 Aspect Ratio */"
            >
              <div
                v-for="(image, index) in forestProjectImages"
                :key="index"
                :class="['absolute inset-0 transition-opacity duration-1000 cursor-pointer group', currentImageIndex === index ? 'opacity-100' : 'opacity-0']"
                @click="openImageViewer(forestProjectImages, index)"
              >
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="w-full h-full object-cover"
                />
                <!-- Hover overlay -->
                <div
                  class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <div
                    class="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300"
                  >
                    <svg
                      class="w-8 h-8 text-slate-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                    <p class="text-sm font-semibold text-slate-800 mt-2">
                      Click to view
                    </p>
                  </div>
                </div>
              </div>

              <!-- Navigation dots -->
              <div
                class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3"
              >
                <button
                  v-for="(image, index) in forestProjectImages"
                  :key="index"
                  @click="currentImageIndex = index"
                  :class="['w-3 h-3 rounded-full transition-all duration-300 shadow-md',
                    currentImageIndex === index ? 'bg-white scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/75']"
                ></button>
              </div>

              <!-- Navigation arrows -->
              <button
                @click="previousImage"
                class="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-2xl transition-all duration-300 backdrop-blur-sm group"
              >
                <svg
                  class="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                @click="nextImage"
                class="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-2xl transition-all duration-300 backdrop-blur-sm group"
              >
                <svg
                  class="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <p class="text-slate-600 mb-8 leading-relaxed text-lg text-justify">
            Enterprise-grade web-based monitoring system for VSU's Forest
            Protection Unit, digitizing forest product collection management
            with interactive GIS mapping, automated workflows, and comprehensive
            analytics. ISO/IEC 25010:2023 compliant with 4.64/5 excellence
            rating.
          </p>

          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div
              class="bg-emerald-50 rounded-2xl p-6 border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 class="font-bold text-slate-900 mb-4 text-lg">
                Core System Features
              </h4>
              <ul class="text-sm text-slate-600 space-y-3">
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span
                    >Multi-role authentication (Admin, Ranger, Collector)</span
                  >
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Interactive GIS mapping with Leaflet.js</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Real-time inventory management</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Digital collection request workflow</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Automated permit generation (PDF)</span>
                </li>
              </ul>
            </div>
            <div
              class="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 class="font-bold text-slate-900 mb-4 text-lg">
                Data & Analytics
              </h4>
              <ul class="text-sm text-slate-600 space-y-3">
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Normalized database design (3NF)</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Comprehensive sales dashboard</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Revenue tracking with visual charts</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Low stock alerts & notifications</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Audit trails with user tracking</span>
                </li>
              </ul>
            </div>
            <div
              class="bg-purple-50 rounded-2xl p-6 border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 class="font-bold text-slate-900 mb-4 text-lg">
                Technical Excellence
              </h4>
              <ul class="text-sm text-slate-600 space-y-3">
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Row-level security (RLS) implementation</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Mobile-responsive design</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Real-time data synchronization</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Cross-browser compatibility</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Cloud deployment with Vercel</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div
              class="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4
                class="font-bold text-slate-900 mb-4 text-lg flex items-center"
              >
                <svg
                  class="w-6 h-6 text-emerald-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                System Impact & Results
              </h4>
              <ul class="text-sm text-slate-600 space-y-3">
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span>Replaced manual Microsoft Word-based records</span>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span>Streamlined approval workflows by 70%</span>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span>Enhanced data accuracy and accessibility</span>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span>Copyright protected by National Library</span>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span>Active deployment at VSU Forest Protection Unit</span>
                </li>
              </ul>
            </div>
            <div
              class="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4
                class="font-bold text-slate-900 mb-4 text-lg flex items-center"
              >
                <svg
                  class="w-6 h-6 text-blue-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                Evaluation & Quality
              </h4>
              <ul class="text-sm text-slate-600 space-y-3">
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span>ISO/IEC 25010:2023 compliant system</span>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span>Overall rating: 4.64/5.0 (Excellent)</span>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span>30-participant evaluation study</span>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span>Functional Suitability: 4.73/5.0</span>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span>Security & Reliability: 4.77/5.0</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-wrap gap-3">
            <span
              class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
              >Vue.js</span
            >
            <span
              class="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
              >Supabase</span
            >
            <span
              class="px-4 py-2 bg-purple-100 text-purple-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
              >Tailwind CSS</span
            >
            <span
              class="px-4 py-2 bg-orange-100 text-orange-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
              >Leaflet.js</span
            >
            <span
              class="px-4 py-2 bg-slate-100 text-slate-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
              >Vercel</span
            >
          </div>
        </div>

        <!-- Subscription Tracking System -->
        <SubscriptionTrackingSystem @open-image-viewer="openImageViewer" />

        <div
          class="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-10 border border-white/20 hover:shadow-2xl"
        >
          <div class="flex items-start justify-between mb-8">
            <div class="flex items-center">
              <div
                class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
              >
                <svg
                  class="w-8 h-8 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M8 13l3 3 5-5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-slate-900 mb-2">
                  Human Resource Information System (HRIS)
                </h3>
                <p class="text-slate-500 font-medium mb-3">
                  Client Project • 2025
                </p>
                <a
                  href="https://github.com/totbenz/personal-info-management-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl transition-all duration-200"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  View Repository
                </a>
              </div>
            </div>
            <div class="flex flex-col items-end">
              <span
                class="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-xl text-sm font-semibold mb-2 shadow-sm"
                >Laravel Developer</span
              >
              <div class="flex items-center">
                <div
                  class="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"
                ></div>
                <span class="text-xs text-emerald-600 font-medium"
                  >Mentorship Active</span
                >
              </div>
            </div>
          </div>

          <!-- HRIS Image Carousel -->
          <div
            class="relative mb-8 bg-slate-100 rounded-2xl overflow-hidden shadow-inner"
          >
            <div
              class="relative w-full"
              style="padding-bottom: 50%; /* 2:1 Aspect Ratio */"
            >
              <div
                v-for="(image, index) in hrisImages"
                :key="index"
                :class="['absolute inset-0 transition-opacity duration-1000 cursor-pointer group', currentHrisImageIndex === index ? 'opacity-100' : 'opacity-0']"
                @click="openImageViewer(hrisImages, index)"
              >
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="w-full h-full object-cover"
                />
                <!-- Hover overlay -->
                <div
                  class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <div
                    class="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300"
                  >
                    <svg
                      class="w-8 h-8 text-slate-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                    <p class="text-sm font-semibold text-slate-800 mt-2">
                      Click to view
                    </p>
                  </div>
                </div>
              </div>

              <!-- Navigation dots -->
              <div
                class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3"
              >
                <button
                  v-for="(image, index) in hrisImages"
                  :key="index"
                  @click="currentHrisImageIndex = index"
                  :class="['w-3 h-3 rounded-full transition-all duration-300 shadow-md',
            currentHrisImageIndex === index ? 'bg-white scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/75']"
                ></button>
              </div>

              <!-- Navigation arrows -->
              <button
                @click="previousHrisImage"
                class="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-2xl transition-all duration-300 backdrop-blur-sm group"
              >
                <svg
                  class="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                @click="nextHrisImage"
                class="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-2xl transition-all duration-300 backdrop-blur-sm group"
              >
                <svg
                  class="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <p class="text-gray-600 mb-8 leading-relaxed text-lg text-justify">
            Mentoring master's degree student in developing Human Resource
            Information System for MIT capstone project. Also developed client's
            MIT Capstone: A comprehensive web-based HRIS built with Laravel for
            managing educational personnel, schools, and HR processes with
            secure role-based access for teachers, school heads, and
            administrators.
          </p>

          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div
              class="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4
                class="font-bold text-gray-900 mb-4 text-lg flex items-center"
              >
                <svg
                  class="w-6 h-6 text-blue-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                  <path
                    d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                  />
                </svg>
                Core Responsibilities
              </h4>
              <ul class="text-sm text-gray-600 space-y-3">
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span
                    >Implemented role-based dashboards and authentication</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span
                    >Developed CRUD for personnel and school management</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span
                    >Designed approval workflows for leave, CTO, and service
                    credits</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span
                    >Integrated PDF export and document handling modules</span
                  >
                </li>
              </ul>
            </div>
            <div
              class="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4
                class="font-bold text-gray-900 mb-4 text-lg flex items-center"
              >
                <svg
                  class="w-6 h-6 text-purple-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                Key Features
              </h4>
              <ul class="text-sm text-gray-600 space-y-3">
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span>Leave & CTO request tracking with notifications</span>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span
                    >Digital service record generation and history
                    tracking</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span>Salary grade and step management with exports</span>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span>Reports and analytics for personnel and schools</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <span
              class="px-4 py-2 bg-slate-100 text-slate-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
              >Laravel</span
            >
            <span
              class="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
              >Livewire</span
            >
            <span
              class="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
              >RESTful API</span
            >
            <span
              class="px-4 py-2 bg-purple-100 text-purple-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
              >Tailwind CSS</span
            >
            <span
              class="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
              >MySQL</span
            >
          </div>
        </div>

        <!-- Additional Projects Grid -->
        <div class="grid md:grid-cols-1 gap-8">
          <!-- E-commerce Platform -->
            <div
            class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl  transition-all duration-500"
            >
            <div class="flex items-center mb-6">
              <div
              class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
              >
              <svg
                class="w-6 h-6 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
                />
              </svg>
              </div>
              <div>
              <h3 class="text-xl font-bold text-gray-900">Quick Stock</h3>
              <p class="text-sm text-gray-500 font-medium">
                Mobile Inventory & Sales App • 2024
              </p>
              </div>
            </div>
            <p class="text-gray-600 mb-6 leading-relaxed text-justify">
              Android-based inventory and sales management system built for
              sari-sari store owners. Features offline functionality, real-time
              stock updates, and intuitive sales reporting dashboards. Led team
              development using Flutter and SQLite.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
              class="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-xs font-semibold"
              >Flutter</span
              >
              <span
              class="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-xs font-semibold"
              >SQLite</span
              >
              <span
              class="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg text-xs font-semibold"
              >Android</span
              >
              <span
              class="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-lg text-xs font-semibold"
              >Team Lead</span
              >
            </div>
            <a
              href="https://github.com/HarleyGotardo/squaremind-apk-releases/tree/main/FInal%20SM.030.002"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl transition-all duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Repository
            </a>
            </div>

          <!-- Task Management System -->
          <div
            class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl  transition-all duration-500"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
              >
                <svg
                  class="w-6 h-6 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">
                  Fitness Tracking Web App
                </h3>
                <p class="text-sm text-gray-500 font-medium">
                  Freelance Project • 2024
                </p>
              </div>
            </div>

            <!-- Fitness Tracking Image Carousel -->
            <div
              class="relative mb-6 bg-slate-100 rounded-2xl overflow-hidden shadow-inner cursor-pointer"
              @click="openImageViewer(fitnessImages, currentFitnessImageIndex)"
            >
              <div
                class="relative w-full"
                style="padding-bottom: 56.25%; /* 16:9 Aspect Ratio */"
              >
                <img
                  :src="fitnessImages[currentFitnessImageIndex].src"
                  :alt="fitnessImages[currentFitnessImageIndex].alt"
                  class="absolute inset-0 w-full h-full object-cover  transition-transform duration-500"
                />
              </div>

              <!-- Navigation dots -->
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button
                  v-for="(_, index) in fitnessImages"
                  :key="index"
                  @click.stop="currentFitnessImageIndex = index"
                  :class="[
                    'w-2 h-2 rounded-full transition-all duration-300',
                    currentFitnessImageIndex === index
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  ]"
                ></button>
              </div>

              <!-- Navigation arrows -->
              <button
                @click.stop="previousFitnessImage"
                class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                @click.stop="nextFitnessImage"
                class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <p class="text-gray-600 mb-6 leading-relaxed text-justify">
              Complete fitness management solution featuring QR-based attendance
              tracking, nutrition guidance with Spoonacular API integration,
              BMI-based recommendations, and comprehensive membership management
              system.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-xs font-semibold"
                >Vue.js</span
              >
              <span
                class="px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-semibold"
                >Supabase</span
              >
              <span
                class="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-lg text-xs font-semibold"
                >Tailwind CSS</span
              >
              <span
                class="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-xs font-semibold"
                >Spoonacular API</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ImageViewer Component -->
    <ImageViewer
      :is-open="isImageViewerOpen"
      :images="currentViewerImages"
      :initial-index="currentViewerIndex"
      @close="closeImageViewer"
    />
  </div>
</template>

<script setup>
defineOptions({ name: 'PortfolioProjects' })
import { ref, onMounted, onUnmounted } from 'vue'
import SubscriptionTrackingSystem from './SubscriptionTrackingSystem.vue'
import ImageViewer from './ImageViewer.vue'

// Fitness Tracking Images Carousel
const currentFitnessImageIndex = ref(0)
const fitnessImages = ref([
  {
    src: '/fiber-muscle/landing.png',
    alt: 'Fitness App Landing Page'
  },
  {
    src: '/fiber-muscle/dashboard.png',
    alt: 'Member Dashboard'
  },
  {
    src: '/fiber-muscle/attendance.png',
    alt: 'QR-based Attendance Tracking'
  },
  {
    src: '/fiber-muscle/nutrition.png',
    alt: 'Nutrition Guidance Interface'
  }
])

let fitnessCarouselInterval = null

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

// HRIS Images Carousel
const currentHrisImageIndex = ref(0)
const hrisImages = ref([
  {
    src: '/hris/dashboard.png',
    alt: 'HRIS Dashboard Interface'
  },
  {
    src: '/hris/login.png',
    alt: 'HRIS Login Page'
  },
  {
    src: '/hris/personnels.png',
    alt: 'Personnel Management System'
  },
  {
    src: '/hris/rewards.png',
    alt: 'Rewards and Recognition System'
  },
  {
    src: '/hris/salarygrades.png',
    alt: 'Salary Grade Management'
  },
  {
    src: '/hris/schools.png',
    alt: 'Schools Management Interface'
  },
  {
    src: '/hris/viewpersonnel.png',
    alt: 'Personnel Details View'
  }
])

let carouselInterval = null
let hrisCarouselInterval = null

// ImageViewer state
const isImageViewerOpen = ref(false)
const currentViewerImages = ref([])
const currentViewerIndex = ref(0)

// ImageViewer methods
const openImageViewer = (images, startIndex = 0) => {
  currentViewerImages.value = images
  currentViewerIndex.value = startIndex
  isImageViewerOpen.value = true
  // Stop carousel when viewer is open
  stopCarousel()
  stopHrisCarousel()
}

const closeImageViewer = () => {
  isImageViewerOpen.value = false
  // Restart carousel when viewer is closed
  startCarousel()
  startHrisCarousel()
}

// Carousel navigation methods
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % forestProjectImages.value.length
}

const previousImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0
    ? forestProjectImages.value.length - 1
    : currentImageIndex.value - 1
}

// HRIS Carousel navigation methods
const nextHrisImage = () => {
  currentHrisImageIndex.value = (currentHrisImageIndex.value + 1) % hrisImages.value.length
}

const previousHrisImage = () => {
  currentHrisImageIndex.value = currentHrisImageIndex.value === 0
    ? hrisImages.value.length - 1
    : currentHrisImageIndex.value - 1
}

// Fitness Tracking Carousel navigation methods
const nextFitnessImage = () => {
  currentFitnessImageIndex.value = (currentFitnessImageIndex.value + 1) % fitnessImages.value.length
}

const previousFitnessImage = () => {
  currentFitnessImageIndex.value = currentFitnessImageIndex.value === 0
    ? fitnessImages.value.length - 1
    : currentFitnessImageIndex.value - 1
}

const startFitnessCarousel = () => {
  fitnessCarouselInterval = setInterval(() => {
    nextFitnessImage()
  }, 2000) // Change image every 2 seconds
}

const stopFitnessCarousel = () => {
  if (fitnessCarouselInterval) {
    clearInterval(fitnessCarouselInterval)
    fitnessCarouselInterval = null
  }
}

// Auto-advance carousel
const startCarousel = () => {
  carouselInterval = setInterval(() => {
    nextImage()
  }, 2000) // Change image every 2 seconds
}

const startHrisCarousel = () => {
  hrisCarouselInterval = setInterval(() => {
    nextHrisImage()
  }, 2000) // Change image every 2 seconds
}

const stopCarousel = () => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
    carouselInterval = null
  }
}

const stopHrisCarousel = () => {
  if (hrisCarouselInterval) {
    clearInterval(hrisCarouselInterval)
    hrisCarouselInterval = null
  }
}

// Lifecycle hooks
onMounted(() => {
  startCarousel()
  startHrisCarousel()
  startFitnessCarousel()
})

onUnmounted(() => {
  stopCarousel()
  stopHrisCarousel()
  stopFitnessCarousel()
})
</script>

<style scoped>
/* All styling handled by Tailwind CSS */
</style>
