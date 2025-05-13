<template>

  <v-app-bar app single-line hide-details color="white" elevation="0" class="AppbarSection" height="80px">
    <v-toolbar-title class="font-weight-bold" v-text="$route.name"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field class="rounded-xl BgColor caption" outlined dense prepend-inner-icon="mdi-magnify"
      placeholder="Search..." v-if="expandfield || $vuetify.breakpoint.smAndUp"></v-text-field>
    <v-spacer></v-spacer>
    <v-btn icon class="BgColor mr-2" v-if="$vuetify.breakpoint.smAndDown" @click="expand">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon class="BgColor" v-if="$vuetify.breakpoint.smAndUp">
      <v-badge dot color="primary">
        <v-icon color="black--text white">mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>





    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2 transparent" v-bind="attrs" v-on="on" elevation="0">
          <v-avatar class="mx-1">
            <img alt="Avatar" :src="profile.imageUrl">
          </v-avatar>
          <div class="ml-3 d-flex flex-column align-start" v-if="$vuetify.breakpoint.smAndUp">

            <span v-text="profile.name"></span>

            <span class="caption grey--text" v-text="profile.role"></span>
          </div>
          <v-icon small class="mx-2">mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(menuValue, index) in profile.menu" :key="index">
          <v-list-item-title v-text="menuValue.menuName"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
import Eventservices from '../../../services/Eventservices';
export default {
  data() {
    return {
      expandfield: false,
      profile: {

      },
    }
  },
  methods: {
    expand() {
      this.expandfield = !this.expandfield
    },
    // FOR API CALL (MOCK)
    getAppBarValue() {
      Eventservices.GetAppBarValue()
        .then((response) => {
          if (response.data.status == "S") {
            this.profile = response.data.profile

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
    this.getAppBarValue()
  }
}</script>
<style>
.AppbarSection .v-text-field.v-text-field--enclosed .v-text-field__details {
  display: none;
}
</style>