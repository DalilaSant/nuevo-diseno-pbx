<script setup lang="ts">
import SectionTitleTwo from '@/components/common/SectionTitleTwo.vue'


</script>

<template>
  <section class="pt-5 pb-3">
    <div class="container">
      <!-- sms-banner encapsulado dentro del container con esquinas redondeadas -->
      <div class="sms-banner position-relative rounded-4 overflow-hidden d-flex align-items-center p-4 p-md-5 py-xl-0">
        <div class="container-fluid my-2 position-relative z-3">
          <div class="row align-items-center g-4">

            <!-- Columna Izquierda: Textos y Título -->
            <div class="col-lg-8 col-12 text-center text-lg-start mb-4 mb-lg-0" v-motion-slide-left :delay="200"
              :duration="1200">
              <SectionTitleTwo textColor="text-white" displayFont="display-4" lineHeight="lh-1" marginBotton="mb-3"
                textPosition="text-center text-lg-start" letterSpacing="0px">
               Hablemos de tu <br> <span class="text-red" >próximo proyecto.</span>
              </SectionTitleTwo>

              <p class="mb-4 text-light mx-md-auto mx-lg-0 parrafos">
                Encuentra la solución que mejor se adapte a las necesidades de tu negocio.
              </p>
            </div>

            <!-- Columna Derecha: Tarjetas de Notificaciones en Bucle Vertical -->
            <div class="col-lg-4 col-12 p-0 d-flex justify-content-center">
            </div>

          </div>
        </div>
      </div>
    </div>

    
  </section>
</template>



<style scoped>
.sms-banner {
  background-image: url("/img/contacto/IMAGEN_1_SECCION_10.png");
  background-size: cover;
  background-position: center;
  min-height: 450px;
  width: 100%;
}

.sms-banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.parrafos {
  max-width: 535px;
  font-size: 1.41rem;
}


/* Responsividad para pantallas móviles y tablets */
@media (max-width: 800px) {

}

@media (max-width: 991px) {
  .sms-banner {
    min-height: auto;
    padding: 2.5rem 1rem !important;
  }
  .sms-banner::before {
    /* En vertical, el gradiente oscuro cubre toda la tarjeta uniformemente */
    background: rgba(12, 24, 36, 0.9);
  }

  .parrafos {
    max-width: 100%;
  }
}


@media (min-width: 1024px) and (max-width: 1100px) {

  .parrafos {
    font-size: 1.14rem;
    max-width: 85%;
  }
}

@media (min-width: 1024px){
.sms-banner {
    min-height: 380px;
  }
}



</style>