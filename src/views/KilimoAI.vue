<template>
  <main-layout>
    <div class="flex flex-col h-full">
      <!-- Chat Header -->
      <header class="bg-custom-green text-white p-4">
        <h1 class="text-2xl font-semibold">KilimoAI Chat</h1>
      </header>

      <!-- Chat Area -->
      <div class="flex-1 p-4 overflow-y-auto" ref="chatContainer">
        <div v-for="(message, index) in messages" :key="index" class="mb-4">
          <div :class="{ 'text-right': message.sender === 'user', 'text-left': message.sender === 'bot' }">
            <div :class="{ 'bg-custom-green': message.sender === 'user', 'bg-gray-600': message.sender === 'bot' }"
              class="inline-block p-2 rounded-lg text-white">
              <div v-if="message.images && message.images.length">
                <div v-for="(image, imgIndex) in message.images" :key="imgIndex">
                  <img :src="image" class="max-w-full rounded-lg" alt="upload"/>
                </div>
              </div>
              <div v-else>{{ message.text }}</div>
            </div>
          </div>
        </div>
        <img v-if="isThinking" src="../assets/animations/typing.gif" width="80" height="80">
      </div>

      <!-- Input Area -->
      <div class="bg-gray-100 p-4 flex flex-col">
        <!-- Image Preview Section -->
        <div v-if="previewImages.length" class="mb-4 flex flex-wrap gap-2">
          <div v-for="(image, index) in previewImages" :key="index" class="relative">
            <img :src="image" class="max-w-xs max-h-32 object-cover rounded-lg" alt="preview"/>
            <button @click="removePreviewImage(index)" class="absolute top-1 right-1 text-red-500">
              <i class="bi bi-x-circle text-xl"></i>
            </button>
          </div>
        </div>
        <!-- File Upload Icon -->
        <label for="file-upload" class="cursor-pointer mb-2 text-gray-600 hover:text-gray-900">
          <i class="bi bi-image text-xl"></i>
          <input type="file" id="file-upload" @change="handleFileUpload" multiple class="hidden" />
        </label>
        <!-- Message Input and Send Button -->
        <div class="flex items-center">
          <input v-model="inputMessage" placeholder="Type your message..." class="flex-1 p-2 border rounded-lg" />
          <button @click="sendMessage" class="ml-4 bg-custom-green text-white px-4 py-2 rounded-lg">Send</button>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/layout/MainLayout.vue";
import axios from 'axios';
import { ref, nextTick } from 'vue';

export default {
  name: 'KilimoAI',
  components: { MainLayout },
  setup() {
    const inputMessage = ref('');
    const messages = ref([{
      id: Date.now(),
      text: "Hello, welcome to KilimoGuard, I’m a KilimoAI 🌱😊. How can I help you today?",
      sender: "bot"
    }]);
    const chatContainer = ref(null);
    const isThinking = ref(false);
    const previewImages = ref([]);
    const selectedFiles = ref([]);

    const sendMessage = async () => {
      if (inputMessage.value.trim() === '' && !selectedFiles.value.length) return;

      isThinking.value = true;

      // Handle image uploads
      if (selectedFiles.value.length > 0) {
        selectedFiles.value.forEach(file => {
          const reader = new FileReader();
          reader.onload = () => {
            messages.value.push({ images: [reader.result], sender: 'user' });
            selectedFiles.value = []; // Clear the selected files
            previewImages.value = []; // Clear the image previews
            scrollToBottom();
          };
          reader.readAsDataURL(file);
        });
      }

      // Handle text messages
      if (inputMessage.value.trim()) {
        messages.value.push({ text: inputMessage.value, sender: 'user' });
        inputMessage.value = ''; // Clear the text input
      }

      await nextTick(); // Ensure DOM updates
      scrollToBottom();

      try {
        const response = await axios.post('https://kilimoguard-backend-dev.onrender.com/api-v1/process_user_query_landing_page', {
          question: inputMessage.value
        });

        // Add bot's response to the messages array
        messages.value.push({
          text: response.data.text,
          sender: 'bot'
        });
      } catch (error) {
        console.error('Error while getting AI response:', error);
        messages.value.push({
          text: 'Sorry, something went wrong. Please try again later.',
          sender: 'bot'
        });
      }

      isThinking.value = false;
      await nextTick(); // Ensure DOM updates
      scrollToBottom();
    };

    const handleFileUpload = (event) => {
      const files = Array.from(event.target.files);
      selectedFiles.value = files.filter(file => file.type.startsWith('image/'));
      previewImages.value = selectedFiles.value.map(file => URL.createObjectURL(file));
    };

    const removePreviewImage = (index) => {
      previewImages.value.splice(index, 1);
      selectedFiles.value.splice(index, 1);
    };

    const scrollToBottom = () => {
      if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
      }
    };

    return {
      inputMessage,
      messages,
      chatContainer,
      sendMessage,
      isThinking,
      handleFileUpload,
      previewImages,
      removePreviewImage
    };
  }
};
</script>

<style scoped>
.bg-custom-green {
  background-color: #008374;
}
</style>
