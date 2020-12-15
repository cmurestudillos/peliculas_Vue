<template>
<div>
  <div class="jumbotron container text-center display-4 bg-white border shadow p-3 mb-5 bg-white rounded">
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

  <div class="container mx-auto row animated fadeIn slow">
    <b-card-group columns>
      <b-card v-for="pelicula in peliculas" :key="pelicula.id">
        <b-card-img v-if="pelicula.poster_path !== ''" :src="pelicula.poster_path" :alt="pelicula.original_title" img-top class="rounded-0"></b-card-img>
        <img v-else src="../../assets/img/no_image.png" :alt="pelicula.original_title" img-top class="rounded-0">
        <b-card-title>{{pelicula.original_title}}</b-card-title>
        <b-card-text>
          {{pelicula.overview}}
        </b-card-text>
        <router-link :to="{name: 'pelicula', params: {id: pelicula.id, pag: 'buscar', busqueda: buscador} }">Leer mas ...
          <button type="button" class="btn btn-4 btn-md">Leer mas ... </button>
         </router-link>
      </b-card>
    </b-card-group>   
  </div>

  <SinDatosComponent v-if="!cargando && peliculas.length === 0"></SinDatosComponent>
  <LoadingComponent v-if="cargando && this.buscador.length > 0"></LoadingComponent>
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
    if(this.$route.params.texto !== '' && this.$route.params.texto !== undefined){
      this.buscador = this.$route.params.texto;
    }

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
        urlImagen: "http://image.tmdb.org/t/p/w500"
      }
  },
  methods: {
    // Metodo para obtener las peliculas mas populares
    buscarPelicula(){

      // Log de seguimiento
      console.log('BuscarComponent.vue - Metodo buscarPelicula');

      this.cargando = true;
      
      axios.get(this.api + '/search/movie?query='+ this.buscador + '&sort_by=popularity.desc&api_key=' + this.key + '&language=es-ES&region=ES')
      .then( res => {
        if(res.data){
          this.peliculas = res.data.results; 
          this.cargando = false;
          //console.log(this.peliculas) 
        }
        for (const key in this.peliculas) {
          if (Object.hasOwnProperty.call(this.peliculas, key)) {
            if(this.peliculas[key].poster_path === null){
              this.peliculas[key].poster_path = '';
            }else{
              this.poster = this.urlImagen + this.peliculas[key].poster_path;
              this.peliculas[key].poster_path = this.poster;
            }

          }
        }              
      });
    }  
  }   
}
</script>
