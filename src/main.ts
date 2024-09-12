import './assets/css/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import { FocusTrap } from 'focus-trap-vue';

import 'tippy.js/dist/tippy.css';

import 'vue3-toastify/dist/index.css';

createApp(App).component('FocusTrap', FocusTrap).mount('#root-app');
