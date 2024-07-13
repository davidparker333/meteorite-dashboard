import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import translation from './locales/en-US.json';
import fontAwesome from './lib/font-awesome';
import HighchartsVue from 'highcharts-vue';

library.add(...fontAwesome.all);

const app = createApp(App);
const i18n = createI18n({
  locale: 'en',
  messages: {
    en: translation
  }
});

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(HighchartsVue);

app.mount('#app');
