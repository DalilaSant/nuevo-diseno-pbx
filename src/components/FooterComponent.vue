<script setup lang="ts">
import WhatsAppChatComponent from './WhatsappChatComponent.vue'

import {footerData} from '@/data/footer'

</script>

<template>



  <!-- Main Footer -->
  <footer class="pt-5 pb-4 text-white" style="background-color: white">
    <div class="container custom-container">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <img
            src="/img/logonew.png"
            alt="PBX Hosting"
            class="mb-4"
            style="max-width: 100px"
          />
          <p class="pbx-text small text-dark" style="line-height: 1.8">
            <strong>PbxHosting</strong> mejora la comunicación, y la productividad de las empresas, ofreciendo servicios de alta calidad, flexibilidad y rentabilidad.
          </p>
          <img src="/img/footer/logo911.png" alt="Logo 911" class="mt-3" style="max-width: 150px" />
          <div class="d-flex flex-wrap gap-2 mt-4">
            <a
              href="https://luminel.mx/"
              class="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
              style="width: 36px; height: 36px"
            >
              <img src="/img/footer/logopbx.png" alt="logo Empresa" class="w-75" />
            </a>
            <a
              href="https://twitter.com/PBX_Hosting"
              class="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
              style="width: 36px; height: 36px"
              ><i class="fa-brands fa-x-twitter"></i
            ></a>
            <a
              href="https://www.facebook.com/PBXHostingMX"
              class="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
              style="width: 36px; height: 36px"
              ><i class="fa-brands fa-facebook"></i
            ></a>
            <a
              href="https://www.instagram.com/pbxhostingMX/"
              class="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
              style="width: 36px; height: 36px"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a
              href="https://www.tiktok.com/@pbxhosting"
              class="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
              style="width: 36px; height: 36px"
              ><i class="fa-brands fa-tiktok"></i
            ></a>
            <a
              href="https://www.linkedin.com/company/pbx-hosting"
              class="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
              style="width: 36px; height: 36px"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h4
            class="h6 text-tittle fw-bold  mb-3 pb-2 border-bottom border-light border-opacity-25"
          >
            Contacto
          </h4>
          <p class="small mb-4 pt-lg-4 ">
            <i class="fa-solid fa-envelope text-secondary me-2"></i>
            <a
              href="mailto:ventas@pbxhosting.com.mx"
              class="text-dark text-decoration-none footer-link"
            >
              Correo: ventas@pbxhosting.com.mx</a
            >
          </p>
          <p class="small  mb-1">
            <i class="fa-solid fa-phone text-secondary me-2"></i>
            <a href="tel:+525541708990" class="text-dark text-decoration-none footer-link">
              Telefono: 55 4170 8990</a
            >
          </p><p class="small  mb-1">
            <i class="fa-brands fa-whatsapp text-secondary me-2"></i>
            <a href="https://wa.me/+525587894847" class="text-dark text-decoration-none footer-link">
              Whatsapp: 55 8789 4847</a
            >
          </p>
    
        </div>

        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h4
            class="h6 fw-bold text-tittle  mb-3 pb-2 border-bottom border-light border-opacity-25"
          >
            Legales
          </h4>
          <ul class="list-unstyled small lh-lg pt-lg-4">
            <li>
              <router-link to="/legal" class="text-dark text-decoration-none footer-link "
                >Colaboración con la justicia</router-link
              >
            </li>
          </ul>

          
        </div>

        <div class="col-lg-3 col-md-6">
          <h4
            class="h6 fw-bold text-tittle mb-3 pb-2 border-bottom border-light border-opacity-25"
          >
            Horario de atención:
          </h4>
          <p class="small text-tittle fw-bold mb-0 lh-l pt-lg-4">
            Gestiones Administrativas y Ventas:
          </p>
          <p class="small text-dark mb-0 lh-lg">
            Lunes a Viernes<br />
          </p>
          <p class="small text-dark mb-0 lh-lg">
            9:00am a 6:00pm
          </p>
          <p class="small text-dark mb-0 lh-lg">
            Sábados
          </p>
          <p class="small text-dark mb-0 lh-lg">
            9:00am a 2:00pm
          </p>
          <p class="small text-tittle fw-bold mb-0 lh-l pt-lg-4">
            Soporte Técnico:
          </p>
          <p class="small text-dark mb-0 lh-lg">
            Lunes a Viernes<br />
          </p>
          <p class="small text-dark mb-0 lh-lg">
            9:00am a 6:00pm
          </p>
          <p class="small text-dark mb-0 lh-lg">
            Sábados
          </p>
          <p class="small text-dark mb-0 lh-lg">
            9:00am a 6:00pm
          </p>
        </div>
      </div>
    </div>
  </footer>

  <!-- Sub-Footer / Derechos Reservados -->
  <div class="text-center py-4" style="background-color: white">
    <div
      class="container custom-container d-flex flex-column align-items-center justify-content-center gap-3"
    >
      <div class="small opacity-75">
        &copy; Copyright <strong>PbxHosting</strong> Todos los Derechos Reservados <br> Diseñado por Luminel Agencia Creativa
      </div>
    </div>
  </div>

  <WhatsAppChatComponent />
</template>

<style scoped>
.pbx-text {
  width: 65%;
}
.text-tittle{
  color:#3a434d
}
@media (min-width: 1200px) {
  .custom-container {
    max-width: 85%;
  }
}

/* Estilos hover para enlaces */
.footer-link:hover {
  color: #003eb3 !important;
}

/* Estilos hover para botones y redes sociales */
.transition-scale {
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}
.transition-scale:hover {
  transform: scale(1.1);
  background-color: transition-scale !important;
}

</style>
