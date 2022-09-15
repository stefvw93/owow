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
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import Wizkid from "./pages/Wizkid.vue";
import CreateWizkid from "./pages/CreateWizkid.vue";

const app = createApp(App);

iconLibrary.add(faXmark);
iconLibrary.add(faChevronDown);
iconLibrary.add(faUserAstronaut);
iconLibrary.add(faPlus);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("FontAwesomeIcon", FontAwesomeIcon);

const pinia = createPinia();
pinia.use(piniaPersist);
app.use(pinia);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/wizkid/create", component: CreateWizkid },
    { path: "/wizkid/:id", component: Wizkid },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

app.use(router);

app.mount("#app");
