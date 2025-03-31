<template>
    <h1 class="mb-5">Component</h1>

    <h4>Example 1</h4>
    <Card />
    <hr class="my-3">

    <h4>Example 2</h4>
    <Greet name="Moana" age=5 />
    <Greet :name="name" :age='age' />
    <hr class="my-3">

    <h4>Example 3</h4>
    <Button text="Click Me" buttonClass="btn-success" />
    <Button text="Submit" buttonClass="btn-danger" />
    <hr class="my-3">

    <h4>Example 4</h4>
    <div class="row">
        <div class="col-6">
            <ItemList :items="['Item 1', 'Item 2', 'Item 3']" />
        </div>
    </div>
    <hr class="my-3">

    <h4>Example 5</h4>
    <div>
        <!-- Trigger Button -->
        <button class="btn btn-primary btn-sm" @click="$refs.modal.open()">Open Modal</button>

        <!-- Modal Component -->
        <Modal ref="modal">
            <h4>Modal Content</h4>
            <p>This is some content inside the modal. You can place any content you want here!</p>
        </Modal>
    </div>
    <hr class="my-3">

    <h4>Example 6</h4>
    <div class="mb-4">
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Likes</th>
                    <th scope="col">Publish Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(article, index) in articles" :key="index">
                    <td>{{ article.title }}</td>
                    <td>{{ article.likes }}</td>
                    <td>{{ formattedDate }}</td>
                    <td>{{ article.isPublished ? 'Public' : 'Private' }}</td>
                    <td>
                        <a href="#" class="btn btn-primary btn-sm">Details</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <hr class="my-3">


    <div class="d-flex flex-wrap">
        <Article v-for="(article, index) in articles" :key="index" :title="article.title" :likes="article.likes"
            :isPublished="article.isPublished" />
    </div>


</template>

<script>
import Card from './Card.vue';
import Greet from './ComponentProps.vue';
import Button from './Button.vue';
import ItemList from './List.vue';
import Modal from './Modal.vue';
import Article from './Article.vue';

export default {
    data() {
        return {
            /* Example 2 */
            name: 'Kamal Vaia',
            age: 35,
            /* Example 6 */
            articles: [
                { title: 'Matrivumi', likes: 555, isPublished: true },
                { title: 'title2', likes: 11, isPublished: false },
                { title: 'Article 3', likes: 42, isPublished: true },
                { title: 'Article 4', likes: 78, isPublished: false },
            ],
        };
    },
    /* Example 6 */
    computed: {
        formattedDate() {
            const date = new Date();
            return date.toLocaleDateString();
        },
    },
    components: {
        Card,
        Greet,
        Button,
        ItemList,
        Modal,
        Article
    },
};
</script>