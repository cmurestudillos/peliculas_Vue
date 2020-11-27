import Vue from 'vue';
// Rutas
import VueRouter from 'vue-router';
// Componentes
import HomeComponent from '../components/home/HomeComponent.vue';
import ErrorComponent from '../components/shared/error/ErrorComponent.vue';

// ---------------------------------------------------------------//
// Configuracion del enrutamiento                                 //
// ---------------------------------------------------------------//
Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeComponent},
    {path: '*', component: ErrorComponent }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;