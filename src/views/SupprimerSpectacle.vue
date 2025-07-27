<template>
  <div class="container">
    <h2>🗑️ Supprimer un Spectacle</h2>

    <div v-if="spectacles.length === 0">
      <p>Aucun spectacle disponible.</p>
    </div>

    <ul class="spectacle-list">
      <li v-for="spectacle in spectacles" :key="spectacle._id" class="spectacle-item">
        <h3>{{ spectacle.titre }}</h3>
        <p><strong>Synopsis :</strong> {{ spectacle.synopsis }}</p>
        <button @click="supprimerSpectacle(spectacle._id)">Supprimer</button>
      </li>
    </ul>

    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SupprimerSpectacle',
  data() {
    return {
      spectacles: [],
      message: ''
    }
  },
  async created() {
    await this.chargerSpectacles()
  },
  methods: {
    async chargerSpectacles() {
      try {
        const res = await axios.get('https://back-end-bny2.onrender.com/api/spectacles')
        this.spectacles = res.data
      } catch (err) {
        console.error('Erreur lors du chargement des spectacles:', err)
      }
    },
    async supprimerSpectacle(id) {
      if (confirm('Confirmer la suppression de ce spectacle ?')) {
        try {
          await axios.delete(`http://localhost:5000/api/spectacles/${id}`)
          this.spectacles = this.spectacles.filter(s => s._id !== id)
          this.message = '✅ Spectacle supprimé avec succès.'
        } catch (err) {
          this.message = '❌ Erreur lors de la suppression.'
        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
}
.spectacle-list {
  list-style: none;
  padding: 0;
}
.spectacle-item {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
}
button {
  background-color: #e53935;
  color: white;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
.message {
  margin-top: 20px;
  color: green;
}
</style>
