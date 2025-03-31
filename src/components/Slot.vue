<template>
    <h1 class="mb-5">Slot</h1>

    <h4>Example 1</h4>
    <BaseCard>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
        </ul>
    </BaseCard>
    <hr class="my-3">

    <h4>Example 2: Named Slots</h4>
    <BaseLayout>
        <template #header>
            <h5>Page Title</h5>
        </template>

        <p>Main content goes here.</p>

        <template #footer>
            <p>Footer content.</p>
        </template>
    </BaseLayout>
    <hr class="my-3">


    <h4>Example 3: Scoped Slots (Slot Props)</h4>
    <UserList v-slot="{ users }">
        <li v-for="user in users" :key="user">{{ user }}</li>
    </UserList>


</template>

<script>
import BaseCard from './BaseCard.vue';
import BaseLayout from './Layout.vue';
import UserList from './UserList.vue';

export default {
    data() {
        return {
        };
    },
    components: {
        BaseCard,
        BaseLayout,
        UserList,
    },
};
</script>