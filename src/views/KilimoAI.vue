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
              {{ message.text }}
            </div>
          </div>
        </div>
        <img v-if="isThinking" src="../assets/animations/typing.gif" width="80" height="80">
      </div>

      <!-- Input Area -->
      <div class="bg-gray-100 p-4 flex items-center">
        <input v-model="inputMessage" @keyup.enter="sendMessage" placeholder="Type your message..."
          class="flex-1 p-2 border rounded-lg" />
        <button @click="sendMessage" class="ml-4 bg-custom-green text-white px-4 py-2 rounded-lg">Send</button>
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

    const sendMessage = async () => {
      if (inputMessage.value.trim() === '') return;

      isThinking.value = true;

      // Add user's message to the messages array
      messages.value.push({
        text: inputMessage.value,
        sender: 'user'
      });

      const userMessage = inputMessage.value;
      inputMessage.value = '';

      await nextTick(); // Ensure DOM updates
      scrollToBottom();

      try {
        const response = await axios.post('https://kilimoguard-backend-dev.onrender.com/api-v1/process_user_query_landing_page', {
          question: userMessage
        });

        // Add bot's response to the messages array
        messages.value.push({
          text: response.data.text,
          sender: 'bot'
        });
        isThinking.value = false;
      } catch (error) {
        isThinking.value = false;
        console.error('Error while getting AI response:', error);
        messages.value.push({
          text: 'Sorry, something went wrong. Please try again later.',
          sender: 'bot'
        });
      }

      await nextTick(); // Ensure DOM updates
      scrollToBottom();
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
      isThinking
    };
  }
};
</script>

<style scoped>
.bg-custom-green {
  background-color: #008374;
}
</style>
