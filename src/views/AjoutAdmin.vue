<template>
  <div class="admin-form">
    <h2>👤 Ajouter un nouvel Admin</h2>
    <form @submit.prevent="ajouterAdmin">
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input v-model="form.password" type="password" placeholder="Mot de passe" required />
      <button type="submit">➕ Ajouter</button>
    </form>
    <p v-if="message" :class="{'success': success, 'error': !success}">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AjoutAdmin',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      message: '',
      success: false
    }
  },
  methods: {
    async ajouterAdmin() {
      const token = localStorage.getItem('token')
      try {
        const res = await axios.post('http://localhost:5000/api/admin/ajout-admin', this.form, {
          headers: { Authorization: `Bearer ${token}` }
        })
        this.message = res.data.message
        this.success = true
        this.form.email = ''
        this.form.password = ''
      } catch (err) {
        this.message = err.response?.data?.message || 'Erreur lors de l’ajout'
        this.success = false
      }
    }
  }
}
</script>

<style scoped>
.admin-form {
  max-width: 500px;
  margin: 2rem auto;
  background-color: #f2f2f2;
  padding: 2rem;
  border-radius: 12px;
}
input {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.6rem;
}
button {
  padding: 0.6rem 1rem;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
}
.success {
  color: green;
}
.error {
  color: red;
}
</style>
