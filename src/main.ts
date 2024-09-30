// @ts-expect-error
import Lara from '@/presets/tailwindcss-primevue-lara';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import './assets/main.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara
});

app.mount('#app');
