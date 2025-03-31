<template>
    <h1 class="mb-5">Watcher</h1>

    <h4>Example 1: Volume Tracker (0-20)</h4>
    <span>Current Volume - {{ volume }}</span>
    <div class="mt-2">
        <button class="btn btn-outline-info btn-sm mr-2" @click="volume += 1">Increase</button>
        <button class="btn btn-outline-info btn-sm mr-2" @click="volume -= 1">Decrease</button>
    </div>
    <hr class="my-3">

    <h4>Example 2: Temperature Tracker</h4>
    <span>Current Temperature - {{ temperature }}°C</span>
    <div class="mt-2">
        <button class="btn btn-outline-info btn-sm mr-2" @click="temperature += 1">Increase</button>
        <button class="btn btn-outline-info btn-sm mr-2" @click="temperature -= 1">Decrease</button>
    </div>
    <hr class="my-3">

    <h4>Example 3: Name Change Alert</h4>
    <span>Your name is {{ name }}</span>
    <div class="mt-2">
        <button class="btn btn-outline-info btn-sm mr-2" @click="name = 'John'">Change to John</button>
        <button class="btn btn-outline-info btn-sm mr-2" @click="name = 'Alice'">Change to Alice</button>
    </div>
    <hr class="my-3">
</template>

<script>
export default {
    data() {
        return {
            volume: 0,
            temperature: 20,
            name: '',
        };
    },
    watch: {
        volume: {
            handler(newValue, oldValue) {
                if (newValue > oldValue && newValue === 16) {
                    alert('Listening to a high volume for a long time may damage your hearing');
                }
            },
            immediate: true,
        },
        temperature(newTemperature) {
            if (newTemperature > 30) {
                alert('Warning: High temperature!');
            } else if (newTemperature < 5) {
                alert('Warning: Low temperature!');
            }
        },
        name(newName, oldName) {
            if (newName === 'John') {
                alert('Hello, John! Welcome back!');
            } else if (newName === 'Alice') {
                alert('Hi Alice, nice to meet you!');
            }
        },
    },
    methods: {
        increaseCounter() {
            this.counter++;
        },
    },
};
</script>
