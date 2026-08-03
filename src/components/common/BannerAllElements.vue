<script setup lang="ts">
import type { BannerItem } from '@/interfaces/BannerAllElements'
import BaseButton from '@/components/common/BaseButton.vue';
import {computed} from 'vue'

const props = withDefaults(
  defineProps<{
    items: BannerItem[];
    reverse?: boolean;
    lineHeight?: string;
    marginBottom?: string;
    texto?: string;
    animarImagen?: boolean;
    animarTexto?: boolean;
    subtitulo?:string;
    mostrarBoton?: boolean; 
    marginBottonTittle?:string;
    direccionAnimacion?: 'left' | 'right';
    
  }>(),
  {
    reverse: false,
    lineHeight: 'lh-sm',
    marginBottom: 'mb-4',
    texto: 'Cotizar',
    mostrarBoton: true,
    marginBottonTittle: 'mb-lg-1',
    direccionAnimacion: 'right'
  }
)

const configuracionMovimiento = computed(()=>{
  const deslizarDesdeIzquierda = props.direccionAnimacion === 'left'

    return{
      initial:{
        x:deslizarDesdeIzquierda ? -100 : 100, //desplazamiento inicial en x
        opacity: 0
      },
      visibleOnce: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 200,
          duration:1200
        }
      }
    }
})



</script>
<template>
  <div class="container py-lg-3">
    <!-- Fila principal: Se invierte en móvil para que la imagen quede arriba si es necesario, o se mantiene -->
    <div v-for="(banner, index) in items" :key="index"
      :class="['row align-items-center g-4 g-lg-5', { 'flex-row-reverse': reverse }]">

      <!-- Lado Izquierdo: Imagen -->
      <div class="col-lg-6 col-12 text-center text-lg-start order-2 order-lg-1">
        <div v-if="animarImagen" v-motion-slide-left :delay="200" :duration="1200"
          class="image-wrapper position-relative ">
          <img :src="banner.image" alt="Telefonía IP eficiente" class="img-fluid  solutions-featured-img" />
          <!-- Ranura (Slot) reservada para la imagen flotante -->
          <slot name="image-overlay"></slot>
        </div>
        <div v-else class="image-wrapper position-relative">
          <img :src="banner.image" alt="Telefonía IP eficiente" class="img-fluid  solutions-featured-img" />
          <!-- Ranura (Slot) reservada para la imagen flotante -->
          <slot name="image-overlay"></slot>

        </div>

      </div>

      <!-- Lado Derecho: Textos y Beneficios -->
      <div :class="['col-lg-6 col-12  text-center text-lg-start order-1 order-lg-2', { 'px-lg-0': !reverse }]">
        <div v-if="animarTexto" v-motion="configuracionMovimiento" class="text-content-wrapper">
          <!-- Línea decorativa roja -->
           <div class="d-flex align-items-center gap-2 mb-3 justify-content-center justify-content-lg-start">
            <div class="accent-line m-0"></div>
            <span v-if="subtitulo" class=" fw-semibold fs-6 " style="letter-spacing: 0.05em;">{{ subtitulo }}</span>

           </div>
          <!-- <div class="accent-line mb-3 mx-auto mx-lg-0"></div> -->

          <!-- Título Principal -->
          <h2 :class="['featured-title fw-semibold mb-3 text-dark', lineHeight,marginBottonTittle]">
            {{ banner.title }} <br>
            <span class="text-red">{{ banner.titleRed }}</span>
          </h2>

          <!-- Descripción -->
          <p class="featured-desc mb-3 mb-lg-2 ">
            {{ banner.description }}<span class="fw-semibold">{{ banner.descriptionDark }}</span>
          </p>

          <!-- Listado de Checks -->
          <div
            :class="['features-list d-flex flex-column gap-3 align-items-center align-items-lg-start', marginBottom]">
            <div v-for="(subItem, subIndex) in banner.item" :key="subIndex"
              class="feature-item d-flex align-items-center gap-2">
              <i class="fa-regular fa-circle-check check-icon"></i>
              <span class="feature-text fw-semibold text-dark">
                {{ subItem.text }}
              </span>
            </div>
          </div>

          <!-- Botón de Acción -->
          <div  v-if="mostrarBoton"  class="d-flex boton-cellphone justify-content-center justify-content-lg-start">
            <BaseButton  :texto="texto" :mostrarIcono="true" :enlace="banner.enlace"
              roundedClass="rounded-1 py-2 px-4 fs-6" />
          </div>
        </div>

        <div v-else class="text-content-wrapper">
          <!-- Línea decorativa roja -->
           <div class="d-flex align-items-center gap-2 mb-3 justify-content-center justify-content-lg-start">
            <div class="accent-line m-0"></div>
            <span v-if="subtitulo" class=" fw-semibold fs-5 " style="letter-spacing: 0.05em;">{{ subtitulo }}</span>

           </div>
          <!-- <div class="accent-line mb-3 mx-auto mx-lg-0"></div> -->

          <!-- Título Principal -->
          <h2 :class="['featured-title fw-semibold mb-3 text-dark', lineHeight,marginBottonTittle]">
            {{ banner.title }} <br>
            <span class="text-red">{{ banner.titleRed }}</span>
          </h2>

          <!-- Descripción -->
          <p class="featured-desc mb-3 mb-lg-2 ">
            {{ banner.description }}<span class="fw-semibold">{{ banner.descriptionDark }}</span>
          </p>

          <!-- Listado de Checks -->
          <div
            :class="['features-list d-flex flex-column gap-3 align-items-center align-items-lg-start', marginBottom]">
            <div v-for="(subItem, subIndex) in banner.item" :key="subIndex"
              class="feature-item d-flex align-items-center gap-2">
              <i class="fa-regular fa-circle-check check-icon"></i>
              <span class="feature-text fw-semibold text-dark">
                {{ subItem.text }}
              </span>
            </div>
          </div>

          <!-- Botón de Acción -->
          <div  v-if="mostrarBoton" class="d-flex boton-cellphone justify-content-center justify-content-lg-start">
            <BaseButton :texto="texto" :mostrarIcono="true" :enlace="banner.enlace"
              roundedClass="rounded-1 py-2 px-4 fs-6" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>



<style scoped>
/* Línea roja decorativa */
.accent-line {
  width: 40px;
  height: 4px;
  background-color: #f12537;
  border-radius: 2px;
}

/* Contenedor de la imagen con diseño premium */
.image-wrapper {
  overflow: hidden;
  border-radius: 12px;
  display: inline-block;
  width: 100%;
  max-width: 540px;
}

.solutions-featured-img {
  width: 100%;
  height: auto;
  max-height: 380px;
  object-fit: cover;
  display: block;

}


/* Tipografías del lado derecho */
.featured-title {
  font-size: 2.8rem;
  letter-spacing: -1px;
}

.featured-desc {
  font-size: 1.15rem;
  line-height: 1.6;
  max-width: 520px;
  white-space: pre-line;
}

/* Iconos de check personalizados */
.check-icon {
  color: #f12537;
  font-size: 1.25rem;
}

.feature-text {
  font-size: 1.05rem;
}

/* ==========================================================================
   RESPONSIVIDAD Y ADAPTACIÓN EN PANTALLAS
   ========================================================================== */

/* 1. Desde 1024px en adelante (Balance y alineación perfecta) */
@media (min-width: 1024px) {
  .image-wrapper {
    max-width: 600px !important;
    /* Agranda el cuadro completo */
  }

  .solutions-featured-img {
    max-height: 370px;

  }
}

@media (min-width: 1024px) and (max-width: 1366px) {
  .solutions-featured-img {
    max-height: 360px;
  }

  .featured-title {
    font-size: 2.1rem;
  }

  .featured-desc {
    font-size: .95rem;
    max-width: 450px;
  }

  .feature-text {
    font-size: 0.95rem;
  }

  :deep(.btn) {
    font-size: 0.85rem !important;
    padding: 8px 16px !important;
  }

}

@media (max-width: 991px) {
  .solutions-featured-img {
    max-height: 300px;
    margin-bottom: 0rem;
  }

  .featured-title {
    font-size: 2rem;
  }

  .featured-desc {
    font-size: 1rem;
    margin: 0 auto 1.5rem auto;
  }

  .solutions-featured-img {
    max-height: 300px;
    margin-bottom: 0rem;
  }

  .feature-text {
    font-size: .98rem;
  }

}
</style>