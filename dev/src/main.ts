import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Callout from './Callout.vue'
import A2aStorTable from './A2aStorePropsTable.vue'

const app = createApp(App)
app.component('callout', Callout) 
app.component('a2aStorTable', A2aStorTable) 


app.mount('#app')
