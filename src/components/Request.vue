<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Base API URL
const API_URL = "https://jsonplaceholder.typicode.com/posts"; 

// State variables
const posts = ref([]);
const post = ref({ title: "", body: "" });
const editingPostId = ref(null);

// Fetch posts when component mounts
onMounted(() => {
  fetchPosts();
});

// **Fetch all posts**
const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    posts.value = response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

// **Create a new post**
const createPost = async () => {
  try {
    const response = await axios.post(API_URL, post.value);
    posts.value.unshift(response.data);
    post.value = { title: "", body: "" }; // Reset form
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

// **Edit an existing post**
const editPost = (postToEdit) => {
  editingPostId.value = postToEdit.id;
  post.value = { ...postToEdit };
};

// **Update a post**
const updatePost = async () => {
  if (!editingPostId.value) return;

  try {
    const response = await axios.put(`${API_URL}/${editingPostId.value}`, post.value);
    const index = posts.value.findIndex(p => p.id === editingPostId.value);
    posts.value[index] = response.data;
    post.value = { title: "", body: "" };
    editingPostId.value = null;
  } catch (error) {
    console.error("Error updating post:", error);
  }
};

// **Delete a post**
const deletePost = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    posts.value = posts.value.filter(post => post.id !== id);
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};
</script>

<template>
  <div class="container">
    <h1>Post Manager</h1>

    <!-- Form for Creating/Updating a Post -->
    <form @submit.prevent="editingPostId ? updatePost() : createPost()">
      <input v-model="post.title" type="text" placeholder="Title" required />
      <textarea v-model="post.body" placeholder="Body" required></textarea>
      <button type="submit">{{ editingPostId ? "Update" : "Create" }} Post</button>
    </form>

    <hr />

    <!-- List of Posts -->
    <h2>All Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
        <button @click="editPost(post)">Edit</button>
        <button @click="deletePost(post.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

