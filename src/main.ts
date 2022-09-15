import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
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
import Login from "./pages/Login.vue";
import { useApiStore } from "./stores/api";

const app = createApp(App);

iconLibrary.add(faXmark);
iconLibrary.add(faChevronDown);
iconLibrary.add(faUserAstronaut);
iconLibrary.add(faPlus);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("FontAwesomeIcon", FontAwesomeIcon);

const pinia = createPinia();
app.use(pinia);
useApiStore().$subscribe((_, state) =>
  localStorage.setItem("store", JSON.stringify(state))
);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/wizkid/create", component: CreateWizkid },
    { path: "/wizkid/:id", component: Wizkid },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

app.use(router);

app.mount("#app");
