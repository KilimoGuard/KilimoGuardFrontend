<template>
  <div>
    <!-- Welcome Message -->
<!--    <transition name="fade">-->
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
<!--    </transition>-->

    <!-- Chat Icon -->
    <div
      @click="toggleChat"
      class="fixed bottom-4 right-4 cursor-pointer z-50">
      <div
        class="bg-dark-green text-white p-4 md:p-6 rounded-full shadow-lg flex items-center justify-center">
        <i class="bi bi-chat-text text-2xl md:text-4xl"></i>
      </div>
    </div>

    <!-- Chat Interface -->
    <transition name="fade">
      <div
        v-if="showChat"
        class="fixed bottom-4 right-4 w-72 sm:w-80 md:w-96 lg:w-100 max-w-full bg-white shadow-lg rounded-lg overflow-hidden z-50">
        <div class="bg-dark-green text-white p-3 flex items-center">
          <h4 class="text-base md:text-lg font-semibold">Chat with us</h4>
          <button @click="toggleChat" class="ml-auto text-white">
            <i class="bi bi-x-lg text-lg md:text-2xl"></i>
          </button>
        </div>
        <div class="p-3 h-64 overflow-y-auto">
          <!-- Chat messages -->
          <div
            v-for="message in messages"
            :key="message.id"
            :class="{'text-right': message.sender === 'user'}"
            class="mb-2">
            <div
              :class="{'bg-dark-green text-white': message.sender === 'user', 'bg-gray-200': message.sender === 'bot'}"
              class="inline-block p-2 rounded-lg text-sm md:text-base">
              {{ message.text }}
            </div>
          </div>
        </div>
        <form @submit.prevent="sendMessage" class="p-3 bg-gray-100 border-t border-gray-200">
          <input
            v-model="inputMessage"
            type="text"
            class="w-full border border-gray-300 rounded-lg p-2 text-sm md:text-base"
            placeholder="Type a message..."
            required />
          <button type="submit" class="hidden">Send</button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'ChatBot',
  setup() {
    const showChat = ref(false);
    const inputMessage = ref('');
    const messages = ref([]);
    const welcomeDismissed = ref(false);

    const toggleChat = () => {
      showChat.value = !showChat.value;
    };

    const dismissWelcome = () => {
      welcomeDismissed.value = true;
    };

    const sendMessage = () => {
      if (inputMessage.value.trim()) {
        messages.value.push({id: Date.now(), text: inputMessage.value, sender: 'user'});
        inputMessage.value = '';
        // Simulate bot response
        setTimeout(() => {
          messages.value.push({id: Date.now(), text: 'Thank you for your message!', sender: 'bot'});
        }, 1000);
      }
    };

    onMounted(() => {
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
    };
  }
};
</script>

<style scoped>
.bg-dark-green {
  background-color: #08821a;
}
</style>
