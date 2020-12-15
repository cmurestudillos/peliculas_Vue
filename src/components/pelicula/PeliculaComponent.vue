<!-- Vista HTML -->
<template>
<div class="container">
  <div v-if="pelicula" class="margenSuperior animated fadeIn slow">
    <div class="row mb-2">
      <div class="col-sm-10"><h1>{{ pelicula.original_title }}</h1></div>
      <div class="col-sm-2">
        <button @click="volver()" type="button" class="btn btn-4 btn-block"><i>Volver</i></button>
      </div>
    </div> 

    <div class="row">
      <div class="col-sm-5">
        <img v-if="pelicula.poster_path !== ''" class="img-thumbnail img-fluid" :src="pelicula.poster_path" :alt="pelicula.original_title">
        <img v-else class="img-thumbnail img-fluid" src="../../assets/img/no_image.png" :alt="pelicula.original_title">
      </div>
      <div class="col-sm-7">
        <h3> <strong>Sinopsis</strong> </h3>
        <hr>
        <p class="text-justify">{{ pelicula.overview }}</p>
        <p v-if="pelicula.tagline"><strong>Frase:</strong> {{ pelicula.tagline }}</p>
        <p><strong>Votos: </strong> <span class="badge badge-success"> {{ pelicula.vote_average}} </span></p>
      </div>
    </div>
  </div>
</div>

</template>

<!-- Funcionalidad JS -->
<script>
// Peticiones Http
import axios from 'axios';
// EndPoint
import global from '../../api/global';

export default {
  name: 'Peliculacomponent',
  mounted(){
      // Recogemos el parametro id de la pelicula seleccionada
      this.peliculaId = this.$route.params.id; 

      // Recogemos el parametro pag para saber de que pagina venimos
      if(this.$route.params.pag !== ''){
        this.pagina = this.$route.params.pag; 
      }
     
      // Recogemos el parametro busqueda para saber si venimos de buscar
      if(this.$route.params.texto !== ''){
        this.busqueda = this.$route.params.texto; 
      }

      // Llamamos al metodo
      this.getPelicula(this.peliculaId);
  },
  data(){
      return {
        api: global.urlApi,
        key: global.urlKey,
        pelicula: [],
        btnVolver: '',
        busqueda: '',
        poster: '',
        backdrop: '',
        urlImagen: "http://image.tmdb.org/t/p/w500"        
      }
  },
  methods: {
      // Metodo para obtener las peliculas mas populares
      getPelicula(peliculaId){

      // Log de seguimiento
      console.log('Peliculacomponent.vue - Metodo getPelicula');

      axios.get(this.api + '/movie/' + peliculaId + '?api_key=' + this.key + '&language=es-ES&region=ES')
          .then( res => {
              if(res.data){
                this.pelicula = res.data; 
                //console.log(this.pelicula) 
              }
              this.poster = this.urlImagen + this.pelicula.poster_path;
              if( this.pelicula.poster_path === null ){
                this.pelicula.poster_path = '';
              }else{
                this.pelicula.poster_path = this.poster;
              }
          });
      },
      // Metodo para volver a la pagina anterior
      volver(){
          // Log de seguimiento
          console.log('PeliculaComponent.vue - Metodo');
          
          if(this.$route.params.pag === 'home'){
            this.$router.push('/' + this.btnVolver);
          }else{
            if(this.$route.params.pag === 'buscar'){
              this.$route.params.texto = this.$route.params.busqueda;
              this.busqueda = this.$route.params.texto;
              this.$router.push({path: '/buscar/' + this.busqueda});
            }
          }
      }       
}    
}
</script>