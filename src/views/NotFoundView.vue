<script setup lang="ts">
import { useHead } from '@vueuse/head'
import BaseButton from '@/components/common/BaseButton.vue'

useHead({
  title: '404 - Página no encontrada | PBX Hosting',
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow' //evita que google indexe la pagina por error
    }
  ]
})

</script>

<template>
  <section class="not-found-section d-flex align-items-center justify-content-center">
    <div class="container text-center py-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">

          <!-- Elemento gráfico animado en CSS -->
          <div class="error-ilustration mb-4">
            <h1 class="error-code text-red fw-bold">404</h1>
            <div class="error-circke">
              <i class="fa-solid fa-triangle-exclamation warning-icon"></i>

            </div>
          </div>

          <!-- textos descriptivos -->
           <h2 class="h1 fw-bold text-dark mb-3">¿Te has perdido?</h2>
           <p class="fs-5 text-secondary mb-5">La página que estás buscando no existe, ha sido movida o la dirección URL fue mal escrita.</p>

           <!-- Botón de regreso usando BaseButton -->
            <div class="d-flex justify-content-center">
              <BaseButton
                texto="Regresar al inicio"
                enlace="/"
                :mostrarIcono="true"
                roundedClass="rounded-3 py-2 px-4 fs-5"
              />
            </div>
        </div>

      </div>
    </div>

  </section>
</template>



<style scoped>
.not-found-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  background-color: #ffffff;
}
.error-illustration {
  position: relative;
  display: inline-block;
}
.error-code {
  font-size: 8rem;
  line-height: 1;
  letter-spacing: -4px;
  margin-bottom: 0;
  animation: pulse-slow 2s infinite ease-in-out;
}
.error-circle {
  width: 64px;
  height: 64px;
  background-color: #fcebeb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -20px auto 0 auto;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 12px rgba(241, 37, 55, 0.2);
}
.warning-icon {
  color: #f12537;
  font-size: 1.5rem;
}
@keyframes pulse-slow {
  0%, 100% {
    transform: scale(0.97);
  }
  50% {
    transform: scale(1.03);
  }
}
</style>