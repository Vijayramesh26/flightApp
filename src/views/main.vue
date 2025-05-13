<template>
  <div class="home">
    <AppBar />
    <NavBar />
    <v-main>
      <v-container fluid>
        <v-slide-x-transition mode="out-in">
          <router-view />
        </v-slide-x-transition>
      </v-container>
      <v-snackbar class="mt-15" :color="$globalData.backgroundColor" rounded="0" elevation="1" width="200px"
        v-model="$globalData.snackbar" top right :timeout="$globalData.timeout">
        <v-layout>
          <v-flex lg1 sm1 xs1 md1 xl1>
            <v-icon medium :color="$globalData.IconColor">{{
              $globalData.Icon
              }}</v-icon></v-flex>

          <v-flex lg11 sm11 xs11 md11 xl11>
            <span class="black--text body-2 pl-2">{{
              $globalData.alerttitle
              }}</span>
            <div class="caption pl-2" style="color: #424242">
              {{ $globalData.msg }}
            </div>
          </v-flex>
        </v-layout>
      </v-snackbar>
    </v-main>
  </div>
</template>

<script>
import AppBar from "../components/StaticContent/Layout/AppBar.vue";
import NavBar from "../components/StaticContent/Layout/NavBar.vue";
export default {
  name: "Home",
  components: {
    AppBar,
    NavBar,
  },
};
</script>
