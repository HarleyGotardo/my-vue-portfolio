<!-- eslint-disable vue/multi-word-component-names -->
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
              <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zM6 7a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-2">Certificates & Awards</h1>
            <p class="text-gray-600 text-lg font-medium">Professional certifications and recognition achievements</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-l-4 border-purple-500 shadow-sm">
          <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Professional Recognition
          </h2>
          <p class="text-gray-700 leading-relaxed text-lg">
            A collection of certificates and awards that represent my professional achievements, academic excellence,
            and recognition in various fields of computer science and software development.
          </p>
        </div>
      </div>

      <!-- Certificates Gallery -->
      <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-12 mb-16 hover:shadow-2xl transition-all duration-500">
        <h3 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <svg class="w-8 h-8 text-purple-600 mr-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Certificate Collection
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Copyright Certificate -->
          <div class="group cursor-pointer" @click="openImageViewer(0)">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img src="/certs/copyright.jpg" alt="Copyright Certificate" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-sm font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <div class="flex items-center mb-3">
                <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <span class="text-xs text-purple-600 font-bold uppercase tracking-wide">Intellectual Property</span>
              </div>
              <h4 class="font-bold text-gray-900 text-xl mb-3">Copyright Protection Certificate</h4>
              <p class="text-gray-600 leading-relaxed">I am grateful to have been awarded a Certificate of Appreciation from Visayas State University for the successful submission of a copyright application for the Web-Based Forest Product Collectors Monitoring System. This recognition reflects my dedication to fostering innovation and contributing to intellectual property development in the field of forest management technology.</p>
            </div>
          </div>

          <!-- OJT Certificate -->
          <div class="group cursor-pointer" @click="openImageViewer(1)">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img src="/certs/ojet.jpg" alt="OJT Certificate" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-sm font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <div class="flex items-center mb-3">
                <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span class="text-xs text-blue-600 font-bold uppercase tracking-wide">Training Program</span>
              </div>
              <h4 class="font-bold text-gray-900 text-xl mb-3">OJT Training Certificate</h4>
              <p class="text-gray-600 leading-relaxed">I am honored to have received a Certificate of Appreciation from Visayas State University for sharing my experiences and insights through IoT presentations during the Faculty of Computing Student Internship Program Pre-Departure Orientation. It was a meaningful opportunity to inspire and guide future IT professionals while giving back to the academic community.</p>
            </div>
          </div>

          <!-- Outstanding Achievement -->
          <div class="group cursor-pointer" @click="openImageViewer(2)">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img src="/certs/outstanding.jpg" alt="Outstanding Achievement" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-sm font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <div class="flex items-center mb-3">
                <div class="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                <span class="text-xs text-emerald-600 font-bold uppercase tracking-wide">Excellence Award</span>
              </div>
              <h4 class="font-bold text-gray-900 text-xl mb-3">Outstanding Performance Award</h4>
              <p class="text-gray-600 leading-relaxed">Being recognized as an Outstanding Computer Science Trainee Awardee has been one of my proudest moments. This Certificate of Recognition celebrates my exceptional performance and achievements in the field, motivating me to continuously strive for excellence and growth in my chosen career.</p>
            </div>
          </div>

          <!-- Tour Certificate -->
          <div class="group cursor-pointer" @click="openImageViewer(3)">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img src="/certs/tour.jpg" alt="Tour Certificate" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-sm font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <div class="flex items-center mb-3">
                <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <span class="text-xs text-purple-600 font-bold uppercase tracking-wide">Participation</span>
              </div>
              <h4 class="font-bold text-gray-900 text-xl mb-3">Educational Tour Certificate</h4>
              <p class="text-gray-600 leading-relaxed">I am proud to have experienced an exceptional educational tour where we have visited several companies from Cebu City, which includes Globe Telecom, Alliance Software Inc., RISE, RipeConcepts, and RivanIT. It was a valuable experience that allowed us to explore the industry and gain insights from the experts.</p>
            </div>
          </div>

          <!-- Turnover Certificate -->
          <div class="group cursor-pointer" @click="openImageViewer(4)">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img src="/certs/turnover.jpg" alt="Turnover Certificate" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-sm font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <div class="flex items-center mb-3">
                <div class="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                <span class="text-xs text-pink-600 font-bold uppercase tracking-wide">Project Completion</span>
              </div>
              <h4 class="font-bold text-gray-900 text-xl mb-3">System Turnover Certificate</h4>
              <p class="text-gray-600 leading-relaxed">I am proud to have received a Certificate of Appreciation from the Department of Forest Science in Visayas State Univeristy for my significant role in developing the Post Product Collectors Monitoring System. This project holds a special place in my journey, as it aligns with my commitment to sustainability and innovation in resource tracking.</p>
            </div>
          </div>
          <!-- OJT Completion Certificate -->
          <div class="group cursor-pointer" @click="openImageViewer(5)">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img src="/certs/high6.jpg" alt="OJT Completion Certificate" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-sm font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <div class="flex items-center mb-3">
                <div class="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                <span class="text-xs text-indigo-600 font-bold uppercase tracking-wide">Internship Completion</span>
              </div>
              <h4 class="font-bold text-gray-900 text-xl mb-3">OJT Completion Certificate</h4>
              <p class="text-gray-600 leading-relaxed">Successfully completed 305 hours of intensive on-the-job training, demonstrating professional commitment and practical skill development. This comprehensive internship experience provided hands-on exposure to real-world software development practices, team collaboration, and industry-standard methodologies, marking a significant milestone in my professional journey.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Achievement Stats -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500">
          <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <div class="text-3xl font-bold text-purple-600 mb-2">6</div>
          <div class="text-gray-600 text-lg font-medium">Certificates</div>
        </div>

        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500">
          <div class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg class="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="text-3xl font-bold text-emerald-600 mb-2">3</div>
          <div class="text-gray-600 text-lg font-medium">Awards</div>
        </div>

        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500">
          <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="text-3xl font-bold text-blue-600 mb-2">3</div>
          <div class="text-gray-600 text-lg font-medium">Training Programs</div>
        </div>

        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500">
          <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="text-3xl font-bold text-purple-600 mb-2">1</div>
          <div class="text-gray-600 text-lg font-medium">Copyright</div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="bg-white rounded-3xl p-12 text-gray-900 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
        <h3 class="text-3xl font-bold mb-6 text-purple-700">Continuous Learning & Growth</h3>
        <p class="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
          These certificates represent my commitment to continuous learning and professional development.
          Each achievement marks a milestone in my journey as a developer and technology professional.
        </p>
        <div class="grid md:grid-cols-3 gap-8 mt-10">
          <div class="text-center">
        <div class="text-4xl font-bold text-purple-600 mb-3">2025</div>
        <div class="text-gray-700 text-lg font-medium">Latest Achievement</div>
          </div>
          <div class="text-center">
        <div class="text-4xl font-bold text-purple-600 mb-3">100%</div>
        <div class="text-gray-700 text-lg font-medium">Completion Rate</div>
          </div>
          <div class="text-center">
        <div class="text-4xl font-bold text-purple-600 mb-3">6+</div>
        <div class="text-gray-700 text-lg font-medium">Recognition Awards</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Viewer Component -->
    <ImageViewer
      :is-open="isImageViewerOpen"
      :images="certificateImages"
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

// Certificate images data
const certificateImages = ref([
  {
    src: '/certs/copyright.jpg',
    alt: 'Copyright Certificate',
    title: 'Copyright Protection Certificate',
    description: 'Certificate of Appreciation for successful copyright application submission'
  },
  {
    src: '/certs/ojet.jpg',
    alt: 'OJT Certificate',
    title: 'OJT Training Certificate',
    description: 'Certificate of Appreciation for sharing IoT presentation experiences'
  },
  {
    src: '/certs/outstanding.jpg',
    alt: 'Outstanding Achievement',
    title: 'Outstanding Performance Award',
    description: 'Certificate of Recognition as Outstanding Computer Science Trainee'
  },
  {
    src: '/certs/tour.jpg',
    alt: 'Tour Certificate',
    title: 'Educational Tour Certificate',
    description: 'Certificate for visiting companies in Cebu City including Globe Telecom, Alliance Software Inc., RISE, RipeConcepts, and RivanIT'
  },
  {
    src: '/certs/turnover.jpg',
    alt: 'Turnover Certificate',
    title: 'System Turnover Certificate',
    description: 'Certificate of Appreciation for developing the Forest Product Collectors Monitoring System'
  },
  {
    src: '/certs/high6.jpg',
    alt: 'OJT Completion Certificate',
    title: 'OJT Completion Certificate',
    description: 'Successfully completed 305 hours of intensive on-the-job training'
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
