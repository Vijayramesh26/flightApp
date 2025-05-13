<script>
import Eventservices from '../../services/Eventservices';
// LEFT SIDE
import CardSection from './components/cardSection.vue';
import FlightMap from './components/leftSection/components/flightMap.vue';
// RIGHT SIDE
import flightStatus from './components/rightSection/components/flightStatus.vue'
import Alerts from './components/rightSection/components/alerts.vue'
import PopularRoutes from './components/rightSection/components/popularRoutes.vue'
import PerformanceChart from './components/leftSection/components/performanceChart.vue';
import SalesChart from './components/leftSection/components/salesChart.vue';

export default {
    components: {
        CardSection,
        FlightMap,
        flightStatus,
        PerformanceChart,
        SalesChart,
        Alerts,
        PopularRoutes
    },
    data() {
        return {
            flightStatus: {},
            routes: {},
            alerts: [],
            flightMap: {
                infoCard: [
                    {
                        Key: "Enroute",
                        value: "1",
                        color: "blue",
                    },
                    {
                        Key: "Taxi",
                        value: "1",
                        color: "red",
                    },
                    {
                        Key: "Parked",
                        value: "1",
                        color: "grey",
                    },
                ],
                googleMapSrc:
                    "https://maps.google.com/maps?q=Europe&t=&z=3&ie=UTF8&iwloc=&output=embed",
            },
            performanceChart: {
                options: ["Today", "Yesterday"],
                FleetOccupancyChart: [30],
                DelayChart: [10],
                CancellationChart: [80],
            },
            salesChart: {
                options: ["Last Week", "This Week"],
                BarChartVal: [],
            },
        }
    },
    methods: {
        // FOR API CALL (MOCK)
        getDashboardValue() {
            Eventservices.GetDashboardValue()
                .then((response) => {
                    if (response.data.status == "S") {
                        this.flightStatus = response.data.flightStatus
                        this.routes = response.data.routes
                        this.alerts = response.data.alert.alerts || []
                        this.flightMap = response.data.flightMap
                        this.performanceChart = response.data.performanceChart
                        this.salesChart = response.data.salesChart

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
        this.getDashboardValue()
    }
}
</script>

<template>
    <div>

        <CardSection />
        <v-row no-gutters>
            <v-col lg="7" md="12" cols="12">
                <FlightMap class="ma-2" :flightMap="flightMap" />
            </v-col>
            <v-col lg="5">
                <flightStatus class="ma-2" :flightStatus="flightStatus" />
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col lg="7" md="12" cols="12">
                <PerformanceChart class="ma-2" :performanceChart="performanceChart" />
            </v-col>
            <v-col lg="5">
                <Alerts class="ma-2" :alerts="alerts" />
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col lg="7" md="12" cols="12">
                <SalesChart class="ma-2" :salesChart="salesChart" />
            </v-col>
            <v-col lg="5">
                <PopularRoutes class="ma-2" :routes="routes" />
            </v-col>
        </v-row>
    </div>
</template>