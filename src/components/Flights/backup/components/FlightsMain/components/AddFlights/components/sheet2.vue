<template>
    <div class="">
        <v-card class=" elevation-0 rounded-lg mt-2">
            <v-row>
                <v-col cols="12" md="4">
                    <v-menu v-model="depDateMenu" :close-on-content-click="false" transition="scale-transition" offset-y
                        min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="departureDate" label="Departure Date*" readonly outlined
                                v-bind="attrs" v-on="on" class="rounded-lg"></v-text-field>
                        </template>
                        <v-date-picker v-model="departureDate" scrollable @input="depDateMenu = false"></v-date-picker>
                    </v-menu>
                </v-col>

                <v-col cols="12" md="4">
                    <v-menu v-model="depTimeMenu" :close-on-content-click="false" transition="scale-transition" offset-y
                        min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="departureTime" label="Departure Time*" readonly outlined
                                v-bind="attrs" v-on="on" class="rounded-lg"></v-text-field>
                        </template>
                        <v-time-picker v-model="departureTime" @input="depTimeMenu = false"
                            format="ampm"></v-time-picker>
                    </v-menu>
                </v-col>

                <v-col cols="12" md="4">
                    <v-autocomplete :items="timezones" v-model="departureTimezone" label="Timezone*" outlined
                        class="rounded-lg"></v-autocomplete>
                </v-col>

                <v-col cols="12" md="4">
                    <v-menu v-model="arrDateMenu" :close-on-content-click="false" transition="scale-transition" offset-y
                        min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="arrivalDate" label="Arrival Date*" readonly outlined v-bind="attrs"
                                v-on="on" class="rounded-lg"></v-text-field>
                        </template>
                        <v-date-picker v-model="arrivalDate" @input="arrDateMenu = false"></v-date-picker>
                    </v-menu>
                </v-col>

                <v-col cols="12" md="4">
                    <v-menu v-model="arrTimeMenu" :close-on-content-click="false" transition="scale-transition" offset-y
                        min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="arrivalTime" label="Arrival Time*" readonly outlined v-bind="attrs"
                                v-on="on" class="rounded-lg"></v-text-field>
                        </template>
                        <v-time-picker v-model="arrivalTime" @input="arrTimeMenu = false" format="ampm"></v-time-picker>
                    </v-menu>
                </v-col>

                <v-col cols="12" md="4">
                    <v-autocomplete :items="timezones" v-model="arrivalTimezone" label="Timezone*" outlined
                        class="rounded-lg"></v-autocomplete>
                </v-col>
            </v-row>
        </v-card>

        <v-card class=" rounded-lg elevation-0 mt-5">
            <v-row>
                <v-col cols="12">
                    <h3 class="text-h6 font-weight-bold">Recurrence</h3>
                </v-col>

                <v-col cols="6" md="2">
                    <v-text-field v-model.number="repeatEvery" label="Repeat Every" outlined type="number" min="1"
                        class="rounded-lg"></v-text-field>
                </v-col>
                <v-col cols="6" md="2" >
                    <v-autocomplete :items="['Day', 'Week', 'Month']" v-model="repeatUnit" outlined
                        class="rounded-lg"></v-autocomplete>
                </v-col>

                <v-col cols="12" class="mt-n5">
                    <div class="mb-1 font-weight-medium">Repeat On</div>
                    <v-btn-toggle v-model="repeatOnDays" multiple tile  class="mb-2 rounded-lg">
                        <v-btn v-for="day in days" :key="day" :value="day"  class="rounded-lg pa-4 mx-2" :class="{
                            'purple white--text': repeatOnDays.includes(day),
                            'white': !repeatOnDays.includes(day),
                        }">
                            {{ day }}
                        </v-btn>
                    </v-btn-toggle>
                </v-col>

                <v-col cols="12" md="4">
                    <v-autocomplete :items="['Never', 'After 5 Occurrences', 'On Date']" v-model="endsOn"
                        label="Ends On" outlined class="rounded-lg"></v-autocomplete>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Date/Time fields
            departureDate: '2024-11-02',
            departureTime: '02:02',
            arrivalDate: '2024-11-02',
            arrivalTime: '02:02',
            departureTimezone: null,
            arrivalTimezone: null,

            // Picker menus
            depDateMenu: false,
            depTimeMenu: false,
            arrDateMenu: false,
            arrTimeMenu: false,

            // Timezones list
            timezones: ['UTC', 'GMT', 'EST', 'CST', 'PST', 'IST', 'CET'],

            // Recurrence settings
            repeatEvery: 1,
            repeatUnit: 'Week',
            repeatOnDays: ['Sun'],
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            endsOn: 'Never',
        }
    }
}
</script>

<style scoped>
.purple {
    background-color: #6c4acb !important;
}
</style>