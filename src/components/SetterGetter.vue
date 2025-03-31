<template>
    <h1 class="mb-5">Setter Getter</h1>

    <h4>Example 1: Age to Birth Year</h4>
    <input v-model.number="age" type="number" placeholder="Enter your age" />
    <p>Birth Year: {{ birthYear || '' }}</p>
    <hr class="my-3">

    <h4>Example 2: Full Name</h4>
    <input v-model="fullName" type="text" placeholder="Enter full name" />
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>
    <hr class="my-3">

    <h4>Example 3: Price with Tax</h4>
    <input v-model.number="priceWithTax" type="number" placeholder="Enter price with tax" />
    <p>Base Price: {{ basePrice }}</p>
    <hr class="my-3">

    <h4>Example 4: Temperature Converter</h4>
    <input v-model.number="celsius" type="number" placeholder="Enter temperature in Celsius" />
    <p>Fahrenheit: {{ fahrenheit }}</p>
    <hr class="my-3">

    <h4>Example 5: Character Count Limiter</h4>
    <textarea v-model="message" placeholder="Type your message"></textarea>
    <p>Character Count: {{ message.length }} / 100</p>

</template>

<script>
export default {
    data() {
        return {
            /* Example 1 */
            birthYear: null,
            /* Example 2 */
            firstName: '',
            lastName: '',
            /* Example 3 */
            basePrice: 100,
            taxRate: 0.2, // 20% tax
            /* Example 4 */
            celsius: 0,
            /* Example 5 */
            msg: '',
        };
    },
    computed: {
        /* Example 1 */
        age: {
            get() {
                return this.birthYear ? new Date().getFullYear() - this.birthYear : '';
            },
            set(value) {
                this.birthYear = value ? new Date().getFullYear() - value : null;
            },
        },
        /* Example 2 */
        fullName: {
            get() {
                return `${this.firstName} ${this.lastName}`.trim();
            },
            set(value) {
                const parts = value.split(' ');
                this.firstName = parts[0] || '';
                this.lastName = parts.slice(1).join(' ') || '';
            },
        },
        /* Example 3 */
        priceWithTax: {
            get() {
                return this.basePrice * (1 + this.taxRate);
            },
            set(value) {
                this.basePrice = value / (1 + this.taxRate);
            },
        },
        /* Example 4 */
        fahrenheit: {
            get() {
                return (this.celsius * 9) / 5 + 32;
            },
            set(value) {
                this.celsius = ((value - 32) * 5) / 9;
            },
        },
        /* Example 5 */
        message: {
            get() {
                return this.msg;
            },
            set(value) {
                this.msg = value.length > 100 ? value.substring(0, 100) : value;
            },
        },
    },
};
</script>
