<template>
  <v-card class="pa-4 elevation-2 rounded-lg" min-height="400px">
    <div class="d-flex justify-space-between align-center mb-4">
      <h3 class="title font-weight-bold mb-0">Current Flight Status</h3>
      <v-select v-model="selectedRegion" :items="flightStatus.regions" outlined dense hide-details
        style="max-width: 120px"></v-select>
    </div>

    <v-divider class="mb-3" />

    <v-simple-table>
      <thead>
        <tr>
          <th>Aircraft</th>
          <th>Dep</th>
          <th>Status</th>
          <th>Arr</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(flight, index) in flightStatus.flights" :key="index" :class="{ 'alert-row': flight.alert }">
          <td>
            {{ flight.aircraft }}
            <v-icon v-if="flight.alert" color="red" small class="ml-1">mdi-alert-circle-outline</v-icon>
          </td>
          <td>
            <div>{{ flight.dep }}</div>
            <div class="grey--text text-caption">{{ flight.etd }}</div>
            <div class="grey--text text-caption">ATD {{ flight.atd }}</div>
          </td>
          <td>
            <div>{{ flight.status }}</div>
            <div class="grey--text text-caption">ETE {{ flight.ete }}</div>
          </td>
          <td>
            <div>{{ flight.arr }}</div>
            <div class="grey--text text-caption">ETA {{ flight.eta }}</div>
            <div class="grey--text text-caption">ATA</div>
          </td>
        </tr>
      </tbody>
    </v-simple-table> 
  </v-card>
</template>

<script>
export default {
  name: 'FlightStatusCard',
  props:{
    flightStatus:{}
  },
  data() {
    return {
      selectedRegion: 'Region',
      regions: ['Region', 'US', 'EU', 'Asia'],
      flights: [
        {
          aircraft: 'A350',
          dep: 'KLAX',
          etd: 'ETD 1130z',
          atd: '1135Z',
          status: 'Enroute',
          ete: '-03:08',
          arr: 'KVNY',
          eta: '1130z',
          alert: true,
        },
        {
          aircraft: 'A380',
          dep: 'KFLL',
          etd: 'ETD 1130z',
          atd: '-',
          status: 'Taxi',
          ete: '-03:08',
          arr: 'KPWK',
          eta: '1130z',
          alert: false,
        },
        {
          aircraft: 'B737',
          dep: 'HPN',
          etd: 'ETD 1130z',
          atd: '1135Z',
          status: 'Parked',
          ete: '-03:08',
          arr: 'KBKL',
          eta: '1130z',
          alert: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
 
.alert-row {
  background-color: #ffe6e6;
}
</style>
