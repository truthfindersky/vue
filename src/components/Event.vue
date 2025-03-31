<template>
  <div>
    <h1 class="mb-5">Event Handling</h1>

    <h4>Click</h4>
    <p>{{ name }}</p>
    <button class="btn btn-info btn-sm" @click="changeName()">Change name</button>
    <hr class="my-3">





    <h4>Count</h4>
    <p>{{ count }}</p>
    <div>
      <button class="btn btn-primary btn-sm mr-2" @click="increment(1, $event)">Increment</button>
      <button class="btn btn-primary btn-sm mr-2" @click="decrement(1)">Decrement</button>
      <button class="btn btn-secondary btn-sm mr-2" @click="increment(5)">Increment 5</button>
      <button class="btn btn-secondary btn-sm mr-2" @click="decrement(5)">Decrement 5</button>
    </div>
    <hr class="my-3">





    <!-- Example 1: Form Submission -->
    <h4>Form Submission</h4>
    <form @submit.prevent="handleSubmit" class="d-flex">
      <input type="text" class="form-control form-control-lg me-2" v-model="username"
        placeholder="Enter your username" />
      <button type="submit" class="btn btn-secondary">Submit</button>
    </form>
    <p v-if="submitted">Submitted Username: {{ username }}</p>

    <hr class="my-3">





    <!-- Example 2: Mouse Events -->
    <h4>Mouse Events</h4>
    <button class="btn btn-warning btn-sm" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave"
      @click="handleClick">
      Hover or Click Me
    </button>
    <p>{{ message }}</p>
    <hr class="my-3">





    <!-- Example 3: Keyboard Events -->
    <h4>Keyboard Events</h4>
    <input type="text" @keyup="handleKeyUp" placeholder="Type something..." />
    <p>You pressed: {{ key }}</p>
    <hr class="my-3">





    <!-- Example 4: Child-to-Parent Communication with Custom Event -->
    <h4>Child-to-Parent Communication</h4>
    <EventChildComponent @message-sent="handleMessage" />
    <p>{{ messageFromChild }}</p>
    <hr class="my-3">





    <!-- Example 5: Event Modifiers -->
    <h4>Event Modifiers</h4>
    <button class="btn btn-light btn-sm" @click="handleClickEvent">Check console</button>

    <div class="mt-2">
      <a href="#" @click.prevent="handleLinkClick">Don't follow link</a>
    </div>

    <div @click.capture="handleCapture">Select This text</div>
    <hr class="my-3">





    <!-- Example 6: Dynamic Arguments for Event Handling -->
    <h4>Dynamic Arguments</h4>
    <button class="btn btn-light btn-sm mr-2" @click="changeColor('pink')">Pink</button>
    <button class="btn btn-light btn-sm mr-2" @click="changeColor('blue')">Blue</button>
    <p :style="{ color: currentColor }">The current color is {{ currentColor }}</p>

  </div>
</template>

<script>
import EventChildComponent from './EventChildComponent.vue';

export default {
  data() {
    return {
      name: 'Moana',
      count: 0,

      /* Example 1: Form Submission */
      username: '',
      submitted: false,


      message: 'Hover or click on the button',
      key: '',
      messageFromChild: '',
      currentColor: 'black',
    };
  },
  components: {
    EventChildComponent,
  },
  methods: {
    changeName(event) {
      this.name = 'Maherin';
      console.log('Event', event);
    },


    increment(num, event) {
      this.count += num;
      console.log('Increment Event:', event);
    },
    decrement(num) {
      this.count -= num;
    },


    // Example 1: Form Submission
    handleSubmit() {
      this.submitted = true;
      console.log('Form submitted with username:', this.username);
    },

    // Example 2: Mouse Events
    handleMouseOver() {
      this.message = 'Mouse is over the button';
    },
    handleMouseLeave() {
      this.message = 'Mouse has left the button';
    },
    handleClick() {
      this.message = 'Button was clicked';
    },

    // Example 3: Keyboard Events
    handleKeyUp(event) {
      this.key = event.key;
      console.log('Key pressed:', event.key);
    },

    // Example 4: Child-to-Parent Communication with Custom Event
    handleMessage(message) {
      this.messageFromChild = message;
    },

    // Example 5: Event Modifiers
    handleClickEvent(event) {
      console.log('Button clicked:', event);
    },
    handleLinkClick(event) {
      console.log('Link clicked, but default behavior prevented');
    },
    handleCapture(event) {
      console.log('Capture phase event triggered');
    },

    // Example 6: Dynamic Arguments for Event Handling
    changeColor(color) {
      this.currentColor = color;
    },

    // Example 7: Window Resize Event
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  created() {
    // Listening for window resize events
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    // Cleanup listener before component is destroyed
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style></style>
