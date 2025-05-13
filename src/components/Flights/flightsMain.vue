<template>
    <div>
        <v-slide-x-transition mode="out-in">
            <FlightHome @moveToAddFlight="moveToAddFlight" v-if="!TurnOn" :flightHome="flightHome" />
            <AddFlightsMain v-if="TurnOn" @moveToAddFlight="moveToAddFlight" :addFlights="addFlights" />
        </v-slide-x-transition>
    </div>
</template>
<script>
import Eventservices from '../../services/Eventservices';
import AddFlightsMain from './components/AddFlights/AddFlightsMain.vue';
import FlightHome from './components/FlightMain/FlightHome.vue';

export default {
    components: {
        FlightHome,
        AddFlightsMain
    },
    data() {
        return {
            TurnOn: false,
            flightHome: {},
            addFlights: {}
        }
    },
    methods: {
        moveToAddFlight() {
            this.TurnOn = !this.TurnOn
        },
        // FOR API CALL (MOCK)
        getFlightContent() {
            Eventservices.GetFlightContent()
                .then((response) => {
                    if (response.data.status == "S") {
                        this.flightHome = response.data.flightHome
                        this.addFlights = response.data.addFlights

                    } else {
                        this.MessageBar("E", response.data.errMsg);
                    }
                })
                .catch((errMsg) => {
                    this.MessageBar("E", errMsg);
                });
        },
    },
    mounted() {
        this.getFlightContent()
    },
}
</script>
