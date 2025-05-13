<script>
import Alerts from './components/alerts.vue';
import FlightStatus from './components/flightStatus.vue';
import PopularRoutes from './components/popularRoutes.vue'; 
export default {

    components: {
        FlightStatus,
        PopularRoutes,
        Alerts
    },


}

</script>

<template>
    <div>
        <FlightStatus :flightStatus="flightStatus" />
        <PopularRoutes :routes="routes" />
        <Alerts :alerts="alerts" />
    </div>
</template>