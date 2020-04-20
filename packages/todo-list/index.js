import Vue from "vue";
import App from "./App.vue";
import vueLifecycle from "single-spa-vue";

Vue.config.productionTip = false;

const vueLifecycles = vueLifecycle({
  vue,
  appOptions: {
    render: (h) => h(App),
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
