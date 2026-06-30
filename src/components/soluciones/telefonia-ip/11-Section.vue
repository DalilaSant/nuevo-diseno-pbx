<script setup lang="ts">
</script>

<template>
  <section class="banner-section pt-4 position-relative overflow-hidden" style="background-color: #ffffff;">
    <div class="container pb-5">
      <div class="row">
        <div class="col-12  ">
          <div
            class="benefits-bar bg-white shadow-sm rounded-4 border p-3 py-md-4 px-md-5 d-flex flex-wrap align-items-center justify-content-around gap-4">
            <!-- Beneficio 1 -->
            <div class="d-flex align-items-center gap-2">
              <div class="icon-placeholder rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                <img src="/img/soluciones/ICONO_12_SECCIO_2.png" alt="" class="img-fluid">
              </div>
              <div class="text-start lh-sm">
                <span class="d-block fw-semibold">Gestión de </span>
                <span class="">llamadas</span>
              </div>
            </div>
            <!-- Divisor Vertical para Escritorio -->
            <div class="d-none d-xl-block vertical-divider"></div>

            <!-- Beneficio 2 -->
            <div class="d-flex align-items-center gap-2">
              <div class="icon-placeholder rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                <img src="/img/soluciones/ICONO_13_SECCIO_2.png" alt="" class="img-fluid">
              </div>
              <div class="text-start lh-sm">
                <span class="d-block fw-semibold">Sistema de </span>
                <span class="">Monitoreo</span>
              </div>
            </div>

            <!-- Divisor Vertical para Escritorio -->
            <div class="d-none d-xl-block vertical-divider"></div>

            <!-- Beneficio 3 -->
            <div class="d-flex align-items-center gap-2">
              <div class="icon-placeholder rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                <img src="/img/soluciones/ICONO_14_SECCIO_2.png" alt="" class="img-fluid">
              </div>
              <div class="text-start lh-sm">
                <span class="d-block fw-semibold">Acceso </span>
                <span class="">multiplataforma</span>
              </div>
            </div>

            <!-- Divisor Vertical para Escritorio -->
            <div class="d-none d-xl-block vertical-divider"></div>

            <!-- Beneficio 4 -->
            <div class="d-flex align-items-center gap-2">
              <div class="icon-placeholder rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                <img src="/img/soluciones/ICONO_15_SECCIO_2.png" alt="" class="img-fluid">
              </div>
              <div class="text-start lh-sm">
                <span class="d-block fw-semibold">Campañas </span>
                <span class="">telefónicas</span>
              </div>
            </div>

            <!-- Divisor Vertical para Escritorio -->
            <div class="d-none d-xl-block vertical-divider"></div>

            <!-- Beneficio 5 -->
            <div class="d-flex align-items-center gap-2">
              <div class="icon-placeholder rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                <img src="/img/soluciones/ICONO_16_SECCIO_2.png" alt="" class="img-fluid">
              </div>
              <div class="text-start lh-sm">
                <span class="d-block fw-semibold">Sistema de </span>
                <span class="">grabación</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits-bar {
  border-color: #f0f0f0 !important;
  background-color: #ffffff;
}

.icon-placeholder {
  width: 48px;
  height: 48px;
}

.vertical-divider {
  width: 1.7px;
  height: 48px;
  background-color: #e9ecef;
}


@media (max-width: 1199.98px) {
  .benefits-bar {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en tablets e pantallas intermedias */
    gap: 24px !important;
    padding: 30px 24px !important;
    max-width: 680px; /* Limit el ancho de la tarjeta para agrupar el contenido */
    margin: 0 auto;   /* Centra la tarjeta completa */
  }
  /* Alineamos a la izquierda para que los iconos queden alineados verticalmente */
  .benefits-bar > div:not(.vertical-divider) {
    justify-content: flex-start !important;
    padding-left: 15%; 
  }
  /* último elemento ocupe ambas columnas y esté centrado */
  .benefits-bar > div:last-child {
    grid-column: span 2;
    justify-content: center !important;
    padding-left: 0;
  }
}

@media (max-width: 768px) {
  .benefits-bar {
    grid-template-columns: 1fr; 
    gap: 20px !important;
    padding: 24px 20px !important;
    max-width: 320px; 
    margin: 0 auto;
  }
  /* Alineación a la izquierda con padding para centrar visualmente en móvil */
  .benefits-bar > div:not(.vertical-divider) {
    justify-content: flex-start !important;
    padding-left: 35px;
  }
  /* Desactiva el span de 2 columnas en móvil para que fluya en 1 columna normal */
  .benefits-bar > div:last-child {
    grid-column: span 1;
    justify-content: flex-start !important;
    padding-left: 35px;
  }
}
</style>