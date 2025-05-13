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
                <v-autocomplete class="rounded-lg" label="Departure Airport*" :items="airports"
                    outlined></v-autocomplete>
            </v-col>
            <v-col cols="12" md="6">
                <v-autocomplete class="rounded-lg" label="Destination Airport*" :items="airports"
                    outlined></v-autocomplete>
            </v-col>
            <v-col cols="12" md="6">
                <v-autocomplete class="rounded-lg" label="Flight Route*" :items="routes" outlined></v-autocomplete>
            </v-col>
            <v-col cols="12" md="6">
                <v-autocomplete class="rounded-lg" label="Flight Duration*" :items="durations"
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
            airports: ['JFK', 'LAX', 'Heathrow', 'DXB'],
            routes: ['Route A', 'Route B'],
            durations: ['1 hr', '2 hr 30 min', '5 hr', '12 hr'],
        };
    },
}</script>