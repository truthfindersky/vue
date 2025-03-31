<template>
    <ul>
      <slot :users="users"></slot> <!-- Passing data as slot prop -->
    </ul>
  </template>
  
  <script setup>
  const users = ["Alice", "Bob", "Charlie"];
  </script>
  