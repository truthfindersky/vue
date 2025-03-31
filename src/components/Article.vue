<template>
    <div class="card border-0 mb-4 mr-3 shadow-sm">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                    <h5 class="card-title">{{ title }}</h5>
                    <p class="card-text mb-1">
                        <strong>Likes:</strong> {{ likes }}
                    </p>
                    <p class="card-text">
                        <small class="text-muted">Published on: {{ formattedDate }}</small>
                    </p>
                </div>
                <a href="#" class="btn btn-info btn-sm">Details</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: {
        title: {
            type: String,
            required: true,
            default: 'Article default title',
        },
        likes: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            required: true,
        },
    },
    computed: {
        formattedDate() {
            const date = new Date();
            return date.toLocaleDateString();
        },
    },
    inheritAttrs: false,
};
</script>