import { createRouter, createWebHistory } from "@ionic/vue-router";
//import { RouteRecordRaw } from 'vue-router';
import Welcome from "../views/Welcome.vue";
import Login from "../views/Auth/Login.vue";
import Signup from "../views/Auth/Signup.vue";

import Tabs from "../views/Tabs.vue";
import Explorer from "../views/Explorer/Index.vue";

const routes = [
  /* Home for testing and redirect to explorer */
  {
    path: "/home",
    name: "home",
    redirect: { name: "explorer" },
  },
  /* Home for testing and redirect to explorer */

  {
    path: "/",
    redirect: "/welcome",
  },

  {
    path: "/welcome",
    name: "welcome",
    component: Welcome,
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },

  {
    path: "/explorer/",
    component: Tabs,
    children: [
      {
        path: "",
        name: "explorer",
        component: Explorer,
      },
      {
        path: "destination",
        redirect: { name: "explorer" },
      },
    ],
  },

  {
    path: "/explorer/destination/:slug",
    name: "DestinationDetail",
    props: true,
    component: () => import("@/views/Explorer/Destination.vue"),
  },

  {
    path: "/explorer/destination/:slug/:experienceSlug",
    name: "ExperienceDetail",
    props: true,
    component: () => import("@/views/Explorer/Experience.vue"),
  },

  {
    path: "/user/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: { name: "profile" },
      },
      {
        name: "profile",
        path: "profile",
        component: () => import("@/views/Profile/Index.vue"),
        children: [
          {
            path: "settings",
            name: "settings",
            component: () => import("@/views/Profile/Settings.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
