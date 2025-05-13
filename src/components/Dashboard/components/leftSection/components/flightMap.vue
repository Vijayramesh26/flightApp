<template>
    <v-card class="pa-6 rounded-lg" elevation="2" min-height="400px">
        <v-row class="d-flex pa-0" no-gutters>
            <!-- Title -->
            <v-col cols="12" lg="4" class="d-flex justify-start align-center ">
                <h3 class="font-weight-bold mb-4">Flights Information</h3>
            </v-col>

            <v-col cols="12" lg="8" class="d-flex align-center pa-2 justify-center justify-md-end">
                <span class="d-flex align-center mx-md-6 mx-2" v-for="(info, index) in flightMap.infoCard" :key="index">

                    <v-btn fab x-small elevation="0" :color="info.color" style="height: 10px; width: 10px;"
                        class="mr-2"></v-btn> {{ info.Key + " : " + info.value }}
                </span>
            </v-col>

            <!--   Google Map -->

        </v-row>
        <v-row no-gutters>
            <v-col cols="12">
                <iframe width="100%" height="300px" frameborder="0" :src="flightMap.googleMapSrc"
                    allowfullscreen></iframe>
            </v-col>
        </v-row>

    </v-card>
</template>

<script>
export default {
    name: "FlightInfoStrip",
    data() {
        return {
            //
        };
    },
    props: {
        flightMap: {}
    }
};
</script>

<style scoped>
iframe {
    border-radius: 8px;
}
</style>