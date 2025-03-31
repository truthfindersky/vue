<template>
    <p>Hello: {{ name }} {{ age }}</p>
</template>

<script>
export default {
    name: 'ComponentProps',
    props: ['name', 'age']
}
</script>

<style scoped></style>