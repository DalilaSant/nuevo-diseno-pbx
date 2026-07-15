<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
import SectionTitleTwo from '@/components/common/SectionTitleTwo.vue'
import BenefitsBar from '@/components/common/BenefitsBar.vue'
import { benefitsWhatsapp } from '@/data/benefits-bar'


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
               WhatsApp Masivo<br>¡Sin riesgo de baneo!
              </SectionTitleTwo>

              <p class="mb-4 text-light mx-md-auto mx-lg-0 parrafos">
                Impulsa tus estrategias de marketing.
              </p>
              <div class="d-flex boton-cellphone justify-content-center justify-content-lg-start">
                <BaseButton texto="Hablar con un Asesor" :mostrarIcono="true" enlace="#"
                  roundedClass="rounded-1 py-2 px-4 fs-6" />
              </div>
            </div>

            <!-- Columna Derecha: Tarjetas de Notificaciones en Bucle Vertical -->
            <div class="col-lg-4 col-12 p-0 d-flex justify-content-center">
            </div>

          </div>
        </div>
      </div>
    </div>

    <BenefitsBar class="pt-4 benefits-hidden-medium" :items = "benefitsWhatsapp.benefits" />
    
  </section>
</template>



<style scoped>
.sms-banner {
  background-image: url("/img/soluciones/IMAGEN_1_SECCION_4.png");
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
  .boton-cellphone {
    display: flex !important;
    justify-content: center !important;
    width: 100% !important;
  }

  .boton-cellphone :deep(.btn) {
    width: 100% !important;
    display: inline-flex !important;
    justify-content: center !important;
    text-align: center !important;
  }

  .boton-cellphone :deep(.ms-3) {
    margin-left: 0 !important;
  }
}
@media (min-width: 800px) and (max-width: 1024px) {
  .benefits-hidden-medium {
    display: none !important;
  }
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