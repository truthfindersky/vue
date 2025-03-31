<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentPath = computed(() => route.path);

// Define refs to track which parent section is open
const isBasicOpen = ref(false);
const isAdvancedOpen = ref(false);

// Check if the current route should have Basic or Advanced active
const isBasicActive = computed(() =>
  ['/binding', '/method', '/event', '/form', '/computed', '/settergetter', '/watcher', '/component', '/providinject', '/slot', '/request', '/hooks'].includes(currentPath.value)
);

const isAdvancedActive = computed(() =>
  ['/advance'].includes(currentPath.value)
);

// Watch for route changes and adjust the section state
watchEffect(() => {
  if (isBasicActive.value) {
    isBasicOpen.value = true;
    isAdvancedOpen.value = false;
  } else if (isAdvancedActive.value) {
    isAdvancedOpen.value = true;
    isBasicOpen.value = false;
  }
});

// Toggle Basic section
const toggleBasic = () => {
  isBasicOpen.value = !isBasicOpen.value;
  if (isBasicOpen.value) {
    isAdvancedOpen.value = false;
  }
};

// Toggle Advanced section
const toggleAdvanced = () => {
  isAdvancedOpen.value = !isAdvancedOpen.value;
  if (isAdvancedOpen.value) {
    isBasicOpen.value = false;
  }
};
</script>


<template>
  <header class="sticky-top navigation">
    <div class=container>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a class=navbar-brand href="https://themefisher.com/products/godocs-bootstrap" target="_blank"><img class="img-fluid" src="./assets/images/logo.png" alt="godocs"></a>
      </nav>
    </div>
  </header>

  <!-- details page -->
  <section class="pt-5">
    <div class="container shadow section-sm rounded">
      <div class="row">

        <!-- sidebar -->
        <div class="col-lg-3">
          <ul class="sidenav">
            <!-- Basic Section -->
            <li :class="['sidelist', isBasicActive || isBasicOpen ? 'active parent' : '']">
              <a href="#" @click.prevent="toggleBasic">Basic</a>
              <ul v-show="isBasicOpen">
                <li :class="['sidelist', currentPath === '/binding' ? 'active parent' : '']">
                  <router-link to="/binding">Data Binding</router-link>
                </li>
                <li :class="['sidelist', currentPath === '/method' ? 'active parent' : '']">
                  <router-link to="/method">Method</router-link>
                </li>
                <li :class="['sidelist', currentPath === '/event' ? 'active parent' : '']">
                  <router-link to="/event">Event</router-link>
                </li>
                <li :class="['sidelist', currentPath === '/form' ? 'active parent' : '']">
                  <router-link to="/form">Form</router-link>
                </li>
                <li :class="['sidelist', currentPath === '/computed' ? 'active parent' : '']">
                  <router-link to="/computed">Computed Properties</router-link>
                </li>
                <li :class="['sidelist', currentPath === '/settergetter' ? 'active parent' : '']">
                  <router-link to="/settergetter">Setter Getter</router-link>
                </li>
                <li :class="['sidelist', currentPath === '/watcher' ? 'active parent' : '']">
                  <router-link to="/watcher">Watcher</router-link>
                </li>
                <li :class="['sidelist', currentPath === '/component' ? 'active parent' : '']">
                  <router-link to="/component">Component</router-link>
                </li>
                <li :class="['sidelist', currentPath === '/provideinject' ? 'active parent' : '']">
                  <router-link to="/provideinject">Provide Inject</router-link>
                </li>
                <li :class="['sidelist', currentPath === '/slot' ? 'active parent' : '']">
                  <router-link to="/slot">Slot</router-link>
                </li>
                <li :class="['sidelist', currentPath === '/request' ? 'active parent' : '']">
                  <router-link to="/request">Request</router-link>
                </li>
                <li :class="['sidelist', currentPath === '/hooks' ? 'active parent' : '']">
                  <router-link to="/hooks">Hooks</router-link>
                </li>
              </ul>
            </li>

            <!-- Advanced Section -->
            <li :class="['sidelist', isAdvancedActive || isAdvancedOpen ? 'active parent' : '']">
              <a href="#" @click.prevent="toggleAdvanced">Advanced</a>
              <ul v-show="isAdvancedOpen">
                <li :class="['sidelist', currentPath === '/advance' ? 'active parent' : '']">
                  <router-link to="/advance">Advance</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Dynamic Content Area -->
        <div class="col-lg-8">
          <div class="px-lg-5 px-4">
            <router-view></router-view>
          </div>
        </div>

      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="row d-flex justify-content-center py-5">
        <div class="col-lg-4 text-center mb-4 mb-lg-0">
          <a class="navbar-brand" href="https://themefisher.com/products/godocs-bootstrap" target="_blank">
            <img class="img-fluid" src="./assets/images/logo.png" alt="Hugo documentation theme">
          </a>
        </div>
      </div>
    </div>
  </footer>


</template>