<template>
    <div>
      <h4>Child Component</h4>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import { inject } from 'vue';
  
  export default {
    setup() {
      // Inject the provided value from the parent
      const message = inject('message');
  
      return { message };
    }
  };
  </script>
  