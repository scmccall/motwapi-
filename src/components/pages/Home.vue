<template>
  <body>
    <div class="title-card">
      <h1>MOTWAPI</h1>
      <h3>A Monster of the Week API</h3>
    </div>
    <div class="subtitle-card">
      A simple RESTful API for all things regarding the tabletop RPG Monster of
      the Week.
      <br />
      Everything you need to get started with character creation.
    </div>
    <br />
    <b-container>
      <h2>Try it out!</h2>
      <b-form inline class="mb-md-3">
        <b-input-group :prepend="apiCallPrefix" size="sm">
          <b-input
            placeholder="playbooks/spooky"
            v-model="requestedResource"
          ></b-input>
          <b-input-group-append>
            <b-button @click="onSubmit" type="submit">Submit</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form>
      <b-card>
        <pre>{{ apiResults }}</pre>
      </b-card>
    </b-container>
  </body>
</template>

<script>
import axios from "axios";

export default {
  metaInfo: {
    title: "MOTWAPI - A Monster of the Week API",
    titleTemplate: null
  },
  data() {
    return {
      apiCallPrefix: "https://motwapi.com/api/v1/",
      requestedResource: "",
      apiResults: ""
    };
  },
  methods: {
    onSubmit: function(evt) {
      evt.preventDefault();
      axios
        .get(this.apiCallPrefix + this.requestedResource)
        .then(
          function(res) {
            console.log(res.data);
            JSON.stringify(res.data);
            this.apiResults = res.data;
          }.bind(this)
        )
        .catch(
          function(err) {
            console.error(err);
            this.apiResults = "Invalid request";
          }.bind(this)
        );
    }
  }
};
</script>

<style>
.title-card {
  padding: 30px 20px;
  text-align: center;
  background-color: lightcoral;
}

.subtitle-card {
  padding: 30px 25px;
  text-align: center;
  background-color: grey;
}
</style>
