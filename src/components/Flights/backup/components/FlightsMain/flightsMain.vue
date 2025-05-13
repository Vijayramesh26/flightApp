<script>
import AddFlightsMain from './components/AddFlights/AddFlightsMain.vue';
import FlightHome from './components/FlightMain/FlightHome.vue';

export default {
    components: {
        FlightHome,
        AddFlightsMain
    },
    data() {
        return {
            TurnOn: false
        }
    },
    methods: {
        moveToAddFlight() {
            this.TurnOn = !this.TurnOn
        }
    }
}
</script>

<template>
    <div>
        <v-slide-x-transition mode="out-in"> 
        <FlightHome @moveToAddFlight="moveToAddFlight" v-if="!TurnOn" />
        <AddFlightsMain v-if="TurnOn" @moveToAddFlight="moveToAddFlight" />
    </v-slide-x-transition>
    </div>
</template>