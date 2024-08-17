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
          <div :class="{'text-right': message.type === 'user', 'text-left': message.type === 'ai'}">
            <div :class="{'bg-custom-green': message.type === 'user', 'bg-gray-600': message.type === 'ai'}"
                 class="inline-block p-2 rounded-lg text-white">
              {{ message.text }}
            </div>
          </div>
        </div>
      </div>
      <!-- Input Area -->
      <div class="bg-gray-100 p-4 flex items-center">
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message..."
               class="flex-1 p-2 border rounded-lg"/>
        <button @click="sendMessage" class="ml-4 bg-custom-green text-white px-4 py-2 rounded-lg">Send</button>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/layout/MainLayout.vue";

export default {
  name: 'KilimoAI',
  components: {MainLayout},
  data() {
    return {
      newMessage: '',
      messages: [],
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === '') return;

      this.messages.push({text: this.newMessage, type: 'user'});
      this.newMessage = '';
      this.$nextTick(() => {
        this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
      });

      this.getAIResponse(); // Call without passing userMessage
    },
    getAIResponse() {
      setTimeout(() => {
        this.messages.push({text: 'This is a simulated response from KilimoAI.', type: 'ai'});
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
