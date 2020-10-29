<template>
  <header>
    <b-navbar type="light" variant="info" toggleable="md">
      <b-navbar-brand>
        <router-link to="/">MOTWAPI</router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav align="end">
          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/documentation">Documentation</router-link>
          </b-nav-item>
          <b-nav-item>
            <a href="https://github.com/scmccall/motwAPI" target="__blank"
              >Contribute
            </a>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
