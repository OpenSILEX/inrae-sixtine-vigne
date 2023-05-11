/// <reference path="../../../opensilex-security/front/types/opensilex-security.d.ts" />
/// <reference path="../../../opensilex-core/front/types/opensilex-core.d.ts" />
import SixtineLoginComponent from "./components/layout/SixtineLoginComponent.vue";
import SixtineHomeComponent from "./components/layout/SixtineHomeComponent.vue";
import SixtineHeaderComponent from "./components/layout/SixtineHeaderComponent.vue"; 
export default {
    install(Vue, options) {
    },
    components: { 
        "inrae-sixtine-vigne-SixtineLoginComponent": SixtineLoginComponent,
        "inrae-sixtine-vigne-SixtineHomeComponent": SixtineHomeComponent, 
        "inrae-sixtine-vigne-SixtineHeaderComponent": SixtineHeaderComponent, 
    },
    lang: {
        "fr": require("./lang/sixtine-fr.json"),
        "en": require("./lang/sixtine-en.json"),
    }
};