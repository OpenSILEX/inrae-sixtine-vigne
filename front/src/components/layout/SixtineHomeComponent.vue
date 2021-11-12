<template>
  <div class="main-content">
    <div fluid="sm">
      <div class="center logo-centered">
        <img v-bind:src="$opensilex.getResourceURI('images/sixtine-logo-complet.png')" alt="sixtine-logo-complet" />
        <br>
        <br>
        <h2>{{$t('sixtine.title')}}</h2>
      </div>
      <br>
      <div class="inrae-logo center">
        <img v-bind:src="$opensilex.getResourceURI('images/logo-marque-inrae.png')" alt="inrae-logo"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class SixtineHomeComponent extends Vue {}
</script>

<style scoped lang="scss">
.center {
    text-align: center;
}

.logo-centered > img {
  display: center;
  width: 600px;
  height: 250px;  
}

.inrae-logo {
  margin-top: 20px;
}
</style>
