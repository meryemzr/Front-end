<template>
  <div class="dashboard">
    <h1>🎛️ Dashboard Admin</h1>
    <p>✅ Connecté en tant qu'admin ID : <strong>{{ userId }}</strong></p>

    <!-- Gestion des Spectacles -->
    <section>
      <h2>🎭 Gestion des Spectacles</h2>
      <button @click="goTo('ajout-spectacle')">➕ Ajouter</button>
      <button @click="goTo('modifier-spectacle')">✏️ Modifier</button>
      <button @click="goTo('supprimer-spectacle')">🗑️ Supprimer</button>
    </section>

    <!-- Gestion de l’Agenda -->
    <section>
      <h2>📆 Gestion de l’Agenda</h2>
      <button @click="goTo('ajout-evenement')">➕ Ajouter un événement</button>
      <button @click="goTo('modifier-evenement')">✏️ Modifier</button>
      <button @click="goTo('supprimer-evenement')">🗑️ Supprimer</button>
    </section>
<!-- Ajouter un admin-->

  <section>
  <h2>👤 Ajouter un nouvel admin</h2>
  <button @click="goTo('ajout-admin')">➕ Ajouter</button>
</section>


    <!-- Messages de contact -->
    <section>
      <h2>✉️ Messages reçus</h2>
      <button @click="goTo('messages-contact')">📨 Voir les messages</button>
    </section>

    <!-- Déconnexion -->
    <section>
      <button class="logout" @click="logout">🔓 Déconnexion</button>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminDashboard',
  data() {
    return {
      userId: null
    }
  },
  async created() {
    const token = localStorage.getItem('token')
    if (!token) {
      this.$router.push('/login')
      return
    }

    try {
      const response = await axios.get('https://back-end-bny2.onrender.com/api/admin/dashboard', {
        headers: { Authorization: `Bearer ${token}` }
      })
      this.userId = response.data.user.id
    } catch (error) {
      console.error('Erreur dashboard :', error)
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
    goTo(route) {
      this.$router.push(`/admin/${route}`)
    }
  }
}
</script>

<style scoped>
.dashboard {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #f9f9f9;
}
section {
  margin-bottom: 2rem;
}
button {
  margin: 0.5rem;
  padding: 0.6rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.logout {
  background-color: #dc3545;
}
h2 {
  margin-bottom: 0.5rem;
}
</style>
