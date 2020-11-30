<template>
  <div id="app">
    <NavbarComponent></NavbarComponent>

    <router-view></router-view>

    <!-- Limpiar los float -->
    <div class="clearfix"></div>
    <FooterComponent></FooterComponent>    
  </div>
</template>

<script>
// Componentes comunes
import NavbarComponent from './components/shared/navbar/NavbarComponent.vue';
import FooterComponent from './components/shared/footer/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>

<style>
  /* Estilos */
  @import './assets/css/App.css';
</style>
