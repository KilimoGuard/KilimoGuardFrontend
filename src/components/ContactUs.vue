<template>
  <section id="contact" class="contact py-16">
    <div class="container mx-auto" data-aos="fade-up">
      <div class="section-header mb-12 text-center">
        <h2 class="text-4xl mb-4 relative text-center">
          Contact
          <span
              class="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-16 border-b-2 border-[#008374] mt-4"></span>
        </h2>
        <p class="mt-8 text-lg text-gray-600">Have questions or need assistance? Feel free to reach out to us!</p>
      </div>

      <div class="flex flex-wrap -mx-4">
        <!-- Info Section -->
        <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
          <div class="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
            <div class="flex items-start mb-6">
              <i class="bi bi-geo-alt text-2xl mr-4 bg-teal-700 p-2 rounded-full"></i>
              <div>
                <h4 class="text-xl font-semibold mb-2">Location:</h4>
                <p>Nairobi, Kenya</p>
              </div>
            </div>

            <div class="flex items-start mb-6">
              <i class="bi bi-envelope text-2xl mr-4 bg-teal-700 p-2 rounded-full"></i>
              <div>
                <h4 class="text-xl font-semibold mb-2">Email:</h4>
                <p>kilimoguard@gmail.com</p>
              </div>
            </div>

            <div class="flex items-start mb-6">
              <i class="bi bi-phone text-2xl mr-4 bg-teal-700 p-2 rounded-full"></i>
              <div>
                <h4 class="text-xl font-semibold mb-2">Call:</h4>
                <p>+254 792 244130</p>
              </div>
            </div>

            <div class="flex items-start">
              <i class="bi bi-clock text-2xl mr-4 bg-teal-700 p-2 rounded-full"></i>
              <div>
                <h4 class="text-xl font-semibold mb-2">Open Hours:</h4>
                <p>Mon-Fri: 10AM - 5PM</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="w-full lg:w-2/3 px-4">
          <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex flex-wrap -mx-4 mb-4">
              <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <input
                  type="text"
                  v-model="form.name"
                  class="form-input w-full border border-gray-300 rounded-lg p-3"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="w-full md:w-1/2 px-4">
                <input
                  type="email"
                  v-model="form.email"
                  class="form-input w-full border border-gray-300 rounded-lg p-3"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div class="mb-4">
              <input
                type="text"
                v-model="form.subject"
                class="form-input w-full border border-gray-300 rounded-lg p-3"
                placeholder="Subject"
                required
              />
            </div>
            <div class="mb-4">
              <textarea
                v-model="form.message"
                class="form-textarea w-full border border-gray-300 rounded-lg p-3"
                rows="7"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div class="mb-4 text-center">
              <div v-if="loading" class="text-green-600">Loading...</div>
              <div v-if="error" class="text-red-600">{{ error }}</div>
              <div v-if="success" class="text-green-600">{{ success }}</div>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="bg-teal-600 text-white py-3 px-8 rounded-lg hover:bg-teal-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ContactSection',
  setup() {
    const form = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const loading = ref(false);
    const error = ref(null);
    const success = ref(null);

    const handleSubmit = async () => {
      loading.value = true;
      error.value = null;
      success.value = null;

      // Simulate form submission
      try {
        // Implement form submission logic here
        await new Promise((resolve) => setTimeout(resolve, 1000));
        success.value = 'Your message has been sent. Thank you!';
        form.value = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      } catch (e) {
        error.value = 'An error occurred. Please try again.';
      } finally {
        loading.value = false;
      }
    };

    return {
      form,
      loading,
      error,
      success,
      handleSubmit
    };
  }
};
</script>

<style scoped>
.form-input,
.form-textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #008374;
}

.form-textarea {
  padding: 12px;
}

.form-button {
  background-color: #008374;
  border: 0;
  padding: 14px 45px;
  color: #fff;
  border-radius: 50px;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: rgba(0, 131, 116, 0.8);
}
</style>
