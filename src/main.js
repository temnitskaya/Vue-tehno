import Vue from 'vue'
import App from './App.vue'
import { UserName, UserSurname } from './components/data/VariablesTask2';
import showData from './components/data/FunctionTask2';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

showData(UserName);
showData(UserSurname);

