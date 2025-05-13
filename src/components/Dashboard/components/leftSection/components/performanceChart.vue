<template>
    <v-card class=" pa-3 rounded-lg" min-height="400">
        <v-card-title class="d-flex justify-space-between">
            <span class="text-h6 font-weight-bold">Performance</span>
            <v-autocomplete v-model="selected" :items="performanceChart.options" dense outlined hide-details
                style="max-width: 150px;"></v-autocomplete>
        </v-card-title>

        <v-row no-gutters class="d-flex  justify-center">
            <v-col class="d-flex flex-column align-center justify-center" md='4' sm="6" xs="12">
                <FleetOccupancyChart :chartSeries="performanceChart.fleetOccupancyChart || [30]" />
                <span class="font-weight-bold">Fleet Occupancy</span>
            </v-col>
            <v-col class="d-flex flex-column  align-center justify-center" md='4' sm="6" xs="12">
                <DelayChart :chartSeries="performanceChart.delayChart || [10]" />
                <span class="font-weight-bold">Delays</span>
            </v-col>
            <v-col class="d-flex flex-column  align-center justify-center" md='4' sm="6" xs="12">
                <CancellationChart :chartSeries="performanceChart.cancellationChart || [85]" />
                <span class="font-weight-bold">Cancellations</span>

            </v-col>
        </v-row>
    </v-card>
</template>
<script>
// STATIC CONTENT
import FleetOccupancyChart from '../../../../StaticContent/Charts/RadialChart.vue';
import DelayChart from '../../../../StaticContent/Charts/RadialChart.vue';
import CancellationChart from '../../../../StaticContent/Charts/RadialChart.vue';
export default {
    components: {
        FleetOccupancyChart,
        DelayChart,
        CancellationChart,
    },
    data() {
        return {
            selected: 'Today',

        }
    },
    props: {
        performanceChart: {}
    }
}
</script>