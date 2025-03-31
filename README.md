## VUE

This is a Vue.js project where I have learned and practiced the fundamental concepts of Vue. This project will help beginners to understand the core principles of Vue and how to structure and manage components in a Vue application. From index.js vue-router, you can learn the topics step by step from vue components.

## Project Setup

```bash
nvm use 18
create a folder: vueproject and open in terminal
npm create vue@latest
npm install
npm run dev
```

## Bootstrap

- copy and paste the bootstrap theme assets into src/assets in vue project

- at vue index.html add theme's css and js 

```bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>

    <!-- Add your theme's CSS files -->
    <link rel="stylesheet" href="/src/assets/plugins/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="/src/assets/css/style.css">
    <link rel="stylesheet" href="/src/assets/plugins/themify-icons/themify-icons.css">

    <!-- Favicon -->
    <link rel="shortcut icon" href="/src/assets/images/favicon.ico" type="image/x-icon">
  </head>

  <body>
    <!-- Vue app div and main.js -->
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>

    <!-- Add your theme's JavaScript files -->
    <script src="/src/assets/plugins/jQuery/jquery.min.js"></script>
    <script src="/src/assets/plugins/bootstrap/bootstrap.min.js"></script>
    <script src="/src/assets/plugins/masonry/masonry.min.js"></script>
    <script src="/src/assets/plugins/clipboard/clipboard.min.js"></script>
    <script src="/src/assets/plugins/match-height/jquery.matchHeight-min.js"></script>
    <script src="/src/assets/js/script.js"></script>
  </body>
</html>
```

## Vue Router

install router
```bash
npm install vue-router
```
src/router/index.js
```bash
import { createRouter, createWebHistory } from 'vue-router';
import Binding from '../components/Binding.vue';

const routes = [
  { path: '/binding', component: Binding },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
```
src/main.js
```bash
import router from './router';
createApp(App).use(router).mount('#app');
```
src/App.vue - <router-view>
```bash
<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>


<template>
  <header class="sticky-top navigation">
    <div class=container>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a class=navbar-brand href="index.html"><img class="img-fluid" src="./assets/images/logo.png" alt="godocs"></a>
      </nav>
    </div>
  </header>

  <!-- details page -->
  <section class="pt-5">
    <div class="container shadow section-sm rounded">
      <div class="row">
        <!-- sidebar -->
        <div class="col-lg-3">
        </div>
        <!-- Dynamic Content Area -->
        <div class="col-lg-8">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>
```

## Github
If you download this project from Github
```bash
npm install
npm run dev
npm install axios
```
