<template>
  <div class="container my-5">
    <h1 class="text-center mb-4 fw-bold">Contactez-nous</h1>

    <div v-if="successMessage" class="alert alert-success" role="alert">
      {{ successMessage }}
    </div>

    <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="nom" class="form-label">Nom complet</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          v-model="form.nom"
          required
        />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Adresse email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="form.email"
          required
        />
      </div>

      <div class="mb-3">
        <label for="sujet" class="form-label">Sujet</label>
        <input
          type="text"
          class="form-control"
          id="sujet"
          v-model="form.sujet"
          required
        />
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea
          class="form-control"
          id="message"
          rows="5"
          v-model="form.message"
          required
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Envoyer</button>
    </form>

    <!-- Section Réseaux Sociaux -->
    <div class="social-media mt-5 text-center">
      <h2>Suivez-nous sur les réseaux sociaux</h2>
      <div class="icons mt-3 d-flex justify-content-center gap-4">
        <a
          href="https://www.instagram.com/ton_profil"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#E1306C" viewBox="0 0 24 24">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.6.6.3 1.1.7 1.6 1.2s.9 1 .9 1.6c.3.5.5 1.3.6 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.6 2.5-.3.6-.7 1.1-1.2 1.6s-1 .9-1.6.9c-.5.3-1.3.5-2.5.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.6-.6-.3-1.1-.7-1.6-1.2s-.9-1-.9-1.6c-.3-.5-.5-1.3-.6-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .6-2.5.3-.6.7-1.1 1.2-1.6s1-.9 1.6-.9c.5-.3 1.3-.5 2.5-.6C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.8.5-1.2.9-.4.4-.7.8-.9 1.2-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.5.8.9 1.2.4.4.8.7 1.2.9.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.8-.5 1.2-.9.4-.4.7-.8.9-1.2.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.5-.8-.9-1.2-.4-.4-.8-.7-1.2-.9-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.9a5.9 5.9 0 1 1 0 11.8 5.9 5.9 0 0 1 0-11.8zm0 9.7a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6zm6-10.5a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z"/>
          </svg>
        </a>

        <a
          href="https://www.facebook.com/ton_profil"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82V14.706h-3.12V11.24h3.12V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.766v2.316h3.59l-.467 3.466h-3.123V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0"/>
          </svg>
        </a>

        <a
          href="https://www.youtube.com/ton_chaine"
          target="_blank"
          rel="noopener"
          aria-label="YouTube"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FF0000" viewBox="0 0 24 24">
            <path d="M19.615 3.184a3.003 3.003 0 0 1 2.121 2.12C22 7.261 22 12 22 12s0 4.739-.264 6.696a3.003 3.003 0 0 1-2.121 2.12C17.739 21 12 21 12 21s-5.739 0-7.696-.184a3.003 3.003 0 0 1-2.12-2.12C2 16.739 2 12 2 12s0-4.739.184-6.696a3.003 3.003 0 0 1 2.12-2.12C6.261 3 12 3 12 3s5.739 0 7.615.184zM10 8.75v6.5l5.5-3.25L10 8.75z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        nom: "",
        email: "",
        sujet: "",
        message: "",
      },
      successMessage: "",
    };
  },
  methods: {
    async handleSubmit() {
      if (
        this.form.nom &&
        this.form.email &&
        this.form.sujet &&
        this.form.message
      ) {
        try {
          const response = await axios.post('https://back-end-bny2.onrender.com/api/contacts', this.form);
          if (response.data.success) {
            this.successMessage = "Votre message a été envoyé avec succès ✅";
            this.form = { nom: "", email: "", sujet: "", message: "" };
            setTimeout(() => {
              this.successMessage = "";
            }, 5000);
          }
        } catch (error) {
          console.error("Erreur lors de l'envoi :", error.response?.data || error);
          alert("Une erreur est survenue, veuillez réessayer.");
        }
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: #004080;
}
form {
  max-width: 600px;
  margin: 0 auto;
}
.social-media h2 {
  color: #004080;
}
.icons a svg {
  transition: transform 0.3s ease;
}
.icons a:hover svg {
  transform: scale(1.1);
  opacity: 0.8;
}
</style>
