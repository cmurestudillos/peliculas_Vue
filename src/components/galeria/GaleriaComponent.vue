<template>
  <div>
    <h1>Peliculas Populares</h1>
    <hr>    

    <div class="row animated fadeIn slow" v-if="peliculas">
      <div class="col-sm-6" v-for="pelicula in peliculas" :key="pelicula.id">
        <div class="row">
          <div class="col-md-12 div-pic-1 puntero" :style="{ 'background-image': 'url( ' + (pelicula.poster_path) + ' )' }">
              <p class="pic-titulo">{{ pelicula.original_title }}</p>
          </div>
        </div>
      </div>       
    </div>     
   
  </div>
</template>

<script>
// Peticiones Http
import axios from 'axios';
// EndPoint
import global from '../../api/global';

export default {
  name: 'GaleriaComponent',
  mounted(){
      // Llamamos al metodo
      this.getPeliculasPopulares();
  },
  data(){
      return {
        api: global.urlApi,
        key: global.urlKey,
        peliculas: [],
        poster: '',
        backdrop: '',
        urlImagen: "http://image.tmdb.org/t/p/w500"
      }
  },
  methods: {
      // Metodo para obtener las peliculas mas populares
      getPeliculasPopulares(){

      // Log de seguimiento
      console.log('GaleriaComponent.vue - Metodo getPeliculasPopulares');

      axios.get(this.api + '/discover/movie?sort_by=popularity.desc&api_key=' + this.key + '&language=es-ES&region=ES')
          .then( res => {
              if(res.data){
                this.peliculas = res.data.results; 
                //console.log(this.peliculas) 
              }
              for (let index = 0; index < this.peliculas.length; index++) {
                this.poster = this.urlImagen + this.peliculas[index].poster_path;
                this.peliculas[index].poster_path = this.poster;
                this.backdrop = this.urlImagen + this.peliculas[index].backdrop;
                this.peliculas[index].backdrop = this.backdrop;
              }
          });
      }
  },
  peliculaImagen(pelicula,poster){

    let url = "http://image.tmdb.org/t/p/w500";

    if( poster ){
      return url + pelicula.poster_path;
    }

    if( pelicula.backdrop_path ){
      return url + pelicula.backdrop_path;
    }else{
      if( pelicula.poster_path ){
        return url + pelicula.poster_path;
      }else{
        return "assets/img/no_image.png";
      }
    }
  }     
}
</script>
