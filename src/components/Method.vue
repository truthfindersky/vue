<template>
  <h1 class="mb-5">Method</h1>

  <!-- Simple Math -->
  <p>Simple math: {{ 2 + 3 + 5 }}</p>

  <!-- Add Method -->
  <p>Add method - {{ add(2, 3, 5) }}</p>

  <!-- Multiply Method -->
  <p>Multiply method - {{ multiply(10) }}</p>
  <p>Multiply method with baseValue - {{ multiply(baseValue) }}</p>

  <!-- Subtract Method -->
  <p>Subtract method - {{ subtract(10, 5) }}</p>

  <!-- Divide Method -->
  <p>Divide method - {{ divide(10, 2) }}</p>
  <p>Divide method by baseValue - {{ divide(10, baseValue) }}</p>

  <!-- Format Number Method -->
  <p>Formatted number - {{ formatNumber(1234567.89) }}</p>

  <!-- Capitalize String -->
  <p>Capitalized String - {{ capitalize("hello world") }}</p>

  <!-- Check if number is even or odd -->
  <p>Is number 4 even? {{ isEven(4) }}</p>
  <p>Is number 7 odd? {{ isOdd(7) }}</p>

  <!-- Get Current Date -->
  <p>Current Date: {{ getCurrentDate() }}</p>
</template>

<script>
export default {
  data() {
    return {
      baseMultiplier: 5,
      baseValue: 2,
    };
  },
  methods: {
    // Add three numbers
    add(a, b, c) {
      return a + b + c;
    },

    // Multiply a number by baseMultiplier
    multiply(num) {
      return num * this.baseMultiplier;
    },

    // Subtract two numbers
    subtract(a, b) {
      return a - b;
    },

    // Divide two numbers
    divide(a, b) {
      if (b === 0) return 'Cannot divide by zero';
      return a / b;
    },

    // Format a number with commas
    formatNumber(num) {
      return num.toLocaleString();
    },

    // Capitalize first letter of each word
    capitalize(str) {
      return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    },

    // Check if a number is even
    isEven(num) {
      return num % 2 === 0;
    },

    // Check if a number is odd
    isOdd(num) {
      return num % 2 !== 0;
    },

    // Get current date in YYYY-MM-DD format
    getCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  }
};
</script>

