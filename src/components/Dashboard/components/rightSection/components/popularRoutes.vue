<template>
  <v-card class="rounded-lg" elevation="2" min-height="400">
    <v-card-title class="d-flex justify-space-between">
      <span class="text-h6 font-weight-bold">Popular Routes</span>
      <v-select v-model="selected" :items="routes.options" dense outlined hide-details style="max-width: 150px;"></v-select>
    </v-card-title>
    <v-list dense>
      <div v-for="(route, index) in routes.routes" :key="index">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ route.route }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <span class="font-weight-bold">{{ route.count }}</span>
          </v-list-item-action>
        </v-list-item>

        <v-divider />
      </div>
    </v-list>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      selected: 'Last Week',
      options: ['Last Week', 'This Week'],
      route: [
        { route: 'Kuala Lumpur(KUL) to Singapore(SIN)', count: 120 },
        { route: 'Hong Kong(HKG) to Taipei(TPE)', count: 110 },
        { route: 'Toronto(YYZ) to Newyork(LGA)', count: 80 },
        { route: 'Jakarta(CJK) to Kuala Lumpur(KUL)', count: 60 },
      ],
    };
  },
  props:{
    routes:{}
  }
};
</script>
