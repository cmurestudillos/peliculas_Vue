import Vue from 'vue';
// Rutas
import VueRouter from 'vue-router';
// Componentes
import HomeComponent from '../components/home/HomeComponent.vue';
import BuscarComponent from '../components/buscar/BuscarComponent.vue';
import PeliculaComponent from '../components/pelicula/PeliculaComponent.vue';
import ErrorComponent from '../components/shared/error/ErrorComponent.vue';

// ---------------------------------------------------------------//
// Configuracion del enrutamiento                                 //
// ---------------------------------------------------------------//
Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeComponent},
    {path: 'buscar', component: BuscarComponent},
    {path: 'buscar/:texto', component: BuscarComponent},
    {path: 'pelicula/:id/:pag', component: PeliculaComponent},
    {path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent},
    {path: '*', component: ErrorComponent }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;