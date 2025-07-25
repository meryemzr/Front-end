<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo"><span>🎭 DIEM ÉVÉNEMENTS</span></div>
      <ul class="nav-links">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/about">Présentation</router-link></li>
        <li><router-link to="/spectacles">Spectacles</router-link></li>
        <li><router-link to="/agenda">Agenda</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/login">Admin</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
}

.logo {
  color: #9b59b6;
  font-size: 24px;
}

.nav-links {
  list-style-type: none;
  display: flex;
  padding: 0; /* Supprime les marges par défaut */
  margin: 0; /* Supprime les marges par défaut */
}

.nav-links li {
  margin-left: 20px; /* Espacement entre les éléments */
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.nav-links a:hover {
  color: #9b59b6; /* Couleur au survol */
}
</style>