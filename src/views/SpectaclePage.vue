<template>
  <div class="catalogue">
    <h1>Catalogue de Spectacles</h1>

    <div class="liste-spectacles" v-if="!spectacleSelectionne">
      <ul>
        <li v-for="show in spectacles" :key="show._id" class="spectacle-item" @click="selectSpectacle(show)">
          <img :src="getMediaUrl(show.visuel)" :alt="`Visuel de ${show.titre}`" />
          <h2>{{ show.titre }}</h2>
          <p>{{ show.synopsis ? show.synopsis.substring(0, 100) : '' }}...</p>
        </li>
      </ul>
    </div>

    <div class="details-spectacle" v-else>
      <button @click="spectacleSelectionne = null" class="retour">← Retour à la liste</button>

      <h2>{{ spectacleSelectionne.titre }}</h2>
      <img :src="getMediaUrl(spectacleSelectionne.visuel)" :alt="`Visuel de ${spectacleSelectionne.titre}`" class="visuel-detail" />

      <section class="section-synopsis">
        <h3>Synopsis</h3>
        <p>{{ spectacleSelectionne.synopsis }}</p>
      </section>

      <section class="section-distribution" v-if="spectacleSelectionne.distribution && spectacleSelectionne.distribution.length">
        <h3>Distribution</h3>
        <ul>
          <li v-for="(artiste, idx) in spectacleSelectionne.distribution" :key="idx">{{ artiste }}</li>
        </ul>
      </section>

      <section class="section-fiche-technique" v-if="spectacleSelectionne.ficheTechnique">
        <h3>Fiche Technique</h3>
        <pre>{{ spectacleSelectionne.ficheTechnique }}</pre>
      </section>

      <section class="section-dossier-presse" v-if="spectacleSelectionne.dossierPresse">
        <h3>Dossier de Presse</h3>
        <a :href="getMediaUrl(spectacleSelectionne.dossierPresse)" target="_blank" rel="noopener">
          Télécharger le dossier de presse (PDF)
        </a>
      </section>

      <section class="section-video" v-if="spectacleSelectionne.video">
        <h3>Vidéo</h3>
        <video controls :src="getMediaUrl(spectacleSelectionne.video)" width="100%"></video>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'SpectaclesPage',
  setup() {
    const spectacles = ref([]);
    const spectacleSelectionne = ref(null);
    const API_BASE = 'http://localhost:5000';

    const fetchSpectacles = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/spectacles`);
        spectacles.value = res.data;
      } catch (err) {
        console.error('Erreur de chargement des spectacles:', err);
      }
    };

    const selectSpectacle = (show) => {
      spectacleSelectionne.value = show;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Retourne l'URL complète vers les fichiers média exposés par le serveur
    const getMediaUrl = (filename) => {
      if (!filename) return '';
      if (filename.startsWith('http')) return filename;
      return `${API_BASE}/media/${filename}`;
    };

    onMounted(() => {
      fetchSpectacles();
    });

    return {
      spectacles,
      spectacleSelectionne,
      selectSpectacle,
      getMediaUrl,
    };
  },
};
</script>

<style scoped>
/* Ton style inchangé */
.catalogue {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

.liste-spectacles ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.spectacle-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  background-color: #fff;
}

.spectacle-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.spectacle-item img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
}

.details-spectacle {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
}

.retour {
  margin-bottom: 1rem;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
}

.visuel-detail {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.section-synopsis,
.section-distribution,
.section-fiche-technique,
.section-dossier-presse,
.section-video {
  margin-bottom: 1.5rem;
}

.section-fiche-technique pre {
  background: #f9f9f9;
  padding: 1rem;
  white-space: pre-wrap;
}
</style>
