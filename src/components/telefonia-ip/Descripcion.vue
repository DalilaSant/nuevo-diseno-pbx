<template>
  <section id="descripcion">
    <div class="container position-relative z-1">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8">
          <h1 class="text-pbx-primary fw-bold display-5 text-center mb-4">
            ¿Qué es la Telefonía IP?
          </h1>
          <div class="text-d mx-auto p-lg-4 p-0 justify-content-center">
            <p class="text-white text-center fs-5 mb-0">
              La <span class="text-pbx-primary fw-bold">Telefonía IP</span> (Protocolo de Internet)
              es una tecnología que permite realizar llamadas telefónicas utilizando una conexión de
              Internet en lugar de la infraestructura de telefonía tradicional basada en líneas
              físicas. La telefonía IP utiliza la tecnología de voz sobre IP
              <span class="text-pbx-primary fw-bold">(VoIP)</span>, que convierte la voz en paquetes
              de datos digitales que se transmiten a través de la red de Internet.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Elementos flotantes a los lados -->
    <div class="floati floati-left d-none d-xl-block">
      <img src="/img/telefonia-ip/cuadro-2.png" alt="" class="" />
    </div>
    <div class="floati floati-right d-none d-xl-block">
      <img src="/img/telefonia-ip/cuadro.png" alt="Imagen flotante derecha" class="img-fluid" />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
/* descripcion */
#descripcion {
  background: rgb(24, 35, 121);
  background: linear-gradient(276deg, rgba(24, 35, 121, 1) 0%, rgba(39, 4, 74, 1) 100%);
  padding: 5rem 1rem;
  position: relative;
  overflow: hidden;
}
.floati {
  margin: 0 auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.5;
  z-index: 0;
  animation: spin 5s linear infinite;
}

.floati-left {
  left: 50px;
  
}

.floati-right {
  top: 100px;
  right: 50px;
}
@keyframes spin {
  0% {
    transform: translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateY(-50%) rotate(360deg);
  }
}

@media (min-width: 992px) {
  #descripcion {
    padding: 15vh 0;
  }
}
</style>
