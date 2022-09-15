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
  faPenToSquare,
  faFaceSadTear,
  faTrash,
  faTrashArrowUp,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import Wizkid from "./pages/Wizkid.vue";
import EditWizkid from "./pages/EditWizkid.vue";
import Login from "./pages/Login.vue";
import Archive from "./pages/Archive.vue";
import { useApiStore } from "./stores/api";

const app = createApp(App);

iconLibrary.add(faXmark);
iconLibrary.add(faChevronDown);
iconLibrary.add(faUserAstronaut);
iconLibrary.add(faPlus);
iconLibrary.add(faPenToSquare);
iconLibrary.add(faFaceSadTear);
iconLibrary.add(faTrash);
iconLibrary.add(faTrashArrowUp);
iconLibrary.add(faFaceSmile);
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
    { path: "/wizkid/create", component: EditWizkid },
    { path: "/wizkid/edit", component: EditWizkid },
    { path: "/wizkid/:id", component: Wizkid },
    { path: "/archive", component: Archive },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});

app.use(router);

app.mount("#app");
