<script>
export default {
  data() {
    return {
      count: 0,
      isMounted: true, // Controls if the component should be shown
    };
  },
  beforeCreate() {
    console.log('Parent beforeCreate() - Component is being initialized');
  },
  created() {
    console.log('Parent created() - Component is created, but DOM is not yet available');
  },
  beforeMount() {
    console.log('Parent beforeMount() - Template is compiled, but not yet attached to the DOM');
  },
  mounted() {
    console.log('Parent mounted() - Component is now mounted in the DOM');
  },
  beforeUpdate() {
    console.log('Parent beforeUpdate() - Reactive data is changed, but DOM update hasn’t happened yet');
  },
  updated() {
    console.log('Parent updated() - DOM has been updated after data changes');
  },
  beforeUnmount() {
    console.log('Parent beforeUnmount() - Component is about to be removed from the DOM');
  },
  unmounted() {
    console.log('Parent unmounted() - Component is completely removed from the DOM');
  },
  methods: {
    increment() {
      this.count++;
    },
    destroyComponent() {
      this.isMounted = false; // This will trigger unmounting
    },
  },
};
</script>

<template>
  <div v-if="isMounted">
    <h2>Vue Lifecycle Hooks Demo</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="destroyComponent">Destroy Component</button>
  </div>
</template>
