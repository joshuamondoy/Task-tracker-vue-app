//components>App.vue>main.js
//basically App.vue is the main entry point to all the components we will make
//main.js is the main entry point to App.vue to be manifest in the index.html
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
