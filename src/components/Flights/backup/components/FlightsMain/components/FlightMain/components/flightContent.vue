<template>
    <div>
        <v-row>
            <v-col cols="12" v-for="(flight, index) in flights" :key="index">
                <v-card class="rounded-xl " elevation="0">
                    <v-card-title class="d-flex justify-space-between align-center pb-0">
                        <span class="text-h6 ">{{ flight.aircraft }} <v-chip
                                :color="flight.status === 'Cancelled' ? 'red lighten-4' : 'green lighten-4'"
                                :text-color="flight.status === 'Cancelled' ? 'red' : 'green'" label class="ma-2"
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
                    <v-card-text class="d-flex ">
                        <v-row no-gutters>
                            <v-col lg="12">
                                <v-row class="mx-4 my-1" no-gutters>
                                    <v-col lg="10">
                                        <v-card class=" ma-2 pa-6 rounded-xl elevation-0 "
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
                                    <v-col>
                                        <v-card class="BgColor ma-2 pa-6 rounded-xl elevation-0">
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
                            <v-col>
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
            actions: ['Edit Flight', 'Assign Staff', 'Manage Bookings', 'Cancel Flight'],
            flightsByDate: {
                '2025-05-04': [
                    {
                        aircraft: 'Airbus A350',
                        status: 'Ready For Departure',
                        depart: { date: 'Tue, 4 Jun 2024', time: '12:15', code: 'YYZ' },
                        arrive: { date: 'Thu, 6 Jun 2024', time: '11:25', code: 'DEL' },
                        duration: '13H 40Min',
                        occupancy: '70% (40/280 Economy | 2/14 Business left)',
                        crew: [
                            'https://randomuser.me/api/portraits/thumb/men/11.jpg',
                            'https://randomuser.me/api/portraits/thumb/men/12.jpg',
                            'https://randomuser.me/api/portraits/thumb/women/13.jpg'
                        ]
                    },
                    {
                        aircraft: 'Airbus A350',
                        status: 'Cancelled',
                        depart: { date: 'Tue, 4 Jun 2024', time: '12:15', code: 'YYZ' },
                        arrive: { date: 'Thu, 6 Jun 2024', time: '11:25', code: 'DEL' },
                        duration: '13H 40Min',
                        occupancy: '--',
                        crew: [
                            'https://randomuser.me/api/portraits/thumb/men/11.jpg',
                            'https://randomuser.me/api/portraits/thumb/men/12.jpg',
                            'https://randomuser.me/api/portraits/thumb/women/13.jpg'
                        ]
                    }
                ],
                '2025-05-05': [
                    {
                        aircraft: 'Airbus A350',
                        status: 'Ready For Departure',
                        depart: { date: 'Tue, 4 Jun 2024', time: '12:15', code: 'YYZ' },
                        arrive: { date: 'Thu, 6 Jun 2024', time: '11:25', code: 'DEL' },
                        duration: '13H 40Min',
                        occupancy: '70% (40/280 Economy | 2/14 Business left)',
                        crew: [
                            'https://randomuser.me/api/portraits/thumb/men/11.jpg',
                            'https://randomuser.me/api/portraits/thumb/men/12.jpg',
                            'https://randomuser.me/api/portraits/thumb/women/13.jpg'
                        ]
                    },
                    {
                        aircraft: 'Airbus A350',
                        status: 'Cancelled',
                        depart: { date: 'Tue, 4 Jun 2024', time: '12:15', code: 'YYZ' },
                        arrive: { date: 'Thu, 6 Jun 2024', time: '11:25', code: 'DEL' },
                        duration: '13H 40Min',
                        occupancy: '--',
                        crew: [
                            'https://randomuser.me/api/portraits/thumb/men/11.jpg',
                            'https://randomuser.me/api/portraits/thumb/men/12.jpg',
                            'https://randomuser.me/api/portraits/thumb/women/13.jpg'
                        ]
                    }
                ],
                '2025-05-06': [
                    {
                        aircraft: 'Airbus A350',
                        status: 'Ready For Departure',
                        depart: { date: 'Tue, 4 Jun 2024', time: '12:15', code: 'YYZ' },
                        arrive: { date: 'Thu, 6 Jun 2024', time: '11:25', code: 'DEL' },
                        duration: '13H 40Min',
                        occupancy: '70% (40/280 Economy | 2/14 Business left)',
                        crew: [
                            'https://randomuser.me/api/portraits/thumb/men/11.jpg',
                            'https://randomuser.me/api/portraits/thumb/men/12.jpg',
                            'https://randomuser.me/api/portraits/thumb/women/13.jpg'
                        ]
                    },
                    {
                        aircraft: 'Airbus A350',
                        status: 'Cancelled',
                        depart: { date: 'Tue, 4 Jun 2024', time: '12:15', code: 'YYZ' },
                        arrive: { date: 'Thu, 6 Jun 2024', time: '11:25', code: 'DEL' },
                        duration: '13H 40Min',
                        occupancy: '--',
                        crew: [
                            'https://randomuser.me/api/portraits/thumb/men/11.jpg',
                            'https://randomuser.me/api/portraits/thumb/men/12.jpg',
                            'https://randomuser.me/api/portraits/thumb/women/13.jpg'
                        ]
                    }
                ],
                '2025-05-07': [

                    {
                        aircraft: 'Airbus A350',
                        status: 'Cancelled',
                        depart: { date: 'Tue, 4 Jun 2024', time: '12:15', code: 'YYZ' },
                        arrive: { date: 'Thu, 6 Jun 2024', time: '11:25', code: 'DEL' },
                        duration: '13H 40Min',
                        occupancy: '--',
                        crew: [
                            'https://randomuser.me/api/portraits/thumb/men/11.jpg',
                            'https://randomuser.me/api/portraits/thumb/men/12.jpg',
                            'https://randomuser.me/api/portraits/thumb/women/13.jpg'
                        ]
                    }
                ],
                '2025-05-08': [
                    {
                        aircraft: 'Airbus A350',
                        status: 'Ready For Departure',
                        depart: { date: 'Tue, 4 Jun 2024', time: '12:15', code: 'YYZ' },
                        arrive: { date: 'Thu, 6 Jun 2024', time: '11:25', code: 'DEL' },
                        duration: '13H 40Min',
                        occupancy: '70% (40/280 Economy | 2/14 Business left)',
                        crew: [
                            'https://randomuser.me/api/portraits/thumb/men/11.jpg',
                            'https://randomuser.me/api/portraits/thumb/men/12.jpg',
                            'https://randomuser.me/api/portraits/thumb/women/13.jpg'
                        ]
                    },

                ],
            }
        }
    },
    props: {
        currentDate: String
    },
    computed: {
        flights() {
            return this.flightsByDate[this.currentDate]
        }
    }
}
</script>