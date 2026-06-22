<script setup lang="ts">
import { ref } from 'vue'

// Estado del switch (false = mensual, true = anual)
const anual = ref(false)

// Precios base mensuales
const planes = ref([
  {
    nombre: 'IPPBX CLOUD 30',
    mensual: 660,
    anual: 660 * 12,
    setup: 660,
    link: 'https://wa.link/supvjp',
    img: 'https://www.pbxhosting.com.mx/lp/assets/images/pbx30.png',
    specs: ['30 Llamadas Recurrentes', '4GB de Ram', '80GB SSD', '4TB Transferencia'],
  },
  {
    nombre: 'IPPBX CLOUD 60',
    mensual: 1320,
    anual: 1320 * 12,
    setup: 1320,
    link: 'https://wa.link/z36a8f',
    img: 'https://www.pbxhosting.com.mx/lp/assets/images/pbx60.png',
    specs: ['60 Llamadas Recurrentes', '8GB de Ram', '160GB SSD', '5TB Transferencia'],
  },
  {
    nombre: 'IPPBX CLOUD 150',
    mensual: 3330,
    anual: 3330 * 12,
    setup: 3330,
    link: 'https://wa.link/qek6dj',
    img: 'https://www.pbxhosting.com.mx/lp/assets/images/pbx150.png',
    specs: ['150 Llamadas Recurrentes', '16-32GB de Ram', '192GB SSD', '8TB Transferencia'],
  },
])
</script>

<template>
  <!-- PRECIOS -->
  <section id="precios" style="background-color: #ebf2fa" class="pt-5">
    <div class="pt-5">
      <div class="text-center">
        <h2 class="text-pbx-primary fw-bold fs-1">Precios Conmutador Virtual</h2>

        <!-- Switch Mensual/Anual -->
        <div class="fw-bold fs-5 d-flex align-items-center justify-content-center gap-3">
          <span>Mensual</span>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="con-switch" v-model="anual" />
            <label class="form-check-label" for="con-switch"></label>
          </div>
          <span>Anual</span>
        </div>
      </div>

      <!-- Tarjetas de precios -->
      <div class="container d-none d-md-block">
        <div class="row justify-content-center mt-4">
          <div v-for="plan in planes" :key="plan.nombre" class="col-12 mb-4">
            <div class="card p-4 shadow-sm border-0 rounded-4" style="background: white">
              <div class="row align-items-center">
                <!-- Columna Izquierda: Información de Compra y Botón -->
                <div
                  class="col-md-4 text-center d-flex flex-column align-items-center justify-content-center py-2"
                >
                  <h3 class="fw-bold text-dark fs-4 mb-1">{{ plan.nombre }}</h3>
                  <div class="d-flex align-items-center justify-content-center my-1 gap-1">
                    <span class="fs-2 fw-bold text-primary">
                      {{
                        anual
                          ? '$' + plan.anual.toLocaleString()
                          : '$' + plan.mensual.toLocaleString()
                      }}
                    </span>
                    <div class="text-start lh-1" style="font-size: 0.8rem">
                      <span class="text-primary fw-bold d-block">+IVA</span>
                      <span class="text-primary fw-bold d-block">MXN</span>
                    </div>
                  </div>
                  <div class="text-muted small mb-2">{{ anual ? 'Al Año' : 'Al Mes' }}</div>
                  <span class="text-primary fw-semibold d-block mb-3" style="font-size: 0.9rem">
                    SetUp ${{ plan.setup.toLocaleString() }}+IVA
                  </span>
                  <a
                    :href="plan.link"
                    class="btn btn-outline-primary px-4 py-1"
                    style="border-radius: 4px; font-weight: 500; min-width: 150px"
                    >Contratar</a
                  >
                </div>

                <!-- Columna Central: Imagen del Conmutador/Cloud -->
                <div
                  class="col-md-4 text-center my-3 my-md-0 d-flex align-items-center justify-content-center"
                >
                  <img
                    :src="plan.img"
                    :alt="plan.nombre"
                    class="img-fluid"
                    style="max-height: 130px; object-fit: contain"
                  />
                </div>

                <!-- Columna Derecha: Specs / Beneficios -->
                <div
                  class="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start"
                >
                  <ul class="list-unstyled mb-0 d-flex flex-column gap-2">
                    <li
                      v-for="spec in plan.specs"
                      :key="spec"
                      class="d-flex align-items-center gap-2 text-dark"
                      style="font-size: 1.05rem"
                    >
                      <i class="fa-solid fa-circle-plus text-primary"></i>
                      <span>
                        <strong class="text-dark">{{ spec.split(' ')[0] }}</strong>
                        {{ spec.substring(spec.indexOf(' ') + 1) }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Carrusel móvil -->
      <div class="container d-md-none mt-5">
        <div id="carouselExampleControls4" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner px-4">
            <div
              v-for="(plan, index) in planes"
              :key="plan.nombre"
              :class="['carousel-item', { active: index === 0 }]"
            >
              <div
                class="card h-100 text-center p-4 shadow-sm border-0 rounded-4"
                style="background: white"
              >
                <h3 class="fw-bold text-dark fs-4 mb-2">{{ plan.nombre }}</h3>
                <div class="d-flex align-items-center justify-content-center my-2 gap-1">
                  <span class="fs-2 fw-bold text-primary">
                    {{
                      anual
                        ? '$' + plan.anual.toLocaleString()
                        : '$' + plan.mensual.toLocaleString()
                    }}
                  </span>
                  <div class="text-start lh-1" style="font-size: 0.8rem">
                    <span class="text-primary fw-bold d-block">+IVA</span>
                    <span class="text-primary fw-bold d-block">MXN</span>
                  </div>
                </div>
                <div class="text-muted small mb-2">{{ anual ? 'Al Año' : 'Al Mes' }}</div>
                <span class="text-primary fw-semibold d-block mb-3" style="font-size: 0.9rem">
                  SetUp ${{ plan.setup.toLocaleString() }}+IVA
                </span>

                <img
                  :src="plan.img"
                  :alt="plan.nombre"
                  class="img-fluid my-3 mx-auto"
                  style="max-height: 120px; object-fit: contain"
                />

                <ul
                  class="list-unstyled my-3 text-start d-flex flex-column gap-2 mx-auto"
                  style="max-width: 280px"
                >
                  <li
                    v-for="spec in plan.specs"
                    :key="spec"
                    class="d-flex align-items-center gap-2 text-dark"
                  >
                    <i class="fa-solid fa-circle-plus text-primary"></i>
                    <span>
                      <strong class="text-dark">{{ spec.split(' ')[0] }}</strong>
                      {{ spec.substring(spec.indexOf(' ') + 1) }}
                    </span>
                  </li>
                </ul>

                <div class="mt-3">
                  <a
                    :href="plan.link"
                    class="btn btn-outline-primary px-4 py-2 w-100"
                    style="border-radius: 4px; font-weight: 500"
                    >Contratar</a
                  >
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls4"
            data-bs-slide="prev"
            style="width: 35px"
          >
            <span
              class="carousel-control-prev-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
              style="background-size: 50%"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls4"
            data-bs-slide="next"
            style="width: 35px"
          >
            <span
              class="carousel-control-next-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
              style="background-size: 50%"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- COMO FUNCIONA -->
  <section id="fun-pbxrub" style="background-color: #0099ff" class="py-5">
    <div class="">
      <h3 class="text-center text-white display-3 fw-semibold lh-1" style="letter-spacing: -2px">
        ¿Cómo funciona un <br />
        conmutador en la nube?
      </h3>
    </div>

    <div class="container">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner text-center">
          <div class="carousel-item active">
            <img
              src="https://www.pbxhosting.com.mx/assets/images/provisionamiento-rub.png"
              class="d-block img-fluid mx-auto"
              alt="..."
            />
            <div class="pt-4">
              <h5 class="text-white fw-semibold fs-2 pb-3">1. Aprovisionamiento del Servicio</h5>
              <p class="carousel-text-desc mx-auto text-white fs-5">
                Soporte Técnico configura y provisiona el conmutador telefónico en la nube según las
                necesidades del cliente. Esto incluye la asignación de números telefónicos y la
                configuración inicial del sistema.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.pbxhosting.com.mx/assets/images/edificios-extrub.png"
              class="d-block img-fluid mx-auto"
              alt="..."
            />
            <div class="pt-4">
              <h5 class="text-white fw-semibold fs-2 pb-3">2. Configuración de Extensiones</h5>
              <p class="carousel-text-desc mx-auto text-white fs-5">
                Se establecen extensiones telefónicas para cada usuario en la empresa,
                proporcionándoles números que les permiten realizar y recibir llamadas internas.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.pbxhosting.com.mx/assets/images/portal-freepbxrub.png"
              class="d-block img-fluid mx-auto"
              alt="..."
            />
            <div class="pt-4">
              <h5 class="text-white fw-semibold fs-2 pb-3">3. Acceso a la Interfaz Web</h5>
              <p class="carousel-text-desc mx-auto text-white fs-5">
                El cliente accede a una interfaz web en la nube para gestionar funciones del
                conmutador, como asignación de extensiones, configuración de desvíos, colas de
                llamadas e IVR.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.pbxhosting.com.mx/assets/images/dispositivos-rub.png"
              class="d-block img-fluid mx-auto"
              alt="..."
            />
            <div class="pt-4">
              <h5 class="text-white fw-semibold fs-2 pb-3">4. Configuración de Dispositivos</h5>
              <p class="carousel-text-desc mx-auto text-white fs-5">
                Los usuarios configuran sus dispositivos telefónicos, como en teléfonos IP o
                softphones, para conectarse al conmutador en la nube.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.pbxhosting.com.mx/assets/images/llamadas-listasrub.png"
              class="d-block img-fluid mx-auto"
              alt="..."
            />
            <div class="pt-4">
              <h5 class="text-white fw-semibold fs-2 pb-3">
                5. Realización y Recepción de Llamadas
              </h5>
              <p class="carousel-text-desc mx-auto text-white fs-5">
                Una vez configurado, los usuarios realizan y reciben llamadas utilizando las
                extensiones asignadas, tanto internas como externas según la configuración del
                sistema.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>

  <section id="beneficios-pbx">
    <div class="container ">
      <div class="row justify-content-center g-5 ">
        <div class="text-white col-12 col-lg-6 d-flex flex-column justify-content-center">
          <h2 class="lh-1 pb-5" >Beneficios de un conmutador en la nube</h2>
          <img
            src="https://www.pbxhosting.com.mx/assets/images/beneficios-conmutador.png"
            alt="empresa-beneficios-conmutador"
            class="pb-5 img-fluid d-block mx-auto w-100"
          />
          <p>
            Sus beneficios clave incluyen escalabilidad para adaptarse al crecimiento, gestión
            descentralizada para equipos distribuidos, asequibilidad al eliminar costos de hardware,
            facilidad de administración a través de una interfaz web, y funciones avanzadas que
            mejoran la experiencia del cliente, convirtiéndolo en una opción integral y eficiente
            para cualquier empresa.
          </p>
        </div>
        <div class="col-12 col-lg-6">
          <div class="">
            <div class="d-flex align-items-center gap-3">
              <div class="circulo">
                <img
                  src="https://www.pbxhosting.com.mx/assets/images/precio-pbx.png"
                  alt="conmutador virtual"
                  class="m-0"
                />
              </div>
              <h3 class="text-pbx-primary m-0">Menor Costo</h3>
            </div>
            <p class="pt-3 text-white">
              Tienen menores costos iniciales porque no requieren una infraestructura física
              extensa.
            </p>
          </div>
          <div class="">
            <div class="d-flex align-items-center gap-3"">
              <div class="circulo">
                <img
                  src="https://www.pbxhosting.com.mx/assets/images/profesional-pbx.png"
                  alt="conmutador virtual"
                  class="m-0"
                />
              </div>
              <h3 class="text-pbx-primary m-0">Mas Profesional</h3>
            </div>
            <p class="pt-3 text-white">Configura un menú de bienvenida con el nombre de tu empresa grabado.</p>
          </div>
          <div class="">
            <div class="d-flex align-items-center gap-3"">
              <div class="circulo">
                <img
                  src="https://www.pbxhosting.com.mx/assets/images/mejor-calidadpbx.png"
                  alt="conmutador virtual"
                  class="m-0"
                />
              </div>
              <h3 class="text-pbx-primary m-0">Mejor calidad</h3>
            </div>
            <p class="pt-3 text-white">La calidad de telefonía VOIP es superior a la telefonia tradicional.</p>
          </div>
          <div class="">
            <div class="d-flex align-items-center gap-3"">
              <div class="circulo">
                <img
                  src="https://www.pbxhosting.com.mx/assets/images/actualizaciones-pbx.png"
                  alt="conmutador virtual"
                  class="m-0"
                />  
              </div>
              <h3 class="text-pbx-primary m-0">Actualizaciones</h3>
            </div>
            <p class="pt-3 text-white">
              Las actualizaciones de software y las mejoras de seguridad se implementan de manera
              automática.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.form-check-input:checked {
  background-color: #2196f3;
  border-color: #2196f3;
}

.card {
  width: 100% !important;
  margin: 0 !important;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1); /* Hace que las flechas oscuras resalten sobre el fondo claro */
}

/* Estilo para los textos del carrusel de funcionamiento */
.carousel-text-desc {
  min-height: 100px;
  width: 50%;
}

/* BENEFICIOS*/
#beneficios-pbx{
  background-color: #143169 !important;
  padding-bottom: 100px;
  padding-top: 100px;

}

.circulo{
  border-radius: 50%;
  border: 2px solid #2298FF !important;
  padding: 10px !important;
  width: 50px !important;
  height: 50px !important;
  flex-shrink: 0;
  display: flex;
  justify-content: center;

 
}
.circulo img{
  width: 100% !important;
}



@media (max-width: 768px) {
  .carousel-text-desc {
    min-height: 170px;
    width: 90% !important;
  }
}
</style>
