<template>
  <div class="login-container">
    <h2>Connexion</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginPage',  // <-- Nom multi-mots pour éviter l'erreur ESLint
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://back-end-bny2.onrender.com/api/auth/login',
         {
          email: this.email,
          password: this.password
        })
        // Stocke le token dans localStorage
        localStorage.setItem('token', response.data.token)
        // Redirige vers le dashboard admin
        this.$router.push('/admin/dashboard')
      } catch (error) {
        alert(error.response?.data?.message || 'Erreur de connexion')
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
}
</style>
