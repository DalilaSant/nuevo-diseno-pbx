<script setup lang="ts"></script>

<template>
  <!-- Top Header (Oculto en pantallas pequeñas) -->
  <div class="top-bar d-none d-xl-block py-2">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="contact-info d-flex gap-4">
        <a href="tel:5541708990" class="text-decoration-none fw-medium"
          ><i class="fa-solid fa-phone text-primary"></i> 55 4170 8990</a
        >
        <a href="mailto:ventas@pbxhosting.com.mx" class="text-decoration-none fw-medium"
          ><i class="fa-solid fa-envelope text-primary"></i> ventas@pbxhosting.com.mx</a
        >
      </div>

      <div class="social-links d-flex align-items-center gap-3">
        <a target="_blank" href="https://www.facebook.com/PBXHostingMX/" class=""
          ><i class="fa-brands fa-facebook fs-5"></i
        ></a>
        <a target="_blank" href="https://www.instagram.com/pbxhostingmx/" class=""
          ><i class="fa-brands fa-instagram fs-5"></i
        ></a>
        <a target="_blank" href="https://www.linkedin.com/company/pbx-hosting/" class=""
          ><i class="fa-brands fa-linkedin fs-5"></i
        ></a>
        <a target="_blank" href="https://twitter.com/PBX_Hosting/" class=""
          ><i class="fa-brands fa-x-twitter fs-5"></i
        ></a>
        <a href="tel:5541708990" class="btn btn-primary btn-sm rounded-1 fw-bold ms-2 px-3"
          ><i class="fa-solid fa-phone"></i> Llámanos</a
        >
      </div>
    </div>
  </div>

  <nav class="navbar navbar-expand-xl navbar-light bg-white shadow-sm sticky-top py-3">
    <div class="container custom-container">
      <router-link class="navbar-brand" to="/">
        <img
          src="/img/logonew.png"
          alt="PBX Hosting"
          height="35"
          class="d-inline-block align-text-top"
        />
      </router-link>

      <!-- Botón Menú Móvil -->
      <button
        class="navbar-toggler border-0 shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Enlaces del Menú -->
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav ms-auto mb-2 mb-xl-0 align-items-xl-center fw-medium gap-xl-1">
          <!-- Dropdown Telefonía IP -->
          <li class="nav-item dropdown">
            <!-- PC: Link directo sin data-bs-toggle para que funcione el click -->
            <router-link class="nav-link dropdown-toggle d-none d-xl-block" to="/telefoniaip"
              >Telefonía IP</router-link
            >
            <!-- Móvil: Botón para abrir el menú -->
            <a
              class="nav-link dropdown-toggle d-xl-none"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Telefonía IP</a
            >

            <ul class="dropdown-menu border-0 shadow-sm">
              <li class="d-xl-none">
                <router-link
                  class="dropdown-item fw-bold border-bottom pb-2 mb-2 text-pbx-primary"
                  to="/telefoniaip"
                  >Ver Telefonía IP</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/linea-sip"
                  ><i class="fa-solid fa-plug me-2"></i> Línea Sip</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/lineas-telefonicas"
                  ><i class="fa-solid fa-address-book me-2"></i> Líneas Telefónicas</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/paquetes-voip"
                  ><i class="fa-solid fa-phone me-2"></i> Paquetes VoIP</router-link
                >
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/conmutador">Conmutador en la nube</router-link>
          </li>

          <!-- Dropdown Hosting y Dominio -->
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle d-none d-xl-block" to="/hosting"
              >Hosting</router-link
            >
            <a
              class="nav-link dropdown-toggle d-xl-none"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Hosting</a
            >

            <ul class="dropdown-menu border-0 shadow-sm">
              <li class="d-xl-none">
                <router-link
                  class="dropdown-item fw-bold border-bottom pb-2 mb-2 text-pbx-primary"
                  to="/hosting"
                  >Ver Hosting</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/hosting"
                  ><i class="fa-solid fa-server me-2"></i> Planes Hosting</router-link
                >
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle d-none d-xl-block" to="/dominio"
              >Dominio</router-link
            >
            <a
              class="nav-link dropdown-toggle d-xl-none"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Dominio</a
            >

            <ul class="dropdown-menu border-0 shadow-sm">
              <li class="d-xl-none">
                <router-link
                  class="dropdown-item fw-bold border-bottom pb-2 mb-2 text-pbx-primary"
                  to="/dominio"
                  >Ver Dominio</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/dominio-mx"
                  ><i class="fa-solid fa-server me-2"></i> Dominio MX</router-link
                >
              </li>
            </ul>
          </li>

          <!-- Dropdown Servidores -->
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle d-none d-xl-block" to="/servidores"
              >Servidores</router-link
            >
            <a
              class="nav-link dropdown-toggle d-xl-none"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Servidores</a
            >

            <ul class="dropdown-menu border-0 shadow-sm">
              <li class="d-xl-none">
                <router-link
                  class="dropdown-item fw-bold border-bottom pb-2 mb-2 text-pbx-primary"
                  to="/servidores"
                  >Ver Servidores</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/servidores"
                  ><i class="fa-solid fa-server me-2"></i> VPS</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/servidores#precios-dedicados"
                  ><i class="fa-solid fa-server me-2"></i> Dedicados</router-link
                >
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/smsmarketing">SMS Marketing</router-link>
          </li>

          <!-- Dropdown Soluciones / Callcenter -->
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle d-none d-xl-block" to="/callcenter"
              >Callcenter</router-link
            >
            <a
              class="nav-link dropdown-toggle d-xl-none"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Callcenter</a
            >

            <ul class="dropdown-menu border-0 shadow-sm">
              <li class="d-xl-none">
                <router-link
                  class="dropdown-item fw-bold border-bottom pb-2 mb-2 text-pbx-primary"
                  to="/callcenter"
                  >Ver Callcenter</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/pbxdialer"
                  ><i class="fa-solid fa-users me-2"></i> PBXDialer</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/paquetes-callcenter"
                  ><i class="fa-solid fa-boxes-stacked me-2"></i> Paquetes Callcenter</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/kolob"
                  ><i class="fa-solid fa-laptop-code me-2"></i> Software Kolob</router-link
                >
              </li>
            </ul>
          </li>

          <!-- Enlaces sencillos -->
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto">Contacto</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/whatsappmasivo">Whatsapp Masivo</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/agente-ia">Agente IA</router-link>
          </li>

          <!-- Botón Mi Cuenta -->
          <li class="nav-item ms-xl-3 mt-3 mt-xl-0">
            <a
              class="btn btn-primary rounded-3 px-4 fw-bold w-100"
              href="https://www.pbxhosting.com.mx/clientarea"
              target="_blank"
            >
              <i class="fa-solid fa-user me-2"></i> Mi Cuenta
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Color del panel superior para mantener tu marca */
.top-bar {
  background-color: #e2fdff;
}

/* Comportamiento del dropdown al pasar el mouse (hover) solo en pantallas grandes */
@media all and (min-width: 1200px) {
  .navbar .nav-item .dropdown-menu {
    display: block;
    visibility: hidden;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
    margin-top: 0;
  }
  .navbar .nav-item:hover .dropdown-menu {
    visibility: visible;
    opacity: 1; /* Al pasar el mouse, aparece suavemente */
    transform: translateY(0); /* Sube a su posición original */
  }
}

.navbar-nav .nav-link,
.navbar-nav .dropdown-item {
  font-size: 14px;
  color: #004289 !important;
}

.navbar-nav .nav-link:hover,
.navbar-nav .dropdown-item:hover {
  color: #007bff !important;
}

@media (min-width: 1200px) {
  .custom-container {
    max-width: 85%;
  }
  .navbar-nav .nav-link {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
}
</style>
