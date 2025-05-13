<template>

    <v-list two-line> 
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field class="rounded-lg" label="Flight Number*" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-autocomplete class="rounded-lg" label="Flight Type*" :items="['Domestic', 'International']"
                    outlined></v-autocomplete>
            </v-col>
            <v-col cols="12" md="6">
                <v-autocomplete class="rounded-lg" label="Departure Airport*" :items="addFlights.airports"
                    outlined></v-autocomplete>
            </v-col>
            <v-col cols="12" md="6">
                <v-autocomplete class="rounded-lg" label="Destination Airport*" :items="addFlights.airports"
                    outlined></v-autocomplete>
            </v-col>
            <v-col cols="12" md="6">
                <v-autocomplete class="rounded-lg" label="Flight Route*" :items="addFlights.routes"
                    outlined></v-autocomplete>
            </v-col>
            <v-col cols="12" md="6">
                <v-autocomplete class="rounded-lg" label="Flight Duration*" :items="addFlights.durations"
                    outlined></v-autocomplete>
            </v-col>
        </v-row>
    </v-list>
</template>
<script>
export default {
    data() {
        return {
            step: 1,
        };
    },
    props: {
        addFlights: {}
    }
}</script>