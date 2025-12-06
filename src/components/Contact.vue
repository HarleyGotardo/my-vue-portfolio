<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div class="absolute top-40 right-20 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
    </div>

    <!-- Header Section -->
    <div class="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-20">
      <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-12 mb-16 hover:shadow-2xl transition-all duration-500">
        <div class="flex items-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-2">Get In Touch</h1>
            <p class="text-gray-600 text-lg font-medium">Let's connect and discuss opportunities</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-l-4 border-purple-500 shadow-sm">
          <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            Ready to Collaborate
          </h2>
          <p class="text-gray-700 leading-relaxed text-lg text-justify">
            I'm currently available for full-time opportunities and exciting projects. Whether you're looking for
            a dedicated team member or need help bringing your ideas to life, I'd love to hear from you.
          </p>
        </div>
      </div>

      <!-- Modern Contact Information Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <!-- Email Card -->
        <button
          @click="scrollToSection"
          class="group bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl shadow-lg hover:shadow-2xl px-8 py-10 transition-all duration-300 flex flex-col items-center hover:scale-[1.03] focus:outline-none"
        >
          <div class="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
        <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Email</h3>
          <p class="text-gray-500 text-sm mb-2">harleygothards@gmail.com</p>
          <span class="text-xs text-purple-500 font-medium group-hover:underline">Send a message</span>
        </button>

        <!-- Phone Card -->
        <a
          href="tel:+639123456789"
          class="group bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl shadow-lg hover:shadow-2xl px-8 py-10 transition-all duration-300 flex flex-col items-center hover:scale-[1.03]"
        >
          <div class="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
        <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
          <p class="text-gray-500 text-sm mb-2">+63 912 345 6789</p>
          <span class="text-xs text-green-600 font-medium group-hover:underline">Call now</span>
        </a>

        <!-- Location Card -->
        <a
          href="https://southernleyte.gov.ph/saint-bernard/saint-bernard-location/"
          target="_blank"
          class="group bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl px-8 py-10 transition-all duration-300 flex flex-col items-center hover:scale-[1.03]"
        >
          <div class="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Location</h3>
          <p class="text-gray-500 text-sm mb-2 text-center">Saint Bernard, Southern Leyte, Philippines</p>
          <span class="text-xs text-blue-600 font-medium group-hover:underline">View on map</span>
        </a>
      </div>

      <!-- Social Media Links -->
      <div class="bg-white border border-gray-200 rounded-3xl shadow-xl p-12 mb-16 hover:shadow-2xl transition-all duration-500">
        <h3 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
            </svg>
          </div>
          Connect With Me
        </h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/harley-gotardo-6a2282295/" target="_blank" class="flex items-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition-all duration-500 group ">
              <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg mb-2">LinkedIn</h4>
                <p class="text-gray-600 text-lg font-medium">Professional networking</p>
              </div>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/harleygotardo" target="_blank" class="flex items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:shadow-xl transition-all duration-500 group ">
              <div class="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg mb-2">GitHub</h4>
                <p class="text-gray-600 text-lg font-medium">Code repositories & projects</p>
              </div>
            </a>
          </div>

          <div class="space-y-6">
            <!-- Instagram -->
            <a href="https://www.instagram.com/harleyharrrr/" target="_blank" class="flex items-center p-6 bg-gradient-to-r from-pink-50 to-rose-100 rounded-2xl hover:shadow-xl transition-all duration-500 group ">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg mb-2">Instagram</h4>
                <p class="text-gray-600 text-lg font-medium">@harleyharrrr</p>
              </div>
            </a>

            <!-- Availability Status -->
            <div class="p-6 bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl border border-green-200">
                <div class="flex items-center mb-3">
                <div class="w-4 h-4 bg-green-500 rounded-full mr-3 animate-pulse shadow-lg"></div>
                </div>
                <p class="text-gray-600 text-lg font-medium leading-relaxed">
                  Available for full-time & remote work after internship.
                </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Call to Action -->
      <div class="bg-white rounded-3xl p-12 text-gray-900 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
        <h3 class="text-3xl font-bold mb-6">Let's Work Together!</h3>
        <p class="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
          I'm passionate about creating innovative solutions and would love to contribute to your team's success.
          Whether you have a project in mind or just want to connect, don't hesitate to reach out!
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="https://www.linkedin.com/in/harley-gotardo-6a2282295/" target="_blank" class="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform ">
        Connect on LinkedIn
          </a>
        </div>
      </div>

      <!-- Contact Form Section -->
      <div id="contact-section" class="mt-16 bg-white border border-gray-200 rounded-3xl shadow-2xl p-12 mb-16 flex flex-col items-center relative overflow-hidden hover:shadow-3xl transition-all duration-500">
        <!-- Decorative gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-pink-50/30 pointer-events-none"></div>

        <!-- Content wrapper -->
        <div class="relative z-10 w-full flex flex-col items-center">
          <!-- Icon and header -->
          <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-8 shadow-xl">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>

          <h1 class="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4 tracking-tight">Get In Touch</h1>
          <p class="text-gray-600 mb-12 text-center max-w-2xl text-lg leading-relaxed">I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>

          <form @submit.prevent="sendEmail" class="w-full max-w-2xl space-y-8">
            <!-- Sender Email -->
            <div class="space-y-3">
              <label for="from_name" class="block text-lg font-bold text-gray-700">Your Email</label>
              <input
                type="email"
                id="from_name"
                v-model="form.from_name"
                required
                class="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white hover:bg-gray-50 text-lg shadow-sm"
                placeholder="Enter your email address"
              />
            </div>

            <!-- Message -->
            <div class="space-y-3">
              <label for="message" class="block text-lg font-bold text-gray-700">Message</label>
                <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 resize-none bg-white hover:bg-gray-50 text-lg shadow-sm"
                placeholder="Please provide your message, including your concern and any relevant details."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold hover:from-purple-600 cursor-pointer hover:to-pink-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] text-lg"
            >
              Send Message
            </button>
          </form>

          <p v-if="successMessage" class="mt-8 text-green-600 text-lg text-center font-bold bg-green-50 py-4 px-6 rounded-xl border border-green-200 shadow-lg">{{ successMessage }}</p>
          <p v-if="errorMessage" class="mt-8 text-red-600 text-lg text-center font-bold bg-red-50 py-4 px-6 rounded-xl border border-red-200 shadow-lg">{{ errorMessage }}</p>
        </div>
      </div>
        </div>
      </div>
    </template>

    <script setup>
    import { ref } from 'vue';
    import emailjs from "emailjs-com";

    const form = ref({
      from_name: "",
      to_name: "Harley Gotardo",
      email: "",
      subject: "",
      message: "",
    });
    const successMessage = ref("");
    const errorMessage = ref("");

    const sendEmail = async () => {
      try {
        const serviceID = "service_tm6x3ep";
        const templateID = "template_vt83ylr";
        const publicKey = "JT0Mz-3RCbJul7jJb";

        await emailjs.send(
      serviceID,
      templateID,
      {
        from_name: form.value.from_name,
        to_name: form.value.to_name,
        from_email: form.value.email, // This maps to {{email}} in your template
        subject: form.value.subject,
        message: form.value.message,
      },
      publicKey
        );

        form.value.from_name = "";
        form.value.to_name = "Harley Gotardo";
        form.value.email = "";
        form.value.subject = "";
        form.value.message = "";
        successMessage.value = "Your message has been sent successfully!";
        errorMessage.value = "";

        // Clear success message after 4 seconds
        setTimeout(() => {
          successMessage.value = "";
        }, 4000);
      } catch (error) {
        console.error("Failed to send email:", error);
        successMessage.value = "";
        errorMessage.value = "Failed to send your message. Please try again.";

        // Clear error message after 4 seconds
        setTimeout(() => {
          errorMessage.value = "";
        }, 4000);
      }
    };

    const scrollToSection = () => {
      const section = document.querySelector("#contact-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
    </script>

<script>
export default {
  name: 'ContactSection'
}
</script>

<style scoped>
/* All styling handled by Tailwind CSS */
</style>
