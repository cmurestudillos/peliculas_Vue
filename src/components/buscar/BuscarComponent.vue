<template>
<div>
  <div class="container text-center jumbotron jumbotron-fluid margenSuperior">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
            <div class="form-group">
              <label> <strong>Buscar:</strong> </label>
              <input class="form-control" v-model="buscador" type="text" name="buscador" @keyup.enter="buscarPelicula()" placeholder="Buscar pelicula...">
            </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container row animated fadeIn slow">
    <!-- Card deck -->
    <div class="card-deck m-3" v-for="pelicula in peliculas" :key="pelicula.id">
      <!-- Card -->
      <div class="card mb-4">
        <!--Card image-->
        <div class="view overlay">
          <img class="card-img-top" :src="pelicula.poster_path" :alt="pelicula.original_title" :title="pelicula.original_title">
          <div class="mask rgba-white-slight"></div>
        </div>

        <!--Card content-->
        <div class="card-body">
          <!--Title-->
          <h4 class="card-title">{{ pelicula.original_title }}</h4>
          <!--Text-->
          <p class="card-text text-justify">{{ pelicula.overview }}...</p>

          <router-link :to="{name: 'pelicula', params: {id: pelicula.id, pag: 'buscar', busqueda: buscador} }">Leer mas ...
            <button type="button" class="btn btn-4 btn-md">Leer mas ... </button>
          </router-link>
        </div>
      </div>
      <!-- Card -->
    </div>
    <!-- Card deck -->
  </div>

  <SinDatosComponent v-if="!cargando && peliculas.length === 0"></SinDatosComponent>
  <LoadingComponent v-if="cargando"></LoadingComponent>
</div>
</template>

<script>
// Peticiones Http
import axios from 'axios';
// EndPoint
import global from '../../api/global';
import SinDatosComponent from '../shared/sin_datos/SinDatosComponent.vue';
import LoadingComponent from '../shared/loading/LoadingComponent.vue';

export default {
  components: { SinDatosComponent, LoadingComponent },
  name: 'BuscarComponent',
  mounted(){

    // Recogemos el parametro id de la pelicula seleccionada
    //this.buscador = this.$route.params.busqueda; 

    // Llamamos al metodo
    this.buscarPelicula();
  },
  data(){
      return {
        buscador: '',
        cargando:false,
        api: global.urlApi,
        key: global.urlKey,        
        peliculas:[],
        poster: '',
        backdrop: '',
        noImagen: '',
        urlImagen: "http://image.tmdb.org/t/p/w500"
      }
  },
  methods: {
    // Metodo para obtener las peliculas mas populares
    buscarPelicula(){

      // Log de seguimiento
      console.log('BuscarComponent.vue - Metodo buscarPelicula');

      this.cargando = true;
      
      if(this.buscador !== ''){
        axios.get(this.api + '/search/movie?query='+ this.buscador + '&sort_by=popularity.desc&api_key=' + this.key + '&language=es-ES&region=ES')
        .then( res => {
          if(res.data){
            this.peliculas = res.data.results; 
            this.cargando = false;
            //console.log(this.peliculas) 
          }
          for (const key in this.peliculas) {
            if (Object.hasOwnProperty.call(this.peliculas, key)) {
              this.poster = this.urlImagen + this.peliculas[key].poster_path;
              this.peliculas[key].poster_path = this.poster;
            }
          }              
        });
      }
    }  
  }   
}
</script>
