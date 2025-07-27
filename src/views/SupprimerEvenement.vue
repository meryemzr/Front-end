<template>
  <div class="supprimer-container">
    <h2>🗑️ Supprimer un Événement</h2>

    <ul>
      <li v-for="evt in evenements" :key="evt.id">
        <span>{{ evt.nom }} - {{ formatDate(evt.date) }}</span>
        <button @click="supprimer(evt.id)">❌ Supprimer</button>
      </li>
    </ul>

    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SupprimerEvenement',
  data() {
    return {
      evenements: [],
      message: ''
    }
  },
  async mounted() {
    await this.chargerEvenements()
  },
  methods: {
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString()
    },
    async chargerEvenements() {
      try {
        const res = await axios.get('https://back-end-bny2.onrender.com/api/evenements')
        this.evenements = res.data
      } catch (err) {
        this.message = '❌ Erreur lors du chargement des événements'
      }
    },
    async supprimer(id) {
      if (confirm('Voulez-vous vraiment supprimer cet événement ?')) {
        try {
          await axios.delete(`http://localhost:5000/api/evenements/${id}`)
          this.message = '✅ Événement supprimé avec succès'
          this.evenements = this.evenements.filter(e => e.id !== id)
        } catch (err) {
          this.message = '❌ Échec de la suppression'
        }
      }
    }
  }
}
</script>

<style scoped>
.supprimer-container {
  max-width: 600px;
  margin: 2rem auto;
  background: #fff3f3;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #f5c2c2;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
}
.message {
  margin-top: 1rem;
  font-weight: bold;
}
</style>
