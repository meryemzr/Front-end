<template>
  <div class="form-container">
    <h2>📅 Ajouter un Événement</h2>
    <form @submit.prevent="ajouterEvenement">
      <input v-model="form.nom" type="text" placeholder="Nom de l'événement" required />
      <input v-model="form.date" type="date" required />
      <input v-model="form.lieu" type="text" placeholder="Lieu" required />
      <input v-model="form.genre" type="text" placeholder="Genre" />

      <button type="submit">Ajouter</button>
    </form>

    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AjoutEvenement',
  data() {
    return {
      form: {
        nom: '',
        date: '',
        lieu: '',
        genre: ''
      },
      message: ''
    }
  },
  methods: {
    async ajouterEvenement() {
      try {
        const response = await axios.post('http://localhost:5000/api/evenements', this.form)
        this.message = `✅ Événement ajouté : ${response.data.nom}`
        this.form = { nom: '', date: '', lieu: '', genre: '' } // Réinitialise le formulaire
      } catch (error) {
        this.message = `❌ Erreur : ${error.response?.data?.error || 'Serveur inaccessible'}`
      }
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 2rem auto;
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 12px;
}
input {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
}
button {
  background-color: #007bff;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.message {
  margin-top: 1rem;
  font-weight: bold;
}
</style>
