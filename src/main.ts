import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import { library as iconLibrary } from "@fortawesome/fontawesome-svg-core";
import {
  faXmark,
  faChevronDown,
  faUserAstronaut,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

iconLibrary.add(faXmark);
iconLibrary.add(faChevronDown);
iconLibrary.add(faUserAstronaut);
iconLibrary.add(faPlus);

const pinia = createPinia();
pinia.use(piniaPersist);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(pinia);
app.mount("#app");
