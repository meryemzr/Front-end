<template>
  <div class="modifier-container">
    <h2>✏️ Modifier un Événement</h2>

    <select v-model="selectedId" @change="chargerEvenement">
      <option disabled value="">-- Sélectionnez un événement --</option>
      <option v-for="e in evenements" :key="e.id" :value="e.id">
        {{ e.nom }} - {{ formatDate(e.date) }}
      </option>
    </select>

    <div v-if="form.nom">
      <form @submit.prevent="modifierEvenement">
        <input v-model="form.nom" placeholder="Nom" required />
        <input v-model="form.date" type="date" required />
        <input v-model="form.lieu" placeholder="Lieu" required />
        <input v-model="form.genre" placeholder="Genre" />

        <button type="submit">✅ Enregistrer les modifications</button>
      </form>
    </div>

    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ModifierEvenement',
  data() {
    return {
      evenements: [],
      selectedId: '',
      form: {
        nom: '',
        date: '',
        lieu: '',
        genre: ''
      },
      message: ''
    }
  },
  async mounted() {
    try {
      const res = await axios.get('https://back-end-bny2.onrender.com/api/evenements')
      this.evenements = res.data
    } catch (err) {
      this.message = 'Erreur de chargement des événements'
    }
  },
  methods: {
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString()
    },
    chargerEvenement() {
      const evt = this.evenements.find(e => e.id === this.selectedId)
      if (evt) {
        this.form = { ...evt, date: evt.date.substring(0, 10) } // format date pour input[type="date"]
      }
    },
    async modifierEvenement() {
      try {
        await axios.put(`http://localhost:5000/api/evenements/${this.selectedId}`, this.form)
        this.message = '✅ Événement modifié avec succès'
      } catch (err) {
        this.message = '❌ Erreur lors de la modification'
      }
    }
  }
}
</script>

<style scoped>
.modifier-container {
  max-width: 600px;
  margin: 2rem auto;
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 12px;
}
select, input {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.6rem;
}
button {
  background-color: #28a745;
  color: white;
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.message {
  margin-top: 1rem;
  font-weight: bold;
}
</style>
