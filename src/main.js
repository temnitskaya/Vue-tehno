import Vue from 'vue'
import App from './App.vue'
import { UserName, UserSurname } from './components/data/Variables';
import showData from './components/data/ShowData';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

showData(UserName);
showData(UserSurname);

