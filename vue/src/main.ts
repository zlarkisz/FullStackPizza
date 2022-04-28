import { createApp } from 'vue';
import axiosPlugin from '@/plugins/axios';
import App from './App.vue';
import router from './router';
import notifier from './plugins/notifier';

const app = createApp(App);

// app.use(Toast);
app.use(notifier);
app.use(axiosPlugin);
app.use(router);
app.mount('#app');
