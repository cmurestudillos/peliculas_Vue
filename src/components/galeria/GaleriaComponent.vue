<template>
  <div>
    <h1>Peliculas Populares</h1>
    <hr>    

    <div class="row animated fadeIn slow" v-if="peliculas">
      <div class="col-sm-6">
        <div class="row">
            <div class="col-md-12 div-pic-1" :style="{ 'background-image': 'url( ' + (peliculas[0].poster_path) + ' )' }">
               <router-link :to="{name:'pelicula', params: {id: peliculas[0].id, pag: 'home'} }">
                  <p class="pic-titulo puntero">{{ peliculas[0].original_title }}</p>
                </router-link>
            </div>
        </div>

        <div class="row">
          <div class="col-sm-6 div-pic-2" :style="{ 'background-image': 'url( ' + (peliculas[1].poster_path) + ' )'  }">
              <router-link :to="{name:'pelicula', params: {id: peliculas[1].id, pag: 'home'} }">
                <p class="pic-titulo puntero">{{ peliculas[1].original_title }}</p>
              </router-link>
          </div>
          <div class="col-sm-6 div-pic-2" :style="{ 'background-image': 'url( ' + (peliculas[2].poster_path) + ' )'  }">
            <router-link :to="{name:'pelicula', params: {id: peliculas[2].id, pag: 'home'} }">
              <p class="pic-titulo puntero">{{ peliculas[2].original_title }}</p>
            </router-link>
          </div>
        </div>         
      </div>  

      <div class="col-sm-6">
        <div class="row">
          <div class="col-sm-12 div-pic-2" :style="{ 'background-image': 'url( ' + (peliculas[3].poster_path) + ' )'  }">
            <router-link :to="{name:'pelicula', params: {id: peliculas[3].id, pag: 'home'} }">
              <p class="pic-titulo puntero">{{ peliculas[3].original_title }}</p>
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 div-pic-1" :style="{ 'background-image': 'url( ' + (peliculas[4].poster_path) + '  )'  }">
            <router-link :to="{name:'pelicula', params: {id: peliculas[4].id, pag: 'home'} }">
              <p class="pic-titulo puntero">{{ peliculas[4].original_title }}</p>
            </router-link>
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
            for (const key in this.peliculas) {
              if (Object.hasOwnProperty.call(this.peliculas, key)) {
                if(this.peliculas[key].poster_path === null){
                  this.peliculas[key].poster_path = '';
                }else{
                  this.peliculas[key].poster_path = this.urlImagen + this.peliculas[key].poster_path;
                }
              }
            }
        });
      }
  }
}
</script>
