<script setup lang="ts">
import { ref } from 'vue'

//aqui se hace la variable reactiva con el ref
const elementoActivo = ref(1)
</script>

<template>
  <section id="pbx-dat">
    <div class="container my-5 pt-5">
      <div class="text-center">
        <h2 class="fw-bold display-5">Funciones de un Conmutador en la Nube</h2>
      </div>
      <div class="row justify-content-center pt-5 mt-4 g-4">
        <div class="col-12 col-lg-4">
          <div class="p-4 rounded-4 h-100" style="border: 2px solid #0099ff">
            <img
              src="/img/conmutador/extensiones-rub.png"
              alt="extensiones en conmutador"
              class="img-fluid w-25 pb-3"
            />
            <h3>
              Crea <br />
              Extensiones
            </h3>
            <p>Asigna líneas telefónicas a áreas específicas o a miembros del personal.</p>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="p-4 rounded-4 h-100" style="border: 2px solid #0099ff">
            <img
              src="/img/conmutador/transferencia-rub.png"
              alt="transferencia de llamadas"
              class="img-fluid w-25 pb-3"
            />
            <h3>
              Transfiere <br />
              Llamadas
            </h3>
            <p>
              Permite redirigir llamadas a diferentes extensiones o áreas de manera eficiente,
              optimizando la comunicación interna.
            </p>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="p-4 rounded-4 h-100" style="border: 2px solid #0099ff">
            <img
              src="/img/conmutador/conferencia-rub.png"
              alt="llamadas en conferencia"
              class="img-fluid w-25 pb-3"
            />
            <h3>Conferencia <br />de Llamadas</h3>
            <p>
              Facilita la colaboración y la toma de decisiones entre varios miembros del equipo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="funciones" class="py-2 py-lg-5">
    <div class="container">
      <div class="">
        <div class="row justify-content-center py-5">
          <div class="col-lg col-12">
            <button
              :class="['btn-fun', { active: elementoActivo === 1 }]"
              @click="elementoActivo = 1"
            >
              <i class="fa-solid fa-chart-simple"></i> Escalabilidad
            </button>
          </div>
          <div class="col-lg col-12">
            <button
              :class="['btn-fun', { active: elementoActivo === 2 }]"
              @click="elementoActivo = 2"
            >
              <i class="fa-solid fa-phone-volume"></i> Extensiones ilimitadas
            </button>
          </div>

          <div class="col-lg col-12">
            <button
              :class="['btn-fun', { active: elementoActivo === 3 }]"
              @click="elementoActivo = 3"
            >
              <i class="fa-solid fa-robot"></i> Recepcionista Virtual (IVR)
            </button>
          </div>

          <div class="col-lg col-12">
            <button
              :class="['btn-fun', { active: elementoActivo === 4 }]"
              @click="elementoActivo = 4"
            >
              <i class="fa-solid fa-code-pull-request"></i> Cola de llamadas
            </button>
          </div>

          <div class="col-lg col-12">
            <button
              :class="['btn-fun', { active: elementoActivo === 5 }]"
              @click="elementoActivo = 5"
            >
              <i class="fa-solid fa-mobile-screen-button"></i> FollowMe
            </button>
          </div>
        </div>

        <div>
          <div v-show="elementoActivo === 1" id="elemento-1">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-12">
                <img
                  src="https://www.pbxhosting.com.mx/lp/assets/images/conferencia.png"
                  alt="conmutador-escalable"
                  class="img-fluid mx-auto d-block"
                />
              </div>
              <div class="col-lg-6 col-12 pt-4">
                <h3 class="fw-bold fs-2">Escalabilidad</h3>
                <p>
                  Los conmutadores en la nube permiten escalar fácilmente el sistema telefónico de
                  tu empresa sin necesidad de invertir en hardware adicional. Puedes agregar o
                  eliminar líneas telefónicas y funcionalidades según las necesidades cambiantes de
                  tu negocio, brindando flexibilidad y adaptabilidad.
                </p>
              </div>
            </div>
          </div>
          <div v-show="elementoActivo === 2" id="elemento-2">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-12 ">
                <img
                  src="https://www.pbxhosting.com.mx/assets/images/extensiones.png"
                  alt="conmutador-extensiones"
                  class="img-fluid mx-auto d-block"
                />
              </div>
              <div class="col-lg-6 col-12  pt-4">
                <h3 class="fw-bold fs-2">Extensiones ilimitadas</h3>
                <p>
                  Ya sea que tengas 10 empleados o 1000, nuestras extensiones ilimitadas garantizan
                  que cada miembro de tu equipo tenga su propia línea personalizada, mejorando la
                  productividad, la colaboración y la atención al cliente. Simplifica tu sistema
                  telefónico y expande tu negocio sin restricciones con nuestras extensiones
                  ilimitadas en el conmutador en la nube.
                </p>
              </div>
            </div>
          </div>
          <div v-show="elementoActivo === 3" id="elemento-3">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-12">
                <img
                  src="https://www.pbxhosting.com.mx/assets/images/ivr-pbx.png"
                  alt="recepcionista-virtual"
                  class="img-fluid mx-auto d-block"
                />
              </div>
              <div class="col-lg-6 col-12  pt-4">
                <h3 class="fw-bold fs-2">Recepcionista Virtual (IVR)</h3>
                <p>
                  Olvídate de largas esperas y brinda una experiencia personalizada desde el primer
                  contacto. Nuestra Recepcionista Virtual te permite gestionar y enrutar llamadas de
                  manera eficiente, ofreciendo opciones de menú interactivas para que los clientes
                  encuentren rápidamente lo que necesitan. Escucha uno de ejemplo: <br />
                </p>
                <audio controls>
                  <source
                    src="https://www.pbxhosting.com.mx/assets/images/ivr-pbx.wav"
                    type="audio/mp3"
                  />
                  Tu navegador no soporta audio HTML5.
                </audio>
              </div>
            </div>
          </div>

          <div v-show="elementoActivo === 4" id="elemento-4">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-12">
                <img
                  src="https://www.pbxhosting.com.mx/assets/images/quue.png"
                  alt="cola-de-llamadas"
                  class="img-fluid mx-auto d-block"
                />
              </div>
              <div class="col-lg-6 col-12  pt-4">
                <h3 class="fw-bold fs-2">Cola de llamadas</h3>
                <p>
                  Asegura que cada llamada sea atendida en orden, dependiendo de la prioridad en que
                  coloques cada departamento dentro de tu empresa, si en un área no responden se
                  mande a otra y asi sucesivamente sin perder la llamada.
                </p>
              </div>
            </div>
          </div>
          <div v-show="elementoActivo === 5" id="elemento-5">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-12">
                <img
                  src="https://www.pbxhosting.com.mx/lp/assets/images/followme-conmutador.png"
                  alt="-followme-conmutador"
                  class="img-fluid mx-auto d-block"
                />
              </div>
              <div class="col-lg-6 col-12  pt-4">
                <h3 class="fw-bold fs-2">FollowMe</h3>
                <p>
                  Es una característica que permite redirigir las llamadas de una extensión a otra y
                  tiene varias aplicaciones útiles. La configuración se realiza vinculando el
                  seguimiento de llamadas a una extensión específica y ajustando el plan de marcado
                  según sea necesario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
</template>

<style scoped>
.btn-fun {
  background-color: #ebf2fa;
  border: none;
  margin: 0 10px; /* Ajusta los márgenes horizontalmente */
  width: 100%;
  height: 50px;
  cursor: pointer;
  border-radius: 10px;
  color: #2298ff;
  font-weight: 700;
  outline: none !important;
}
.active {
  background-color: #2298ff;
  color: white;
}
</style>
