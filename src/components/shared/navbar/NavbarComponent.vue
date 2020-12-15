<template>
  <div>
    <b-navbar toggleable="lg" class="bg-custom">
        <b-navbar-brand>
            <img src="../../../assets/img/logo.png" alt="Graficos" title="Graficos" height="38">
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link to="/home" active-class="active">Inicio</router-link></b-nav-item>
            <b-nav-item><router-link to="/buscar" active-class="active">Buscar</router-link></b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form @submit.prevent="buscarPelicula(texto)">
              <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar..." v-model="texto"></b-form-input>
              <b-button size="sm" class="btn btn-4" type="submit">Buscar</b-button>
            </b-nav-form>
          </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  mounted(){
      // Llamamos al metodo
      this.buscarPelicula(this.texto);
  },
  data(){
      return {
        texto: ''
      }
  },
  methods: {
    // Metodo para obtener las peliculas mas populares
    buscarPelicula(stringBusqueda){

      // Log de seguimiento
      console.log('NavbarComponent.vue - Metodo buscarPelicula');

      console.log(stringBusqueda)

      this.$router.push('/buscar/' + stringBusqueda);

    }
  }   
}
</script>
