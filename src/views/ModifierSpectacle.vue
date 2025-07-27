<template>
  <div class="form-container">
    <h2>Modifier Spectacle</h2>
    <form @submit.prevent="modifierSpectacle">
      <input v-model="form.titre" placeholder="Titre" required />
      <input v-model="form.visuel" placeholder="URL visuel" />
      <textarea v-model="form.synopsis" placeholder="Synopsis"></textarea>
      <textarea v-model="form.distribution" placeholder="Distribution (séparé par des virgules)"></textarea>
      <textarea v-model="form.ficheTechnique" placeholder="Fiche technique"></textarea>
      <textarea v-model="form.dossierPresse" placeholder="Dossier de presse"></textarea>
      <button type="submit">Enregistrer les modifications</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ModifierSpectacle',
  data() {
    return {
      form: {
        titre: '',
        visuel: '',
        synopsis: '',
        distribution: '',
        ficheTechnique: '',
        dossierPresse: ''
      },
      message: ''
    }
  },
  async created() {
    const id = this.$route.params.id
    try {
      const response = await axios.get(`https://back-end-bny2.onrender.com/api/spectacles/${id}`)
      const spectacle = response.data

      // Pré-remplir le formulaire avec les données reçues
      this.form.titre = spectacle.titre
      this.form.visuel = spectacle.visuel
      this.form.synopsis = spectacle.synopsis
      this.form.distribution = spectacle.distribution.join(', ') // tableau => string
      this.form.ficheTechnique = spectacle.ficheTechnique
      this.form.dossierPresse = spectacle.dossierpresse || ''
    } catch (err) {
      this.message = 'Erreur lors du chargement du spectacle'
    }
  },
  methods: {
    async modifierSpectacle() {
      const id = this.$route.params.id

      // Transformer la chaîne distribution en tableau
      const payload = {
        ...this.form,
        distribution: this.form.distribution.split(',').map(item => item.trim())
      }

      try {
        await axios.put(`https://back-end-bny2.onrender.com/api/spectacles/${id}`, payload)
        this.message = 'Spectacle modifié avec succès !'
      } catch (err) {
        this.message = err.response?.data?.message || 'Erreur lors de la modification'
      }
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 30px auto;
}
input, textarea {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
</style>
