import Vue from 'vue';
import ApplicationRouter from './ApplicationRouter';
import ApplicationStore from './ApplicationStore';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import './styles/main.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify, {
    iconfont: 'mdi'
});

export default new Vue({
    data() {
        return {
            transitionName: 'slide-right'
        };
    },
    el: '#vue-app',
    template: `
  <div class="body-container"></div>
  `,
    store: ApplicationStore,
    router: ApplicationRouter
});
