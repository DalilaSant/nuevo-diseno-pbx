<template>
  <section id="ventajas" class="w-100 py-5 pt-lg-5 mb-lg-5 pb-lg-5">
    <div class="container">
      <div class="row align-items-center justify-content-center g-4 g-lg-5">
        <div class="col-12 col-lg-6 text-center">
          <!-- imagen de la izquierda -->
          <img
            src="/img/telefonia-ip/ventajas-ip.png"
            alt="ventajas-telefonia-ip"
            class="img-fluid w-75 mx-auto"
          />
        </div>
        <div
          class="col-12 col-lg-6 text-center text-lg-start d-flex flex-column justify-content-center"
        >
          <span class="sub-btt fs-5 pb-2 pb-lg-3"><span></span> Beneficios de la telefonía ip</span>
          <h3 class="mt-2 fs-1 pb-2 pb-lg-3">Descubre porque es la mejor opción para tu negocio</h3>
          <p class="fs-5">
            La <span class="text-pbx-primary fw-bold">Telefonía IP</span> permite integrar múltiples
            aplicaciones de comunicación en una sola plataforma, lo que mejora la colaboración y la
            eficiencia en los procesos empresariales.
          </p>
          <div
            class="fs-5 d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center align-items-sm-start gap-3 gap-lg-5 text-start mt-4"
          >
            <ul class="lista list-unstyled d-flex flex-column gap-2 mb-0">
              <li><i class="fa-solid fa-circle-check"></i> Mejor Calidad de Audio</li>
              <li><i class="fa-solid fa-circle-check"></i> Mayor Ahorro</li>
              <li><i class="fa-solid fa-circle-check"></i> Flexibilidad</li>
            </ul>
            <ul class="lista list-unstyled d-flex flex-column gap-2 mb-0">
              <li><i class="fa-solid fa-circle-check"></i> Configuración Sencilla</li>
              <li><i class="fa-solid fa-circle-check"></i> Multidispositivos</li>
              <li><i class="fa-solid fa-circle-check"></i> Funciones Avanzadas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
#ventajas {
  background-color: #ebf2fa;
}
.sub-btt span {
  color: #2298ff;
  border: 2px solid #2298ff;
  margin-right: 20px;
}
.lista .fa-circle-check {
  color: #2298ff;
  font-size: 18px;
}
</style>
