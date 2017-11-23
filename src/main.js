import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueResource from 'vue-resource';
import moment from 'moment'
import {Popover} from 'element-ui'

Vue.use(Popover);
Vue.use(VueResource);
Vue.use(ElementUI);

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('YYYY-MM-DD hh:mm')
    }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
