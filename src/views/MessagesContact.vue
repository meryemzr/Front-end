<template>
  <div class="messages-container">
    <h2>Messages reçus</h2>
    <div v-if="loading">Chargement des messages...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <ul v-if="!loading && messages.length">
      <li v-for="msg in messages" :key="msg._id" class="message-item">
        <h3>{{ msg.sujet }}</h3>
        <p><strong>Nom :</strong> {{ msg.nom }}</p>
        <p><strong>Email :</strong> {{ msg.email }}</p>
        <p><strong>Message :</strong> {{ msg.message }}</p>
        <p><small>Envoyé le : {{ formatDate(msg.dateEnvoi) }}</small></p>
      </li>
    </ul>
    <div v-if="!loading && messages.length === 0">Aucun message reçu.</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MessagesContact',
  data() {
    return {
      messages: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchMessages() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('http://localhost:5000/api/contacts');
        this.messages = response.data;
      } catch (err) {
        this.error = 'Erreur lors du chargement des messages.';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateStr) {
      const d = new Date(dateStr);
      return d.toLocaleString();
    },
  },
  mounted() {
    this.fetchMessages();
  },
};
</script>

<style scoped>
.messages-container {
  max-width: 700px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}
.message-item {
  background-color: #f4f4f4;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
}
.error {
  color: red;
}
</style>
