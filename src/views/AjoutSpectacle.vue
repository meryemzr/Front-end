<template>
  <div class="form-container">
    <h2>Ajouter un Spectacle</h2>
    <form @submit.prevent="ajouterSpectacle">
      <input v-model="form.titre" placeholder="Titre" required />
      <input v-model="form.visuel" placeholder="URL visuel ou nom de fichier" />
      <textarea v-model="form.synopsis" placeholder="Synopsis" />
      <textarea v-model="form.distribution" placeholder="Distribution (séparée par virgules)" />
      <textarea v-model="form.ficheTechnique" placeholder="Fiche technique" />
      <textarea v-model="form.dossierPresse" placeholder="Dossier de presse" />
      <button type="submit">Ajouter</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AjoutSpectacle',
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
  methods: {
    async ajouterSpectacle() {
      try {
        const data = {
          ...this.form,
          dossierpresse: this.form.dossierPresse,
          distribution: this.form.distribution
            ? this.form.distribution.split(',').map(d => d.trim())
            : []
        }
        await axios.post('http://localhost:5000/api/spectacles', data)
        this.message = 'Spectacle ajouté avec succès !'
        this.form = {
          titre: '',
          visuel: '',
          synopsis: '',
          distribution: '',
          ficheTechnique: '',
          dossierPresse: ''
        }
      } catch (err) {
        this.message = err.response?.data?.message || 'Erreur lors de l’ajout'
      }
    }
  }
}
</script>
