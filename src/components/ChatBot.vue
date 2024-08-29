<template>
  <div>
    <!-- Welcome Message -->
    <!-- <transition name="fade">-->
    <!--      <div-->
    <!--        v-if="!showChat && !welcomeDismissed"-->
    <!--        class="fixed bottom-20 right-4 bg-dark-green text-white p-3 rounded-lg shadow-lg z-50 max-w-xs md:max-w-sm lg:max-w-md">-->
    <!--        <div class="flex items-start justify-between">-->
    <!--          <p class="text-sm md:text-base lg:text-lg">Hello, welcome to KilimoGuard, I’m a virtual assistant. How can I help you today?</p>-->
    <!--          <button @click="dismissWelcome" class="ml-2 md:ml-4 text-white">-->
    <!--            <i class="bi bi-x-lg text-lg md:text-2xl"></i>-->
    <!--          </button>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </transition> -->

    <!-- Chat Icon -->
    <div @click="toggleChat" class="fixed bottom-4 right-4 cursor-pointer z-50">
      <div class="bg-dark-green text-white p-4 md:p-6 rounded-full shadow-lg flex items-center justify-center">
        <i class="bi bi-chat-text text-2xl md:text-4xl"></i>
      </div>
    </div>

    <!-- Chat Interface -->
    <transition name="fade" style="z-index: 99999;">
      <div v-if="showChat"
        class="fixed bottom-4 right-4 w-72 sm:w-80 md:w-96 lg:w-100 max-w-full bg-white shadow-lg rounded-lg overflow-hidden z-50">
        <div class="bg-dark-green text-white p-3 flex items-center">
          <h4 class="text-base md:text-lg font-semibold">Chat with us</h4>
          <button @click="toggleChat" class="ml-auto text-white">
            <i class="bi bi-x-lg text-lg md:text-2xl"></i>
          </button>
        </div>
        <div class="p-3 h-64 overflow-y-auto" id="messageContainer">
          <!-- Chat messages -->
          <div v-for="message in messages" :key="message.id" :class="{ 'text-right': message.sender === 'user' }"
            class="mb-2">
            <div
              :class="{ 'bg-dark-green text-white': message.sender === 'user', 'bg-gray-200': message.sender === 'bot' }"
              class="inline-block p-2 rounded-lg text-sm md:text-base">
              {{ message.text }}
            </div>
          </div>
          <img v-if="isThinking" src="../assets/animations/typing.gif" width="80" height="80">
          <div id="endMarker"></div>
        </div>
        <form @submit.prevent="sendMessage" class="p-3 bg-gray-100 border-t border-gray-200">
          <input v-model="inputMessage" type="text"
            class="w-full border border-gray-300 rounded-lg p-2 text-sm md:text-base" placeholder="Type a message..."
            required />
          <button type="submit" class="hidden">Send</button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'ChatBot',
  setup() {
    const showChat = ref(false);
    const inputMessage = ref('');
    const messages = ref([{
      id: Date.now(),
      text: "Hello, welcome to KilimoGuard, I’m a KilimoAI 🌱😊. How can I help you today?",
      sender: "bot"
    }]);
    const welcomeDismissed = ref(false);
    const isThinking = ref(false);

    const toggleChat = () => {
      showChat.value = !showChat.value;
    };

    const dismissWelcome = () => {
      welcomeDismissed.value = true;
    };

    const scrollToBottom = () => {
      let endMarker = document.getElementById("endMarker");      
      setTimeout(() => {
        endMarker.scrollIntoView({ behavior: 'smooth', block: 'end' });        
      }, 100);
    }

    const sendMessage = async () => {
      if (inputMessage.value.trim()) {
        isThinking.value = true;
        // Add user's message to the messages array
        messages.value.push({
          id: Date.now(),
          text: inputMessage.value,
          sender: 'user'
        });
        
        scrollToBottom();        

        // Prepare the payload for the API request with just the question
        const payload = {
          question: inputMessage.value,          
          image_url: "",
          user_id: "",
          session_id: "",
          device_id: localStorage.getItem('deviceId')
        };

        // Clear the input field
        inputMessage.value = '';

        try {
          // Make the POST request to the backend API using Axios
          const response = await axios.post(process.env.VUE_APP_BACKEND_URL+'/api-v1/process_user_query', payload);

          isThinking.value = false;

          // Add bot's response to the messages array
          messages.value.push({
            id: Date.now(),
            text: response.data.text, // Access the 'text' property of the response
            sender: 'bot'
          });          
          scrollToBottom();          
        } catch (error) {
          isThinking.value = false;
          // Handle any errors that occur during the request
          console.error('Error while sending message:', error);
          messages.value.push({
            id: Date.now(),
            text: 'Sorry, something went wrong. Please try again later.',
            sender: 'bot'
          });
        }
      }
    };
    
    onMounted(() => {
      let deviceId = localStorage.getItem('deviceId');
      if (!deviceId) {
        deviceId = `device-${Math.random().toString(36).substring(2)}-${Date.now()}`;
        localStorage.setItem('deviceId', deviceId);
      }

      // Automatically show welcome message after mounting
      setTimeout(() => {
        if (!showChat.value) {
          welcomeDismissed.value = false;
        }
      }, 500);
    });

    return {
      showChat,
      inputMessage,
      messages,
      welcomeDismissed,
      toggleChat,
      dismissWelcome,
      sendMessage,
      isThinking
    };
  }
};
</script>

<style scoped>
.bg-dark-green {
  background-color: #08821a;
}
</style>
