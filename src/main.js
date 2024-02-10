import { createApp } from 'vue';
import App from './App.vue';
import  "./assets/style.css";
import  router  from  "./router";

const app = createApp(App);

app.mount('#app');
app.use(router);
