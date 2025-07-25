<template>
  <div>
    <!-- Videos -->
    <div
      id="videoCarousel"
      class="carousel slide video-container"
      data-bs-ride="carousel"
      data-bs-interval="7000"
    >
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="['carousel-item', { active: activeIndex === index }]"
          style="height: 80vh; position: relative; overflow: hidden;"
        >
          <video
            autoplay
            muted
            loop
            playsinline
            class="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
            :src="slide.video"
          ></video>
          
          <!-- Contenu texte au-dessus -->
          <div class="text-container">
            <h1 class="display-3 fw-bold">DIEM ÉVENTS</h1>
            <p class="lead">Créateur d’émotions scéniques</p>
            <router-link to="/spectacles" class="btn btn-outline-light mt-3">Voir nos spectacles</router-link>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#videoCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Précédent</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#videoCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Suivant</span>
      </button>
    </div>

    <!-- Photos -->
    <div class="photos">
      <img
        v-for="(photo, index) in photos"
        :key="index"
        :src="photo"
        alt="Photo"
        class="resized-photo"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const slides = [
  { video: require('@/assets/video1.mp4') },
  { video: require('@/assets/video2.mp4') },
  { video: require('@/assets/video3.mp4') },
];

const photos = [
  require('@/assets/photo1.jpg'),
  require('@/assets/photo2.jpg'),
  require('@/assets/photo3.jpg'),
];

const activeIndex = ref(0);

onMounted(() => {
  

  // Function to handle slide change remains the same
});
</script>

<style scoped>
.object-fit-cover {
  object-fit: cover;
}

.video-container {
  position: relative;
  margin-bottom: 20px; /* Ajouter de l'espace entre la vidéo et les photos */
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  color: white; /* Couleur du texte en blanc */
}

.resized-photo {
  display: block; /* Afficher chaque photo sur une ligne différente */
  width: 100vw; /* 100% de la largeur de la vue */
  height: 100vh; /* 100% de la hauteur de la vue */
  object-fit: cover; /* Assure que l'image couvre toute la zone sans déformation */
  margin-bottom: 20px; /* Espacement entre les photos */
}
</style>