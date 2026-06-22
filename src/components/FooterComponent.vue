<script setup lang="ts">
import WhatsAppChatComponent from './WhatsappChatComponent.vue'

import {footerData} from '@/data/footer'

</script>

<template>
  <!-- Sección Características -->
  <section style="background-color: #143169" class="py-4 text-white">
    <div class="container custom-container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-center text-lg-start">
        <div class="col" v-for="(feature, index) in footerData.feature" :key="index">
          <img :src="feature.image" :alt="feature.alt" class="mb-3" height="50" />
          <h2 class="h5 fw-bold mb-2">{{ feature.title }}</h2>
          <p class="small mb-0">
            {{ feature.descPrefix }}
            <!-- Solo se muestra el enlace si existe en los datos -->
            <router-link
              v-if="feature.link"
              :to="feature.link.url"
              class=""
            >
              {{ feature.link.text }}
            </router-link>
            {{ feature.descSuffix }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección Contacto Países -->
  <section style="background-color: #eaf5ff" class="py-5">
    <div class="container custom-container">
      <h2 class="text-center fw-bold mb-5" style="color: #2298ff; font-size: 2.5rem">Contacto</h2>

      <!-- Grid responsivo: 2 cols en celular, 3 en tablet, 6 en PC grandes -->
      <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-6 g-4">
        <div class="col d-flex align-items-center gap-2" v-for="(paises, index) in footerData.paises" :key="index">
          <img
            :src="paises.image"
            style="width: 35px; height: 35px; object-fit: contain"
          />
          <div class="lh-sm">
            <p class="mb-0 fw-bold small" style="color: #2298ff">{{ paises.pais }}</p>
            <a :href="`tel:${paises.telefono.replace(/[^0-9+]/g, '')}`" class="text-dark text-decoration-none small">
              {{ paises.telefono }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección Ventas Ayuda -->
  <section class="ventas-banner py-5 text-white">
    <div class="container custom-container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 col-xl-7">
          <div
            class="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mb-3"
          >
            <img
              src="/img/footer/ayuda-ventas.png"
              alt="pbxhosting whatsapp"
              width="90"
              class="flex-shrink-0"
            />
            <h2 class="fw-bold mb-0">¿Necesitas Ayuda?</h2>
          </div>
          <p class="fs-5 text-center text-lg-start">
            Si tienes alguna pregunta o necesitas asesoramiento sobre algún producto o servicio, no
            dudes en contactarnos.
          </p>

          <div
            class="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 gap-md-5 mt-4"
          >
            <div class="text-center text-lg-start">
              <h5 class="fw-bold mb-2" style="color: #ff972c; font-size: 16px">Llámanos</h5>
              <a
                href="tel:+525541708990"
                class="btn btn-outline-light rounded-pill border-2 fw-bold px-4 fs-5"
                >55 4170 8990</a
              >
            </div>
            <div class="text-center text-lg-start">
              <h5 class="fw-bold mb-2" style="color: #ff972c; font-size: 16px">WhatsApp</h5>
              <a
                href="https://wa.link/11ltwy"
                class="btn btn-outline-light rounded-pill border-2 fw-bold px-4 fs-5"
                >55 8789 4847</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Footer -->
  <footer class="pt-5 pb-4 text-white" style="background-color: #004a99">
    <div class="container custom-container">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <img
            src="/img/footer/logonew-blanco.png"
            alt="PBX Hosting"
            class="mb-4"
            style="max-width: 200px"
          />
          <p class="small text-light" style="line-height: 1.8">
            PbxHosting mejora la comunicación, la eficiencia y la productividad de las empresas,
            ofreciendo servicios de alta calidad, flexibilidad y rentabilidad en la transmisión de
            llamadas por Internet.
          </p>
          <img src="/img/footer/logo911.png" alt="Logo 911" class="mt-3" style="max-width: 150px" />
        </div>

        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h4
            class="h6 fw-bold text-uppercase mb-3 pb-2 border-bottom border-light border-opacity-25"
          >
            Enlaces
          </h4>
          <ul class="list-unstyled small lh-lg">
            <li>
              <router-link to="/" class="text-light text-decoration-none footer-link"
                >Inicio</router-link
              >
            </li>
            <li>
              <router-link to="/nosotros" class="text-light text-decoration-none footer-link"
                >Nosotros</router-link
              >
            </li>
            <li>
              <router-link to="/servicios" class="text-light text-decoration-none footer-link"
                >Servicios</router-link
              >
            </li>
            <li>
              <a
                href="https://blog.pbxhosting.com.mx/"
                class="text-light text-decoration-none footer-link"
                >Blog</a
              >
            </li>
            <li>
              <router-link
                to="/terminos-condiciones"
                class="text-light text-decoration-none footer-link"
                >Política de Servicios</router-link
              >
            </li>
          </ul>

          <h4
            class="h6 fw-bold text-uppercase mt-4 mb-3 pb-2 border-bottom border-light border-opacity-25"
          >
            Legal
          </h4>
          <ul class="list-unstyled small lh-lg">
            <li>
              <router-link to="/legal" class="text-light text-decoration-none footer-link"
                >Colaboración con la justicia</router-link
              >
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h4
            class="h6 fw-bold text-uppercase mb-3 pb-2 border-bottom border-light border-opacity-25"
          >
            Contacto
          </h4>
          <p class="small text-light mb-1">
            <strong>Teléfono:</strong>
            <a href="tel:+525541708990" class="text-light text-decoration-none footer-link">
              55 4170 8990</a
            >
          </p>
          <p class="small text-light mb-4">
            <strong>Correo:</strong>
            <a
              href="mailto:ventas@pbxhosting.com.mx"
              class="text-light text-decoration-none footer-link"
            >
              ventas@pbxhosting.com.mx</a
            >
          </p>

          <h4 class="h6 fw-bold text-uppercase mb-3">Horario Soporte:</h4>
          <p class="small text-light mb-0 lh-lg">
            Lunes a Viernes: 8:00am a 9:00pm <br />
            Sábados: 9:00am a 6:00pm
          </p>

          <div class="d-flex flex-wrap gap-2 mt-4">
            <a
              href="https://luminel.mx/"
              class="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
              style="width: 36px; height: 36px"
            >
              <img src="/img/footer/logopbx.png" alt="logo Empresa" class="w-75" />
            </a>
            <a
              href="https://twitter.com/PBX_Hosting"
              class="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
              style="width: 36px; height: 36px"
              ><i class="fa-brands fa-x-twitter"></i
            ></a>
            <a
              href="https://www.facebook.com/PBXHostingMX"
              class="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
              style="width: 36px; height: 36px"
              ><i class="fa-brands fa-facebook"></i
            ></a>
            <a
              href="https://www.instagram.com/pbxhostingMX/"
              class="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
              style="width: 36px; height: 36px"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a
              href="https://www.tiktok.com/@pbxhosting"
              class="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
              style="width: 36px; height: 36px"
              ><i class="fa-brands fa-tiktok"></i
            ></a>
            <a
              href="https://www.linkedin.com/company/pbx-hosting"
              class="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
              style="width: 36px; height: 36px"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <h4
            class="h6 fw-bold text-uppercase mb-3 pb-2 border-bottom border-light border-opacity-25"
          >
            Horario Ventas:
          </h4>
          <p class="small text-light mb-0 lh-lg">
            Lunes a Viernes: 9:00am a 6:00pm <br />
            Sábados: 9:00am a 2:00pm
          </p>
        </div>
      </div>
    </div>
  </footer>

  <!-- Sub-Footer / Derechos Reservados -->
  <div class="text-center text-white py-4" style="background-color: #00428a">
    <div
      class="container custom-container d-flex flex-column align-items-center justify-content-center gap-3"
    >
      <div class="d-flex justify-content-center gap-4">
        <img src="/img/footer/wisp.png" alt="wispmx" style="height: 40px" />
        <img src="/img/footer/registry-mx-hosting.png" alt="registry mx" style="height: 40px" />
      </div>
      <div class="small text-light opacity-75">
        &copy; Copyright <strong>PbxHosting</strong> Todos los Derechos Reservados
      </div>
    </div>
  </div>

  <WhatsAppChatComponent />
</template>

<style scoped>
@media (min-width: 1200px) {
  .custom-container {
    max-width: 85%;
  }
}

/* Degradado personalizado para la sección de ventas */
.ventas-banner {
  background: rgb(24, 35, 121);
  background: linear-gradient(276deg, rgba(24, 35, 121, 1) 0%, rgba(39, 4, 74, 1) 100%);
}

/* Estilos hover para enlaces */
.footer-link:hover {
  color: #74b5fc !important;
}

/* Estilos hover para botones y redes sociales */
.transition-scale {
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}
.transition-scale:hover {
  transform: scale(1.1);
  background-color: #0067d5 !important;
}
.btn-outline-light:hover {
  color: #004a99 !important;
  background-color: #fff !important;
}
</style>
