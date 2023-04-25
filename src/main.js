import { createApp } from 'vue';

import routers from './routes.js';

import App from './App.vue';

import '../src/assets/scss/main.scss'

const app = createApp(App);

app.use(routers);

app.mount('#app');
