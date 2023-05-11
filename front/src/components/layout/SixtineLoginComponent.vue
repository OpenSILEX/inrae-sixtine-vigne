
<template>
  <opensilex-DefaultLoginComponent>
    <template v-slot:loginMedia>
      <b-img
        :src="
          $opensilex.getResourceURI('images/opensilex-login-bg.jpg')
        "
      ></b-img>
    </template>
    <template v-slot:loginLogo>
      <b-img
        :src="
          $opensilex.getResourceURI('images/sixtine-logo.png')
        "
        fluid
        alt="Responsive image"
      ></b-img>
    </template>
    <template v-slot:loginFooter> 
        <b-img
          class="w-75"
          center
          :src="
            $opensilex.getResourceURI('images/logo-marque-inrae.png')
          "
          alt="Responsive image"
        ></b-img> 
    </template>
  </opensilex-DefaultLoginComponent>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import { VersionInfoDTO } from "opensilex-core/index";
import OpenSilexVuePlugin from "../../../../../opensilex-front/front/src/models/OpenSilexVuePlugin";

@Component
export default class SixtineLoginComponent extends Vue {
  versionInfo: VersionInfoDTO = {};
  $opensilex: OpenSilexVuePlugin;
  $t: any;

  created() {
    this.versionInfo = this.$opensilex.versionInfo;
  }

}
</script>

<style scoped lang="scss"> 

.authentication-form .mx-auto  > .logo-centered > img{
  width: 350px!important;
}

</style>
 
<i18n>
en:
  LoginComponent:
    selectLoginMethod: Select login method
    passwordConnectionTitle: Connect with password
    forgotPassword: Forgot password ?
fr:
  LoginComponent:
    selectLoginMethod: Choisir la méthode de connexion
    passwordConnectionTitle: Connexion par mot de passe
    forgotPassword: Mot de passe oublié ?
</i18n>