<template>
  <div> 
    <b-jumbotron class="container text-center display-4 bg-white border shadow p-3 mb-5 bg-white rounded" header="BlockBuster" lead="Buscador de peliculas">
    </b-jumbotron>
    <div class="container">
      <br>
      <GaleriaComponent></GaleriaComponent>
    </div>
  </div>
</template>

<script>
// Componentes
import GaleriaComponent from '../galeria/GaleriaComponent.vue';

export default {
  name: 'HomeComponent',
  components: {
    GaleriaComponent
  }  
}
</script>
