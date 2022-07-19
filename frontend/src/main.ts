import Vue from 'vue'
import Vuetify, {
  VApp, VMain, VDivider, VSpacer, 
  VCard, VCardTitle, VCardText, VCardActions, 
  VTabs, VTab, VTabsItems, VTabItem,
  VBtn, VTextField, VRadioGroup, VRadio, VDialog,
  VDataTable, VAlert,
} from 'vuetify/lib'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// install vuetify package
// reference https://vuetifyjs.com/en/
Vue.use(Vuetify, {
  components: {
    VApp, VMain, VDivider, VSpacer, 
    VCard, VCardTitle, VCardText, VCardActions, 
    VTabs, VTab, VTabsItems, VTabItem,
    VBtn, VTextField, VRadioGroup, VRadio, VDialog,
    VDataTable, VAlert,
  }
});
const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
