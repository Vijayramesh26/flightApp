<template>
  <v-navigation-drawer bottom left app elevation="0">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6 ma-4">
          <v-icon large class="CalenderBtn--text" v-text="app.icon">

          </v-icon>
          <span class="CalenderBtn--text" v-text="app.name">

          </span>

        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list dense nav>
      <v-list-item v-for="content in navigationContent" :key="content.to" :to="content.to" router exact
        class="nav-link rounded-lg px-5" :class="{ 'nav-link--active': $route.path === content.to }">
        <v-list-item-icon>
          <v-icon>{{ content.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ content.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2" align="center">

        <v-btn x-large text outlined class="text-capitalize BgColor rounded-lg subtitle-2">
          <v-icon class="mx-2">mdi-headphones</v-icon>
          Contact Support
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>

</template>

<script>
import Eventservices from '../../../services/Eventservices';
export default {
  data() {
    return {
      app: {
        icon: "",
        name: "",
      },
      navigationContent: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
      ],
    };
  },
  methods: {
    // FOR API CALL (MOCK)
    getNavValue() {
      Eventservices.GetNavValue()
        .then((response) => {
          if (response.data.status == "S") {
            this.navigationContent = response.data.navigationContent
            this.app = response.data.app

          } else {
            this.MessageBar("E", response.data.errMsg);
          }
        })
        .catch((errMsg) => {
          this.MessageBar("E", errMsg);
        });
    }
  },
  mounted() {
    this.getNavValue()
  }
};
</script>

<style>
.nav-link--active {
  background-color: #2A1852 !important;
  /* light blue */
  color: #FFF !important;
  /* Vuetify primary */
  font-weight: bold;

}
</style>