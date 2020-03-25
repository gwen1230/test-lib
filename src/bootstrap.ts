import App from './App.vue';
import Vue from 'vue';
export async function bootstrap(options: any) {
  new Vue({
    render: h => h(options.rootComponent || App)
  }).$mount('#app');
}
