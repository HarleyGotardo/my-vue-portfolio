<template>
  <div class="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 p-6 md:p-8">
    <!-- Header Section -->
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-3xl font-bold text-gray-800">Academic Experience</h1>
            <p class="text-gray-600">Educational journey and academic achievements</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border-l-4 border-rose-500">
          <h2 class="text-xl font-semibold text-gray-800 mb-3 flex items-center">
            <svg class="w-5 h-5 text-rose-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            Academic Foundation
          </h2>
          <p class="text-gray-600 leading-relaxed">
            My academic journey has provided me with a strong foundation in Computer Science, encompassing both theoretical
            knowledge and practical application through various projects and research initiatives.
          </p>
        </div>
      </div>

      <!-- Academic Achievements Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- Computer Science Foundation -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800">Programming & Development</h3>
          </div>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start"><span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Acquired foundational knowledge in Computer Science</li>
            <li class="flex items-start"><span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Conducted code testing in C#</li>
            <li class="flex items-start"><span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Familiar with Software Engineering concepts</li>
          </ul>
        </div>

        <!-- Project Development -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800">Academic Projects</h3>
          </div>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start"><span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Collaborated on 'Navi' project at VSU</li>
            <li class="flex items-start"><span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Developed 'Cash Compass' Web Application</li>
            <li class="flex items-start"><span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Developed simple expert systems</li>
            <li class="flex items-start"><span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Built e-commerce web app using HTML, CSS, JS and Firebase</li>
          </ul>
        </div>

        <!-- Research & AI -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800">Research & AI</h3>
          </div>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start"><span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Developed 'Fuzzy Logic-Based Emotion Recognition from Eye Tracking' Project</li>
            <li class="flex items-start"><span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Familiar with visual computing/computer vision concepts</li>
            <li class="flex items-start"><span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Collected images of cassava leaves for variety classification</li>
          </ul>
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
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start"><span class="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Developed 'Android-Based Sari-Sari Store Sales and Inventory Management System'</li>
          </ul>
        </div>

        <!-- Leadership & Management -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800">Leadership Experience</h3>
          </div>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start"><span class="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Experience as Project Manager in Software Engineering Project</li>
            <li class="flex items-start"><span class="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Served as 2nd-year representative in Computer Science Student Society</li>
          </ul>
        </div>

        <!-- Technical Foundation -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"/>
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v-1z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800">Technical Foundation</h3>
          </div>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start"><span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Two years of senior high school experience majoring in ICT Strand</li>
            <li class="flex items-start"><span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Acquired foundational knowledge in networking concepts</li>
            <li class="flex items-start"><span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Computer system unit knowledge</li>
          </ul>
        </div>
      </div>

      <!-- Achievement Gallery -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <svg class="w-6 h-6 text-rose-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
          </svg>
          Academic Achievement Gallery
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Certificate Copyright -->
          <div class="group cursor-pointer" @click="openImageViewer(0)">
            <div class="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <img src="/achievements/certificate-copyright.jpg" alt="Certificate Copyright" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-xs font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <h4 class="font-semibold text-gray-800">Copyright Protection Certificate</h4>
              <p class="text-sm text-gray-600">A milestone reached! I received a certificate for successfully copyrighting my thesis system, the Forest Product Collectors Monitoring System, which is a comprehensive web-based monitoring system for the VSU Forest Protection Unit. It's a small document, but a massive achievement, as it symbolizes the value and significance of my work.</p>
            </div>
          </div>

          <!-- Diploma -->
          <div class="group cursor-pointer" @click="openImageViewer(1)">
            <div class="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <img src="/achievements/diploma.jpg" alt="Diploma" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-xs font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <h4 class="font-semibold text-gray-800">Holding My Diploma on Stage</h4>
              <p class="text-sm text-gray-600">One of the greatest moments of my life! This photo captures the moment when I proudly held my diploma on stage during my graduation ceremony. It's a feeling of accomplishment and a culmination of all the hard work and sacrifices I made throughout my academic journey. I'm grateful to have shared this moment with my loved ones and friends.</p>
            </div>
          </div>

          <!-- OJT Presentation -->
          <div class="group cursor-pointer" @click="openImageViewer(2)">
            <div class="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <img src="/achievements/ojt-present.jpg" alt="OJT Presentation" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-xs font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <h4 class="font-semibold text-gray-800">Conquering Public Speaking</h4>
              <p class="text-sm text-gray-600">I took a leap of faith and shared my internship experience with fellow students during the VSU Faculty of Engineering and VSU Faculty of Computing Student Internship Program Pre-Departure Orientation. It was a challenging but empowering experience, proving to myself that I can overcome my fears and effectively communicate my ideas to a wider audience.</p>
            </div>
          </div>

          <!-- Outstanding Achievement -->
          <div class="group cursor-pointer" @click="openImageViewer(3)">
            <div class="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <img src="/achievements/outstanding.jpg" alt="Outstanding Achievement" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-xs font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <h4 class="font-semibold text-gray-800">From Zero to Hero</h4>
              <p class="text-sm text-gray-600">I began my internship with zero full-stack development experience, but thanks to High6's guidance and patience, I learned, stumbled, and eventually found my footing. Being recognized as Outstanding Computer Science Trainee feels surreal. I'm grateful for every lesson learned along the way, and I look forward to continuing my growth as a developer.</p>
            </div>
          </div>

          <!-- Thesis Defense -->
          <div class="group cursor-pointer" @click="openImageViewer(4)">
            <div class="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <img src="/achievements/thesis-defense.jpg" alt="Thesis Defense" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-xs font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <h4 class="font-semibold text-gray-800">Thesis Defense</h4>
              <p class="text-sm text-gray-600">
                I conceptualized, designed, developed, and defended my undergraduate thesis from start to finish. It was a challenging but rewarding experience that taught me the value of perseverance, time management, and self-motivation. I'm grateful for God's guidance throughout the process and proud to have successfully defended my work. A milestone I'll always treasure.
              </p>
            </div>
          </div>

          <!-- Turn Over Ceremony -->
          <div class="group cursor-pointer" @click="openImageViewer(5)">
            <div class="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <img src="/achievements/turn-over.jpg" alt="Turn Over Ceremony" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  <span class="text-xs font-medium">Click to view</span>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <h4 class="font-semibold text-gray-800">Turn Over Ceremony</h4>
              <p class="text-sm text-gray-600">
                What started as an academic requirement evolved into a real-world solution. My system, built for VSU's forest product collectors, is now serving its intended purpose. It's fulfilling to see learning make a tangible impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Completed Projects Summary -->
      <div class="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white text-center">
        <h3 class="text-2xl font-bold mb-4">Academic Journey Complete</h3>
        <p class="text-rose-100 mb-6 max-w-2xl mx-auto">
          My academic experience has provided me with a solid foundation in computer science, practical project development skills,
          and leadership experience that I now apply in my professional career.
        </p>
        <div class="grid md:grid-cols-3 gap-6 mt-8">
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">15+</div>
            <div class="text-rose-100 text-sm">Academic Projects</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">4</div>
            <div class="text-rose-100 text-sm">Years of Study</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">6+</div>
            <div class="text-rose-100 text-sm">Achievements</div>
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
