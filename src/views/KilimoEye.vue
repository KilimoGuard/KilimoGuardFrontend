<template>
  <main-layout>
    <div class="flex flex-col h-full">
      <!-- Chat Header -->
      <header class="bg-custom-green text-white p-4">
        <h1 class="text-2xl font-semibold">KilimoEye</h1>
      </header>
      <!-- Chat Area -->
      <div class="flex-1 p-4 overflow-y-auto" ref="chatContainer">
        <div v-for="(message, index) in messages" :key="index" class="mb-4">
          <div :class="{'text-right': message.type === 'user', 'text-left': message.type === 'ai'}">
            <div :class="{'bg-custom-green': message.type === 'user', 'bg-gray-600': message.type === 'ai'}"
                 class="inline-block p-2 rounded-lg text-white">
              <div v-if="message.type === 'user'">
                <div v-if="message.images && message.images.length">
                  <div v-for="(image, imgIndex) in message.images" :key="imgIndex">
                    <img :src="image" class="max-w-full rounded-lg" alt="upload"/>
                  </div>
                </div>
                <div v-if="!message.images || !message.images.length">{{ message.text }}</div>
              </div>
              <div v-else>{{ message.text }}</div>
            </div>
          </div>
        </div>
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
          <input v-model="newMessage" placeholder="Type your message..." class="flex-1 p-2 border rounded-lg" />
          <button @click="sendMessage" class="ml-4 bg-custom-green text-white px-4 py-2 rounded-lg">Send</button>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/layout/MainLayout.vue";

export default {
  name: 'KilimoEye',
  components: { MainLayout },
  data() {
    return {
      newMessage: '',
      messages: [], // Ensure messages is initialized as an array
      selectedFiles: [],
      previewImages: [], // Ensure previewImages is initialized as an array
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === '' && !this.selectedFiles.length) return;

      // Handle image uploads
      if (this.selectedFiles.length > 0) {
        this.selectedFiles.forEach(file => {
          const reader = new FileReader();
          reader.onload = () => {
            this.messages.push({ images: [reader.result], type: 'user' });
            this.$nextTick(() => {
              this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
            });
          };
          reader.readAsDataURL(file);
        });
        this.selectedFiles = []; // Clear the selected files
        this.previewImages = []; // Clear the image previews
      }

      // Handle text messages
      if (this.newMessage.trim()) {
        this.messages.push({ text: this.newMessage, type: 'user' });
        this.newMessage = ''; // Clear the text input
      }

      this.$nextTick(() => {
        this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
      });

      this.getAIResponse(); // Call without passing userMessage
    },
    handleFileUpload(event) {
      const files = Array.from(event.target.files);
      this.selectedFiles = files.filter(file => file.type.startsWith('image/'));
      this.previewImages = this.selectedFiles.map(file => URL.createObjectURL(file));
    },
    removePreviewImage(index) {
      // Remove the image URL from previewImages
      this.previewImages.splice(index, 1);
      // Remove the corresponding file from selectedFiles
      this.selectedFiles.splice(index, 1);
    },
    getAIResponse() {
      setTimeout(() => {
        this.messages.push({ text: 'This is a simulated response from KilimoAI.', type: 'ai' });
        this.$nextTick(() => {
          this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.bg-custom-green {
  background-color: #008374;
}
</style>
