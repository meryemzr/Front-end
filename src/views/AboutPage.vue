<template>
  <div class="container my-5">
    <h1 class="text-center mb-5 fw-bold">Présentation de l’entreprise</h1>

    <!-- Historique -->
    <section class="mb-5">
      <h2 class="text-primary">Historique</h2>
      <p class="lead">
        Diem Events est née d’une volonté de rassembler les talents artistiques et techniques autour de projets culturels vivants et innovants. 
        Depuis sa création, l’entreprise n’a cessé de promouvoir la création contemporaine et les spectacles vivants à travers tout le territoire.
      </p>
    </section>

    <!-- Valeurs -->
    <section class="mb-5">
      <h2 class="text-primary">Nos valeurs</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">🎨 Créativité et innovation</li>
        <li class="list-group-item">🤝 Esprit d’équipe</li>
        <li class="list-group-item">📣 Accessibilité culturelle</li>
        <li class="list-group-item">✅ Professionnalisme</li>
      </ul>
    </section>

    <!-- Équipe -->
    <section>
      <h2 class="text-primary mb-4">Notre équipe</h2>

      <div class="row row-cols-1 row-cols-md-2 g-4">
        <!-- Direction Générale -->
        <div class="col">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title">Direction Générale</h5>
              <p class="card-text">Fatima Benali – Directrice Générale</p>
            </div>
          </div>
        </div>

        <!-- Direction Artistique -->
        <div class="col">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title">Direction Artistique</h5>
              <ul class="mb-0">
                <li>Rania Kacem – Chargée de création artistique</li>
                <li>Yanis Djemai – Scénographe</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Direction Technique -->
        <div class="col">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title">Direction Technique</h5>
              <ul class="mb-0">
                <li>Sofiane Merabet – Régisseur général</li>
                <li>Imane Khalfi – Développeuse web</li>
                <li>Meryem Ziraoui – Stagiaire en Développement web</li>
                <li>Walid Nouioua – Community Manager</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Direction Administrative -->
        <div class="col">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title">Direction Administrative</h5>
              <p class="card-text">Samira Heddar – Responsable financière</p>
            </div>
          </div>
        </div>

        <!-- Communication -->
        <div class="col">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title">Communication</h5>
              <ul class="mb-0">
                <li>Amel Rahmouni – Responsable communication</li>
                <li>Omar Bensaïd – Chargé de diffusion / relations presse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage"
}
</script>

<style scoped>
.card-title {
  color: #004080;
}
.card {
  border-left: 5px solid #0d6efd;
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
}
</style>
