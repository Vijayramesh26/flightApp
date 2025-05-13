<template>
  <v-app>
    <AppMain class="BgColor " style="min-height: 100vh;" />
  </v-app>
</template>

<script>
import AppMain from "./views/main.vue"
export default {
  name: "App",
  components: {
    AppMain
  },
  data: () => ({
    //
  }),
};
</script>
 