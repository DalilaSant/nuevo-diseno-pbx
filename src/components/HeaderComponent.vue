<script setup lang="ts"></script>

<template>
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
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <!-- Dropdown Telefonía IP -->
          <li class="nav-item dropdown">
            <!-- PC: Link directo sin data-bs-toggle para que funcione el click -->
            <router-link class="nav-link dropdown-toggle d-none d-xl-block" to=""
              >Soluciones</router-link
            >
            <!-- Móvil: Botón para abrir el menú -->
            <a
              class="nav-link dropdown-toggle d-xl-none"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Soluciones</a
            >

            <ul class="dropdown-menu border-0 shadow-sm">
              <!-- <li class="d-xl-none">
                <router-link
                  class="dropdown-item fw-bold border-bottom pb-2 mb-2 text-pbx-primary"
                  to=""
                  >Ver Soluciones</router-link
                >
              </li> -->
              <li>
                <router-link class="dropdown-item" to="/soluciones-telefonia-ip"
                  ><i class="fa-solid fa-phone me-2"></i> Telefonía IP</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/soluciones-sms-masivo"
                  ><i class="fa-solid fa-message me-2"></i> SMS Masivo</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/soluciones-whatsapp-masivo">
                  <i class="fa-brands fa-whatsapp me-2 custom-whatsapp-icon"></i>Whatsapp Masivo
                </router-link>  
              </li>
              <li>
                <router-link class="dropdown-item" to="/soluciones-agenteia"
                  ><i class="fa-solid fa-robot me-2"></i>Agente IA</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/infraestructura-web"
                  ><i class="fa-solid fa-server me-2"></i>Infraestructura Web</router-link
                >
              </li>
              <li>
                <a class="dropdown-item" href="https://luminel.mx/" target="_blank"
                  ><i class="fa-solid fa-pen-to-square me-2"></i>Diseño Web</a>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/numeracion">Numeración Telefónica</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/recursos">Recursos</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/nosotros">Nosotros</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/contacto">Contacto</router-link>
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
  color: #272727 !important;
}

.navbar-nav .nav-link:hover,
.navbar-nav .dropdown-item:hover {
  color: #003eb3 !important;
}

/* Personalización del estado activo/click en el submenú */
.navbar-nav .dropdown-item:active,
.navbar-nav .dropdown-item:focus,
.navbar-nav .dropdown-item.active {
  background-color: #e6f0ff !important; /* Azul claro muy suave y elegante */
  color: #003eb3 !important; /* El azul oscuro de tu marca */
}

.btn-primary{
  background-color: transparent !important;
  color: #003eb3 !important;
  border-color: #003eb3 !important;
}
.btn-primary:hover{
  background-color: #003eb3 !important;
  color: #fff !important;
  border-color: #003eb3 !important;
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

/* Icono circular de WhatsApp a la inversa */
.custom-whatsapp-icon {
  background-color: #272727; /* Mismo color gris/negro que el texto y demás iconos */
  color: #ffffff !important; /* El logo de WhatsApp en blanco */
  border-radius: 50%;
  width: 1.15rem;
  height: 1.15rem;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  font-size: .8rem !important;
  vertical-align: middle;
}
</style>
