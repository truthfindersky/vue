<template>
      <h1 class="mb-5">Provide and Inject</h1>
    <div>
      <h4>Parent Component</h4>
      <ProvideInjectChild />
    </div>
  </template>
  
  <script>
  import { provide } from 'vue';
  import ProvideInjectChild from './ProvideInjectChild.vue';
  
  export default {
    components: {
      ProvideInjectChild
    },
    setup() {
      // Provide a value to child components
      provide('message', 'Hello from Parent!');
    }
  };
  </script>
  