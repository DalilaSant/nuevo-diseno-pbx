<script setup lang="ts">
import SectionTitleTwo from '../common/SectionTitleTwo.vue'
import { ref } from 'vue'

const formulario = ref({
  nombre: '',
  correo: '',
  empresa: '',
  telefono: '',
  asesor: '',
  mensaje: '',
})

const cargando = ref(false)

const enviarFormulario = async () =>{
  cargando.value = true

  try {
    //DESCOMENTAR ESTO CUANDO SE TENGA EL DOMINIO
    const captchaToken = await (window as any).grecaptcha.execute('', {
      action: 'submit_contacto'
    })

    // const captchaToken = 'token-simulado-para-pruebas'

    if (!captchaToken){
      alert('Validacion de seguridad fallida. Intente de nuevo.')
      cargando.value = false
      return
    }


  const formData = new FormData()
  formData.append('nombre', formulario.value.nombre)
  formData.append('correo', formulario.value.correo)
  formData.append('empresa', formulario.value.empresa)
  formData.append('telefono', formulario.value.telefono)
  formData.append('asesor', formulario.value.asesor)
  formData.append('mensaje', formulario.value.mensaje)
  formData.append('g-recaptcha-response', captchaToken)  

  const respuesta = await fetch('enviar.php',{
    method: 'POST',
    body: formData
  })

  const resultado = await respuesta.json()

  if (resultado.success){
    alert(resultado.message)
    formulario.value = { nombre: '', correo: '', empresa: '', telefono: '', asesor: '', mensaje: ''}
  }else{
    alert(resultado.message)
  }
}catch(error) {
  console.error('error de red/captcha: ', error)
  alert('No se pudo conectar econ el servidor para enviar el formulario. ')
} finally {
  cargando.value = false
}

}


</script>

<template>
  <section class="banner-section">
    <div class="py-5">
      <div class="container">
        <div class="row  gx-lg-5 g-5">
          <div class="col-12 col-lg-6  ">
            <div class="shadow-form-card">
              <SectionTitleTwo display-font="display-5">
                Queremos conocer<br>
                <span class="text-red">tus necesidades.</span>
              </SectionTitleTwo>
              <p class="fs-5 mb-lg-5 mb-3 text-center text-lg-start" style="max-width: 600px; ">
                Completa el formulario y uno de nuestros asesores se pondrá en contacto contigo.
              </p>
              <div class="card border-0">
                <div class="card-body ps-lg-0">
                  <form @submit.prevent="enviarFormulario" action="" class="row">
                    <div class="col-12 col-lg-6 ">
                      <div class="mb-4">
                        <input v-model="formulario.nombre" required type="text" class="form-control" id="nombre" placeholder="Nombre completo">
                      </div>
                      <div class="mb-4">
                        <input v-model="formulario.correo" required type="email" class="form-control" id="correo" placeholder="Correo electrónico">
                      </div>
                    </div>
                    <div class="col-12 col-lg-6 mb-4">
                      <div class="mb-4">
                        <input v-model="formulario.empresa" required type="text" class="form-control" id="empresa" placeholder="Empresa">
                      </div>
                      <div class="mb-4">
                        <input v-model="formulario.telefono" required type="tel" class="form-control" id="telefono" placeholder="Teléfono">
                      </div>
                    </div>
                    <div class="mb-4">
                      <label for="asesor"   class="fw-semibold">¿Qué solución te interesa?</label>
                      <select v-model="formulario.asesor" class="form-select placeholder-select" id="asesor" required>
                        <option value="" disabled selected>Selecciona una opción</option>
                        <option value="1">Telefonía IP</option>
                        <option value="2">Pbx Dialer</option>
                        <option value="3">Línea Telefónica</option>
                        <option value="4">Conmutador en la nube</option>
                        <option value="5">Diseño Web</option>
                        <option value="6">SMS Masivos</option>
                      </select>
                    </div>
                    <div class="mb-4">
                      <label for="mensaje"  class="fw-semibold">Cuéntanos sobre tu proyecto</label>
                      <textarea v-model="formulario.mensaje" required class="form-control" id="mensaje" placeholder="Códigos únicos para cada operador."
                        style="height: 100px;"></textarea>
                    </div>
                    <div>
                      <button type="submit" class="btn text-white mb-4 w-100" :disabled="cargando" style="background-color: #f12537;">{{ cargando ? 'Enviando...' : 'Enviar Solicitud' }}
                        ></button>
                    </div>

                  </form>
                </div>
              </div>
            </div>

          </div>
          <div class="col-12 col-lg-6 d-flex flex-column gap-cards">
            <div class="row card-row-shadow  bg-white overflow-hidden">
              <div class="col-lg-7 col-12 p-3">
                <div class="d-flex gap-2 align-items-center align-items-lg-start mt-lg-0 mt-3 ">
                  <img src="/img/contacto/ICONO_1_SECCIO_10.png" alt="" class="img-fluid img-wapp">
                  <SectionTitleTwo display-font="fs-2" marginBottomLine="mb-2 mb-lg-1 mb-xl-1 mb-xxl-1"
                    margin-botton="0" text-position="text-start" line-position="mx-0" class="titulo-cards">
                    Escríbenos por <br><span class="text-danger">WhatsApp.</span>
                  </SectionTitleTwo>
                </div>
                <p class="text-card">Habla directamente con un agente de nuestro equipo comercial.</p>
                <div>
                  <a href="https://api.whatsapp.com/send/?phone=5587894847&text&type=phone_number&app_absent=0"
                    target="_blank" class="btn mb-lg-0 mb-2 w-75 fw-medium"
                    style="background-color: transparent; border: 1px solid #003eb3; color: #003eb3;">Envíar
                    solicitud
                    ></a>
                </div>
              </div>
              <div class="col-lg-5 col-12 p-0 img-card-container">
                <img src="/img/contacto/IMAGEN_2_SECCION_10.png" alt="" class="img-fluid object-fit-cover h-100 w-100">
              </div>
            </div>
            <div class="row card-row-shadow  bg-white overflow-hidden">
              <div class="col-lg-7 col-12 p-3">
                <div class="d-flex gap-2 align-items-start">
                  <img src="/img/contacto/ICONO_2_SECCIO_10.png" alt="" class="img-fluid img-wapp">
                  <SectionTitleTwo display-font="fs-2" marginBottomLine="mb-2 mb-lg-1 mb-xl-1 mb-xxl-1"
                    margin-botton="0" text-position="text-start" line-position="mx-0" class="titulo-cards">
                    Atención <br><span class="text-danger">especializada.</span>
                  </SectionTitleTwo>
                </div>
                <p class="text-card">Obtén atención técnica oportuna y garantiza tu operación.</p>
                <div>
                  <a href="tel:+525541708990" class="btn mb-lg-0 mb-2 w-75 fw-medium"
                    style="background-color: transparent; border: 1px solid #003eb3; color: #003eb3;">Envíar mensaje
                    ></a>
                </div>
              </div>
              <div class="col-lg-5 col-12 p-0 img-card-container">
                <img src="/img/contacto/IMAGEN_3_SECCION_10.png" alt="" class="img-fluid object-fit-cover h-100  w-100">
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.shadow-form-card {
  padding-top: 3rem;
  padding-left: 2rem;
  box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
}

.placeholder-select {
  color: #6c757d;
}


.placeholder-select:valid {
  color: #212529;
}


.placeholder-select option {
  color: #212529;
}


.placeholder-select option[value=""] {
  color: #6c757d;
}

.img-wapp {
  margin-right: .4rem;
  width: 65px;
  height: 65px;
}

.text-card {
  margin-bottom: 2rem;
}

.gap-cards {
  gap: 2rem;
}

.card-row-shadow {
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
}



@media (min-width: 350px) and (max-width: 500px) {
  .shadow-form-card {
    padding-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
  }

  .card-row-shadow {
    width: 100%;
    margin: 0 auto;
  }

  .img-wapp {
    width: 55px;
    height: 55px;
  }

  .text-card {
    margin-bottom: 1.5rem;
  }

  .w-75 {
    width: 100% !important;
  }

  .gap-cards {
    gap: 4rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .shadow-form-card {
    padding-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
    width: 85%;
    margin: 0 auto;
  }

  .card-row-shadow {
    width: 85%;
    margin: 0 auto;
  }

  .img-wapp {
    width: 55px;
    height: 55px;
  }

  .text-card {
    margin-bottom: 1.5rem;
  }

  .w-75 {
    width: 50% !important;
  }

  .gap-cards {
    gap: 4rem;
  }


}




@media (max-width: 991.98px) {
  .img-card-container {
    height: 230px !important;
  }

  .img-card-container img {
    height: 100% !important;
    width: 100%;
    object-fit: cover;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  :deep(.titulo-cards h2) {
    font-size: 1.4rem !important;
  }

  .img-wapp {
    width: 57px;
    height: 57px;
  }

  .w-75 {
    width: 85% !important;
  }
}

@media (min-width: 1280px) and (max-width: 1440px) {
  :deep(.titulo-cards h2) {
    font-size: 1.7rem !important;
  }

  .img-wapp {
    width: 57px;
    height: 57px;
  }

  .w-75 {
    width: 85% !important;
  }
}
</style>
