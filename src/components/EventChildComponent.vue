<template>
    <div>
      <!-- Button that triggers the custom event to send a message to the parent -->
      <button class="btn btn-dark mb-3 btn-sm" @click="sendMessageToParent">Send Message</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      // Method to emit a custom event with a message
      sendMessageToParent() {
        // Emit the 'message-sent' event with the message as data
        this.$emit('message-sent', 'Hello from Child!');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional styling for the child component */
  button {
    margin-top: 10px;
  }
  </style>
  