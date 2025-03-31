<template>
    <button :class="['btn', buttonClass]">{{ text }}</button>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      buttonClass: {
        type: String,
        default: 'btn-primary'
      }
    }
  };
  </script>
  