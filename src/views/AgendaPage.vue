<template>
  <div class="agenda">
    <h1>Agenda des Représentations</h1>

    <div class="filters">
      <label>
        Filtrer par lieu :
        <select v-model="lieuSelectionne">
          <option value="">Tous</option>
          <option v-for="lieu in lieuxDisponibles" :key="lieu" :value="lieu">{{ lieu }}</option>
        </select>
      </label>

      <label>
        Filtrer par genre :
        <select v-model="genreSelectionne">
          <option value="">Tous</option>
          <option v-for="genre in genresDisponibles" :key="genre" :value="genre">{{ genre }}</option>
        </select>
      </label>
    </div>

    <div v-if="evenementsFiltres.length === 0" class="no-events">
      Aucun événement à venir pour ces critères.
    </div>

    <ul v-else class="evenements">
      <li v-for="event in evenementsFiltres" :key="event._id" class="evenement">
        <h3>{{ event.nom }}</h3>
        <p><strong>Date :</strong> {{ formatDate(event.date) }}</p>
        <p><strong>Lieu :</strong> {{ event.lieu }}</p>
        <p><strong>Genre :</strong> {{ event.genre }}</p>
        <div class="exports">
          <a :href="getGoogleCalendarUrl(event)" target="_blank">🗓 Ajouter à Google Calendar</a> |
          <a :href="getOutlookCalendarUrl(event)" download="evenement.ics">📅 Exporter Outlook (.ics)</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'AgendaPage',
  setup() {
    const API_BASE = 'http://localhost:5000'; // adapte si besoin
    const evenements = ref([]);
    const lieuSelectionne = ref('');
    const genreSelectionne = ref('');

    const fetchEvenements = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/evenements`);
        evenements.value = res.data;
      } catch (err) {
        console.error('Erreur chargement événements:', err);
      }
    };

    onMounted(() => {
      fetchEvenements();
    });

    const lieuxDisponibles = computed(() => [...new Set(evenements.value.map(e => e.lieu))]);
    const genresDisponibles = computed(() => [...new Set(evenements.value.map(e => e.genre))]);

    const evenementsFiltres = computed(() =>
      evenements.value.filter(e => {
        const dateFutur = new Date(e.date) >= new Date();
        const matchLieu = !lieuSelectionne.value || e.lieu === lieuSelectionne.value;
        const matchGenre = !genreSelectionne.value || e.genre === genreSelectionne.value;
        return dateFutur && matchLieu && matchGenre;
      })
    );

    function formatDate(dateStr) {
      return new Date(dateStr).toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }

    function getGoogleCalendarUrl(event) {
      const start = new Date(event.date).toISOString().replace(/[-:]|\.\d{3}/g, '');
      const end = new Date(new Date(event.date).getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/[-:]|\.\d{3}/g, '');
      const url = new URL('https://www.google.com/calendar/render');
      url.searchParams.set('action', 'TEMPLATE');
      url.searchParams.set('text', event.nom);
      url.searchParams.set('dates', `${start}/${end}`);
      url.searchParams.set('details', `Lieu : ${event.lieu} | Genre : ${event.genre}`);
      url.searchParams.set('location', event.lieu);
      return url.toString();
    }

    function getOutlookCalendarUrl(event) {
      const start = new Date(event.date).toISOString().replace(/[-:]|\.\d{3}/g, '');
      const end = new Date(new Date(event.date).getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/[-:]|\.\d{3}/g, '');
      const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        `SUMMARY:${event.nom}`,
        `DTSTART:${start}`,
        `DTEND:${end}`,
        `LOCATION:${event.lieu}`,
        `DESCRIPTION:Genre: ${event.genre}`,
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\n');
      return `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;
    }

    return {
      evenementsFiltres,
      lieuSelectionne,
      genreSelectionne,
      lieuxDisponibles,
      genresDisponibles,
      formatDate,
      getGoogleCalendarUrl,
      getOutlookCalendarUrl
    };
  }
};
</script>

<style scoped>
.agenda {
  max-width: 800px;
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

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;
}

.no-events {
  text-align: center;
  color: #ff0000;
}

.evenements {
  list-style: none;
  padding: 0;
}

.evenement {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #fff;
  transition: box-shadow 0.3s;
}

.evenement:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.exports a {
  margin-right: 0.5rem;
}
</style>
