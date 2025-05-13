<script>
import Eventservices from '../../../../services/Eventservices';
import BarChart from '../../../StaticContent/Charts/BarChart.vue';
import FleetOccupancyChart from '../../../StaticContent/Charts/RadialChart.vue';
import DelayChart from '../../../StaticContent/Charts/RadialChart.vue';
import CancellationChart from '../../../StaticContent/Charts/RadialChart.vue';
import FlightMap from './components/flightMap.vue';
export default {
    components: {
        FlightMap,
        FleetOccupancyChart,
        DelayChart,
        CancellationChart,
        BarChart,
    },
    data() {
        return {
            flightMap: {},
            performanceChart: {},
            salesChart: {}
        }
    },
    methods: {
        // FOR API CALL (MOCK)
        getDashboardRValue() {
            Eventservices.GetDashboardRValue()
                .then((response) => {
                    if (response.data.status == "S") {
                        this.salesChart = response.data.salesChart
                        this.performanceChart = response.data.performanceChart
                        this.flightMap = response.data.alert.flightMap || []

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
        this.getDashboardRValue()
    }
}
</script>

<template>
    <div>
        <v-row no-gutters>
            <v-col>
                <FlightMap />
            </v-col>
        </v-row>
        <v-card class="my-4 rounded-lg">

            <v-row no-gutters class="d-flex  justify-center">
                <v-col class="d-flex align-center justify-center">
                    <FleetOccupancyChart />
                </v-col>
                <v-col class="d-flex align-center justify-center">
                    <DelayChart />
                </v-col>
                <v-col class="d-flex align-center justify-center">
                    <CancellationChart />
                </v-col>
            </v-row>
        </v-card>
        <v-card class="my-4 rounded-lg">
            <v-row no-gutters>
                <v-col>
                    <BarChart />
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>