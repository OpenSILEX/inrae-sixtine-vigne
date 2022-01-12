/// <reference path="../../../opensilex-security/front/types/opensilex-security.d.ts" />
/// <reference path="../../../opensilex-core/front/types/opensilex-core.d.ts" />
import SixtineLoginComponent from "./components/layout/SixtineLoginComponent.vue";
import SixtineFooterComponent from "./components/layout/SixtineFooterComponent.vue";
import SixtineMenuComponent from "./components/layout/SixtineMenuComponent.vue";
import SixtineHeaderComponent from "./components/layout/SixtineHeaderComponent.vue";
import SixtineHomeComponent from "./components/layout/SixtineHomeComponent.vue";
import ForgotPassword from "./components/layout/ForgotPassword.vue";
import ResetPassword from "./components/layout/ResetPassword.vue";

export default {
    install(Vue, options) {
    },
    components: {
        "inrae-sixtine-vigne-SixtineHomeComponent": SixtineHomeComponent,
        "inrae-sixtine-vigne-SixtineLoginComponent": SixtineLoginComponent,
        "inrae-sixtine-vigne-SixtineFooterComponent": SixtineFooterComponent,
        "inrae-sixtine-vigne-SixtineMenuComponent": SixtineMenuComponent,
        "inrae-sixtine-vigne-SixtineHeaderComponent": SixtineHeaderComponent,
        "inrae-sixtine-vigne-ForgotPassword": ForgotPassword,
        "inrae-sixtine-vigne-ResetPassword": ResetPassword
    },
    lang: {
        "fr": require("./lang/sixtine-fr.json"),
        "en": require("./lang/sixtine-en.json"),
    }
};