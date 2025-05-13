<template>
    <div>
        <v-row no-gutters>
            <v-col cols="12" class="py-3" v-for="(flight, index) in flightdata" :key="index">
                <v-card class="rounded-xl " elevation="0">
                    <v-card-title class="d-flex justify-space-between align-center pb-0">
                        <span class="text-body-2  font-weight-bold">{{ flight.aircraft }} <v-chip
                                :color="flight.status === 'Cancelled' ? 'red lighten-4' : 'green lighten-4'"
                                :text-color="flight.status === 'Cancelled' ? 'red' : 'green'" label class="ma-2 caption"
                                outlined small v-text="flight.status"></v-chip></span>
                        <v-menu bottom left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn icon v-bind="attrs" v-on="on" class="">
                                    <v-icon color="black">mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-for="(action, index) in actions" :key="index">
                                    <v-list-item-title>{{ action }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-card-title>
                    <v-card-text>
                        <v-row no-gutters>
                            <v-col lg="12" md="12" sm="12">
                                <v-row class="mx-4 " no-gutters>
                                    <v-col lg="10" md="8">
                                        <v-card class=" ma-1 px-6 py-3 rounded-xl elevation-0 "
                                            :color="flight.status === 'Cancelled' ? 'red lighten-5' : 'BgColor'">
                                            <v-row class="d-flex justify-space-between pb-2" no-gutters>
                                                <v-col v-text="flight.depart.date"></v-col>
                                                <v-col align="end" v-text="flight.arrive.date"></v-col>
                                            </v-row>
                                            <v-row no-gutters>
                                                <v-col class="d-flex flex-column align-center align-md-start">
                                                    <span class="text-h6" v-text="flight.depart.time"></span>
                                                    <span v-text="flight.depart.code"></span>
                                                </v-col>
                                                <v-col class="d-flex align-center">
                                                    <v-icon>mdi-airplane-takeoff</v-icon>
                                                    <v-divider class="ma-4"></v-divider>
                                                    <v-btn class="white grey--text text-capitalize" outlined small
                                                        v-text="flight.duration"></v-btn>
                                                    <v-divider class="ma-4"></v-divider>
                                                    <v-icon>mdi-airplane-landing</v-icon>
                                                </v-col>
                                                <v-col class="d-flex flex-column  align-center align-md-end">
                                                    <span class="text-h6" v-text="flight.depart.time"></span><span
                                                        v-text="flight.depart.code"></span>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-col>
                                    <v-col lg="2" md="4">
                                        <v-card class="BgColor ma-1 px-6 py-3 rounded-xl elevation-0">
                                            <v-row class="d-flex flex-column">
                                                <v-col>
                                                    Pilot & Crew
                                                </v-col>
                                                <v-col align="center">
                                                    <v-avatar v-for="(member, j) in flight.crew" :key="j" size="32">
                                                        <img :src="member" alt="crew" />
                                                    </v-avatar>
                                                </v-col>

                                            </v-row>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col lg="12">
                                <v-row no-gutters class="ml-8 ">
                                    <v-col class="caption">

                                        Occupancy : {{ flight.occupancy }}
                                    </v-col>
                                </v-row>

                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>

</template>
<script>
export default {
    data() {
        return {
           //
        }
    },
    props: {
        flightdata: [],
        actions: []
    },

}
</script>