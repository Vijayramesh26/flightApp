import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.prototype.$globalData = Vue.observable({ 

  msg: "", 
  alert: "",
  backgroundColor: "",
  IconColor: "",
  snackbar: false,
  timeout:1000
 
});

Vue.mixin({
  methods: {
    MessageBar: function (indicator, Msg) {
      this.$globalData.msg = Msg;
      this.$globalData.alert = true;
      this.$globalData.snackbar = true;
      if (indicator == "S") {
        this.$globalData.backgroundColor = "green lighten-5";
        this.$globalData.IconColor = "green darken-2";
        this.$globalData.Icon = "mdi-check-circle-outline";
        this.$globalData.alerttitle = "Success";
        this.$globalData.timeout = 2000;
      } else if (indicator == "E") {
        this.$globalData.backgroundColor = "orange lighten-5";
        this.$globalData.IconColor = "orange darken-2";
        this.$globalData.Icon = "mdi-alert";
        this.$globalData.alerttitle = "Error";
        this.$globalData.timeout = 3000;
      }
    },
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
