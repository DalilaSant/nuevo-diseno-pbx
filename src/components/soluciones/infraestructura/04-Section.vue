<script setup lang="ts">
import { ref, onMounted } from 'vue';

//explicacion pendiente de como funciona todo esto 
const search = ref('');
const prices = ref({
  com: '299.00',
  'com.mx': '250.00',
  mx: '800.00',
  'org.mx': '250.00'
});

const fetchPrices = async () => {
  try {
    const response = await fetch('https://pbxhosting.com.mx/dominios/getDomainPrices.php'); // o ruta a la API
    const result = await response.json();
    if (result.success) {
      const data = JSON.parse(result.data);
      data.forEach((element: any) => {
        if (element.domain in prices.value) {
          (prices.value as any)[element.domain] = element.register;
        }
      });
    }
  } catch (error) {
    console.error('Error al cargar los precios:', error);
  }
};

const handleSearch = () => {
  const query = search.value.trim();
  if (!query) return;

  const secureQuery = encodeURIComponent(query);
  

  const redirectUrl = `https://www.pbxhosting.com.mx/billing/cart.php?a=add&domain=register&query=${secureQuery}`;
  

  window.open(redirectUrl, '_blank');
};

onMounted(() => {
  fetchPrices();
});
</script>
<template>
  <section class="domain-section pt-5 my-xl-4 pt-lg-0 pb-3">
    <div class="container">
      <div class="domain-card mx-auto  p-md-5">
        <!-- Título -->
        <h2 class="section-title text-red text-center fw-semibold mb-4 ">
          Encuentra tu Dominio.
        </h2>
        <!-- Buscador -->
        <div class="row justify-content-center mb-4">
          <div class="col-12  col-lg-10">
            <div class="search-wrapper d-flex align-items-center bg-light rounded-pill p-1 shadow-sm">
              <input type="text" v-model="search" @keyup.enter="handleSearch"
                placeholder="Escribe el nombre de tu dominio" class="form-control border-0 bg-transparent  px-4 py-0" />
              <button @click="handleSearch" class="btn btn-search rounded-pill px-4 py-2 text-white ">
                Buscar
              </button>
            </div>
          </div>
        </div>
        <!-- Extensiones y Precios -->
        <div class="row justify-content-center mb-4">
          <div class="col-12 col-md-10">
            <div class="d-flex flex-wrap justify-content-center gap-5 text-center">
              <div class="price-item px-3">
                <span class="ext-name fw-semibold  d-block mb-1">.com</span>
                <span class="ext-price fw-semibold text-dark">${{ prices['com'] }}</span>
              </div>
              <div class="price-item px-3">
                <span class="ext-name fw-semibold  d-block mb-1">.com.mx</span>
                <span class="ext-price fw-semibold text-dark">${{ prices['com.mx'] }}</span>
              </div>
              <div class="price-item px-3">
                <span class="ext-name fw-semibold  d-block mb-1">.mx</span>
                <span class="ext-price fw-semibold text-dark">${{ prices['mx'] }}</span>
              </div>
              <div class="price-item px-3">
                <span class="ext-name fw-semibold  d-block mb-1">.org.mx</span>
                <span class="ext-price fw-semibold text-dark">${{ prices['org.mx'] }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Enlaces / Pastillas de abajo -->
        <div class="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <a class="btn btn-pill-action d-flex align-items-center gap-2 px-4 py-2">
            <i class="fa-solid fa-arrows-rotate text-muted"></i>
            Transferir Dominio
          </a>
          <a 
            class="btn btn-pill-action d-flex align-items-center gap-2 px-4 py-2">
            <i class="fa-solid fa-server text-muted"></i>
            Hosting + Dominio
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.section-title {
    font-size: 2.2rem;
    letter-spacing: -0.5px;
}
.domain-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #212529;
}

.text-red {
  color: #e63946;
  /* El tono rojo del diseño nuevo */
}

/* Buscador */
.search-wrapper {
  background-color: #f1f3f5 !important;
  border: 1px solid #e9ecef;
}

.search-wrapper input {
  font-size: 1.1rem;
}

.search-wrapper input:focus {
  outline: none;
  box-shadow: none;
}

.search-wrapper input::placeholder{
  color: #8a8a8a;
  opacity: 1;
}


.btn-search {
  background-color: #8a8a8a;
  /* Gris de la segunda imagen */
  border: none;
  transition: background-color 0.2s ease;
}

.btn-search:hover {
  background-color: #6c757d;
}

/* Extensiones */
.ext-name {
  font-size: 1.1rem;
  color: #8a8a8a;
}

.ext-price {
  font-size: 1.3rem;
  font-weight: 800;
}

/* Botones de acción inferiores */
.btn-pill-action {
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  color: #495057;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;
  text-decoration: none;
  cursor: default;
}

.btn-pill-action:hover {
  background-color: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
}

@media (max-width: 576px) {
  .search-wrapper input::placeholder{
    font-size: 0.8rem;
  }
}
</style>