<script setup lang="ts">
// Componente de Banner principal para la página de inicio
</script>

<template>
  <section class="banner-section py-5 position-relative overflow-hidden" style="background-color: #ffffff;">
    <div class="container py-lg-4">
      <div class="row align-items-center mb-5">
        <div class="col-lg-6 col-md-12 text-center text-lg-start mb-5 mb-lg-0">
          <div class="accent-line mb-3 mx-auto mx-lg-0"></div>
          
          <h1 class="display-4 fw-bold text-dark mb-3 lh-sm" style=" letter-spacing: -1px;">
            Conecta, automatiza <br>
            <span class="text-red">y escala</span> tu empresa.
          </h1>
          
          <p class="mb-4 fs-5" style="max-width: 500px; ">
            Proveedores de <span class="fw-bold">Telefonía IP</span> y soluciones en <strong class="fw-bold">Telecomunicaciones</strong> para crecer sin límites.
          </p>
          
          <div class="d-flex justify-content-center justify-content-lg-start">
            <a href="#" class="btn btn-red btn-lg rounded-3 px-4 py-2 fs-6 fw-bold text-white shadow-sm d-inline-flex align-items-center gap-2 transition-all">
              Hablar con un asesor
              <i class="fa-solid fa-chevron-right" style="font-size: 0.8rem;"></i>
            </a>
          </div>
        </div>

        <!-- Columna Derecha: Imagen Principal del Banner -->
        <div class="col-lg-6 col-md-12 text-center">
          <div class="banner-image-container p-2">
            <!-- PENDIENTE: Agrega la ruta de tu imagen del banner del lado derecho en src -->
            <img 
              src="/img/home/IMAGEN_1_SECCION_1.png" 
              alt="PBX Hosting Soluciones" 
              class="img-fluid mx-auto d-block" 
              style="max-height: 400px; width: auto; object-fit: contain;" 
            />
           
          </div>
        </div>
      </div>

      <!-- Fila Inferior: Características / Beneficios -->
      <div class="d-flex flex-column flex-md-row gap-4 gap-lg-0 justify-content-center justify-content-lg-start pt-0">
        <!-- Beneficio 1: Soporte -->
        <div class="d-flex align-items-center gap-2 p-lg-0 rounded-3 mx-auto mx-lg-0" style="max-width: 250px; width: 100%;">
          <div class="icon-placeholder-wrapper flex-shrink-0 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
            <img 
              src="/img/home/ICONO_1_SECCIO_1.png" 
              alt="Soporte" 
              class="img-fluid" 
              style="max-width: 100%; max-height: 100%; display: none;" 
              onload="this.style.display='block'; this.nextElementSibling.style.display='none';"
            />
            <span class="text-muted text-center fs-3">🎧</span>
          </div>
          <div class="feature-text lh-sm">
            <span class="d-block fw-bold text-dark small">Soporte especializado</span>
            <span class="text-muted small">las 24 horas.</span>
          </div>
        </div>

        <!-- Beneficio 2: Infraestructura -->
        <div class="d-flex align-items-center gap-2 p-0 rounded-3 mx-auto mx-lg-0" style="max-width: 250px; width: 100%;">
          <div class="icon-placeholder-wrapper flex-shrink-0 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
            <img 
              src="/img/home/ICONO_2_SECCIO_1.png" 
              alt="Infraestructura" 
              class="img-fluid" 
              style="max-width: 100%; max-height: 100%; display: none;" 
              onload="this.style.display='block'; this.nextElementSibling.style.display='none';"
            />
            <span class="text-muted text-center fs-3">👍</span>
          </div>
          <div class="feature-text lh-sm">
            <span class="d-block fw-bold text-dark small">Infraestructura</span>
            <span class="text-muted small">confiable</span>
          </div>
        </div>

        <!-- Beneficio 3: Comunicación -->
        <div class="d-flex align-items-center gap-2 p-0 rounded-3 mx-auto mx-lg-0" style="max-width: 250px; width: 100%;">
          <div class="icon-placeholder-wrapper flex-shrink-0 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
            <img 
              src="/img/home/ICONO_3_SECCIO_1.png" 
              alt="Comunicación" 
              class="img-fluid" 
              style="max-width: 100%; max-height: 100%; display: none;" 
              onload="this.style.display='block'; this.nextElementSibling.style.display='none';"
            />
            <span class="text-muted text-center fs-3">📊</span>
          </div>
          <div class="feature-text lh-sm">
            <span class="d-block fw-bold text-dark small">Comunicación</span>
            <span class="text-muted small">sin límites</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Línea decorativa roja de acento */
.accent-line {
  width: 40px;
  height: 4px;
  background-color: #f12537;
  border-radius: 2px;
}

/* Color rojo para textos destacados */
.text-red {
  color: #f12537;
}

/* Estilos de botón rojo */
.btn-red {
  background-color: #f12537;
  border: none;
  box-shadow: 0 4px 12px rgba(242, 41, 62, 0.2);
}

.btn-red:hover {
  background-color: #f12537;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(242, 41, 62, 0.35);
  color: #ffffff;
}

.transition-all {
  transition: all 0.3s ease;
}



</style>