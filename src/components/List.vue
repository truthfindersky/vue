<template>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  