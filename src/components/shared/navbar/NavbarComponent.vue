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
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar..."></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0 btn-buscar" type="submit">Buscar</b-button>
            </b-nav-form>
          </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'NavbarComponent',
}
</script>