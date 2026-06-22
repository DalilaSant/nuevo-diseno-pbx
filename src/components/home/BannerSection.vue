<script setup lang="ts"></script>

<template>
  <section class="">
    <div class=" ">
      <div
        id="carouselExampleIntervalFade2"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-touch="true"
      >
        <!-- Indicadores (puntos) para visualizar que hay múltiples banners -->
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIntervalFade2"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIntervalFade2"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <!-- Eliminamos 'carousel-fade' de aquí, solo debe ir arriba -->
          <div class="carousel-item active" data-bs-interval="3000">
            <div class="banner-btn-container">
              <picture>
                <source
                  media="(min-width: 992px)"
                  srcset="
                    https://pbxhosting.com.mx/assets/images/banner2026-pbx/banner_pagina_web_abril.png
                  "
                />

                <source
                  media="(max-width: 576px)"
                  srcset="
                    https://pbxhosting.com.mx/assets/images/banner2026-pbx/banner_pagina_web_abril_corto.png
                  "
                />

                <img
                  src="https://pbxhosting.com.mx/assets/images/banner2026-pbx/banner_pagina_web_abril.png"
                  class="d-block w-100"
                  alt="Promo-PBX"
                />
              </picture>
              <!-- El 'href' debe llevar a la página destino (ej. /contacto). La imagen va dentro en un 'img' -->
              <a href="https://wa.link/c2knj1" class="btn-flotante-banner">
                <img
                  src="https://pbxhosting.com.mx/assets/images/banner2026-pbx/Boton_contacto.png"
                  alt="Botón de contacto"
                  style="width: 100%; height: auto; border: none"
                />
              </a>
            </div>
          </div>

          <!-- SEGUNDO BANNER -->
          <div class="carousel-item" data-bs-interval="3000">
            <div class="banner-btn-container">
              <picture>
                <!-- Cambia el nombre de estas imágenes por el de tu 2do banner para desktop y responsive -->
                <source
                  media="(min-width: 992px)"
                  srcset="https://pbxhosting.com.mx/assets/images/banner2026-pbx/BANNER.png"
                />
                <source
                  media="(max-width: 576px)"
                  srcset="
                    https://pbxhosting.com.mx/assets/images/banner2026-pbx/BANNERAGENTEIA573x276.png
                  "
                />
                <img
                  src="https://pbxhosting.com.mx/assets/images/banner2026-pbx/BANNER.png"
                  class="d-block w-100"
                  alt="Promo-PBX 2"
                />
              </picture>
              <!-- Botón flotante para el segundo banner, puedes cambiar el href si debe enviar a otro enlace -->
              <a href="https://wa.link/co3vpo" class="btn-flotante-banner-2">
                <img
                  src="https://pbxhosting.com.mx/assets/images/banner2026-pbx/boton.png"
                  alt="Botón de contacto"
                  style="width: 100%; height: auto; border: none"
                />
              </a>
            </div>
          </div>
        </div>

        <button
          class="btn btn-prev"
          type="button"
          data-bs-target="#carouselExampleIntervalFade2"
          data-bs-slide="prev"
        >
          <span aria-hidden="true"><i class="fa-solid fa-chevron-left fs-1 text-white"></i></span>
        </button>
        <button
          class="btn btn-next"
          type="button"
          data-bs-target="#carouselExampleIntervalFade2"
          data-bs-slide="next"
        >
          <span aria-hidden="true"><i class="fa-solid fa-chevron-right fs-1 text-white"></i></span>
        </button>
      </div>
    </div>
  </section>
  <section class="bg-gradient-pbx py-4">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 text-center text-white">
        <div class="col">
          <h3 class="display-5 fw-bold mb-0">+500Millones</h3>
          <p class="fs-5 mb-0">de minutos mensuales</p>
        </div>
        <div class="col">
          <h3 class="display-5 fw-bold mb-0">99.99%</h3>
          <p class="fs-5 mb-0">Disponibilidad efectiva</p>
        </div>
        <div class="col">
          <h3 class="display-5 fw-bold mb-0">+10</h3>
          <p class="fs-5 mb-0">Años de experiencia</p>
        </div>
        <div class="col">
          <h3 class="display-5 fw-bold mb-0">+5K</h3>
          <p class="fs-5 mb-0">Clientes satisfechos</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-btn-container {
  position: relative;
  display: block;
  width: 100%;
}
.btn-flotante-banner {
  position: absolute;
  z-index: 15;
  transition: transform 0.3s ease;
}
.btn-flotante-banner:hover {
  transform: scale(1.05);
}
.btn-flotante-banner-2 {
  position: absolute;
  z-index: 15;
  transition: transform 0.3s ease;
}
.btn-flotante-banner-2:hover {
  transform: scale(1.05);
}

/* SOLUCIÓN AL SALTO BRUSCO EN EL CARRUSEL DE 2 IMÁGENES */
#carouselExampleIntervalFade2.carousel-fade .carousel-item-next.carousel-item-start,
#carouselExampleIntervalFade2.carousel-fade .carousel-item-prev.carousel-item-end {
  z-index: 2 !important;
}
#carouselExampleIntervalFade2.carousel-fade .active.carousel-item-start,
#carouselExampleIntervalFade2.carousel-fade .active.carousel-item-end {
  z-index: 1 !important;
  transition: opacity 0.6s ease-in-out !important;
  opacity: 0 !important;
}
.btn-next {
  right: 0;
  position: absolute !important;
  top: 50%;
  background-color: transparent;
  z-index: 1;
}
.btn-prev {
  left: 0;
  position: absolute !important;
  top: 50%;
  background-color: transparent;
  z-index: 1;
}




@media (max-width: 576px) {
  .btn-flotante-banner {
    top: 7%;
    right: 5%;
    width: 25%;
  }
  .btn-flotante-banner-2 {
    bottom: 8%;
    left: 4%;
    width: 16%;
  }

  .btn-prev,
  .btn-next {
    top: 42%;
  }
  .btn-prev {
    left: -7px !important;
  }
  .btn-next {
    right: -7px !important;
  }
}

@media (min-width: 577px) {
  .btn-flotante-banner {
    bottom: 4%;
    left: 15%;
    width: 15%;
  }
  .btn-flotante-banner-2 {
    bottom: 5%;
    left: 4%;
    width: 14%;
  }
}


</style>
