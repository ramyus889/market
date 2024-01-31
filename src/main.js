import "/css/bootstrap.min.css";
import "/css/gradient.css";
import "/css/animationH.css";
import "/css/customanim.css";
import "/css/animation.css";
import "/css/filter.css";
import "/css/border.css";
import "/css/fontStyle.css";
import "/css/hover.css";
import "/css/margin-padding.css";
import "/css/color.css";
import "/css/colorH.css";
import "/css/transform.css";
import "/css/svg.css";
import "./assets/main.css";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";

import Home from "./pages/Home.vue";
import Favorites from "./pages/Favorites.vue";

const app = createApp(App);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/favorites", name: "Favorites", component: Favorites },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

app.use(autoAnimatePlugin);

app.mount("#app");
