<template>
  <div>
    <h1>Peliculas Populares</h1>
    <hr>    
    <div class="col-sm-6">
      <div class="row">
        <div class="col-md-12" :style="{ 'background-image': 'url( ' + (peliculas[0].backdrop_path) + ' )' }">
            <p>{{ peliculas[0].original_title }}</p>
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
                console.log(this.peliculas)              
              }
          });
      }
  }   
}
</script>
