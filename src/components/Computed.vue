<template>
  <!-- Computed Properties -->
  <h1 class="mb-5">Computed Properties</h1>

  <!-- example 1 -->
  <h4>Example 1</h4>
  <p>Binding: Fullname - {{ firstName }} {{ lastName }}</p>
  <p>Computed: Fullname - {{ fullName }}</p>

  <!-- example 2 -->
  <h4>Example 2</h4>
  <p>Binding: Total - {{items.reduce((total, curr) => (total = total + curr.price), 0)}}</p>
  <p>Method: Total - {{ getTotal() }}</p>
  <p>Computed: Total - {{ total }}</p>
  <p>Computed: Item Count - {{ itemCount }}</p>
  <p>Computed: Expensive Items (Above $100) - {{ expensiveItems.length }}</p>
  <p>Computed: Discounted Total (10% off) - {{ discountedTotal }}</p>
  <p>Computed: First Item - {{ firstItem ? firstItem.title : 'No items' }}</p>

  <button @click="items.push({ id: 4, title: 'Keyboard', price: 50 })">
    Add item
  </button>

  
</template>

<script>
export default {
  data() {
    return {
      /* example 1 */
      firstName: 'Bruce',
      lastName: 'Wayne',

      /* example 2 */
      items: [
        { id: 1, title: 'TV', price: 100 },
        { id: 2, title: 'Phone', price: 200 },
        { id: 3, title: 'Laptop', price: 300 },
      ],
    };
  },
  methods: {
    getTotal() {
      console.log('getTotal method');
      return this.items.reduce((total, curr) => total + curr.price, 0);
    },
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
    },
    total() {
      console.log('total computed property');
      return this.items.reduce((total, curr) => total + curr.price, 0);
    },
    itemCount() {
      return this.items.length;
    },
    expensiveItems() {
      return this.items.filter(item => item.price > 100);
    },
    discountedTotal() {
      return this.total * 0.9;
    },
    firstItem() {
      return this.items.length > 0 ? this.items[0] : null;
    },
  },
};
</script>

<style></style>
