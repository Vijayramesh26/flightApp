<template>
    <div class="BookingSection">
        <v-row>
            <v-col class="text-h6 font-weight-bold">
                {{ tableData.length + " Bookings" }}
            </v-col>
        </v-row>
        <v-row class="mb-2">
            <v-col cols="6" md="8" lg="4">
                <v-text-field v-model="search" prepend-inner-icon="mdi-magnify"
                    label="Booking Ref/PNR/Passenger Name/Contact" outlined dense class="rounded-lg white mb-0" />
            </v-col>
            <v-col cols="6" md="2" lg="2">
                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="40"
                    transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="date" label="Date of booking" dense append-inner-icon="mdi-calendar"
                            readonly v-bind="attrs" v-on="on" outlined />
                    </template>
                    <v-date-picker v-model="date" @input="menu = false" />
                </v-menu>
            </v-col>
            <v-col cols="6" md="2">
                <v-btn color="deep-purple accent-4" dark>Filter</v-btn>
            </v-col>
            <v-col cols="6" lg="2"></v-col>
            <v-col cols="6" lg="2" align="end">
                <v-autocomplete class="rounded-lg white" v-model="actionsVal" :items="actions" outlined
                    dense></v-autocomplete>
            </v-col>
        </v-row>

        <!-- Data Table -->
        <v-data-table :headers="headers" :items="tableData" :items-per-page="10"  must-sort
           show-select class="elevation-0 rounded-lg" height="320px" fixed-header>
            <template v-slot:item.status="{ item }">
                <v-chip :color="statusColor(item.status)" label outlined small>{{ item.status }}</v-chip>
            </template>

            <template v-slot:item.addOns="{ item }">
                <span v-if="item.addOns">{{ item.addOns }}</span>
                <span v-else>-</span>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    props: {
        tableData: []
    },
    data() {
        return {
            actionsVal: 'Bulk Action',
            actions: ['Bulk Action'],
            search: '',
            date: null,
            menu: false,
            headers: [
                { text: 'Passenger', value: 'passenger' },
                { text: 'Booking Date', value: 'bookingDate' },
                { text: 'Class', value: 'class' },
                { text: 'Booking Ref', value: 'bookingRef' },
                { text: 'Seat', value: 'seat' },
                { text: 'Add Ons', value: 'addOns' },
                { text: 'Status', value: 'status' },
            ],
            items: [
                {
                    passenger: 'Janet Adebayo (32 F)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: '23 A',
                    addOns: '23Kg baggage extra. Meal(Jan + 1 + 2 more)',
                    status: 'Pending',
                },
                {
                    passenger: 'Samuel Johnson (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: '23 B',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },

                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                }, {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
                {
                    passenger: 'Francis Doe (30 M)',
                    bookingDate: '12 Aug 2022 - 12:25 am',
                    class: 'Economy',
                    bookingRef: '9348fj73',
                    seat: 'Not selected',
                    addOns: '',
                    status: 'Confirmed',
                },
            ],
        };
    },
    methods: {
        statusColor(status) {
            switch (status) {
                case 'Confirmed':
                    return 'green ';
                case 'Pending':
                    return 'yellow ';
                default:
                    return 'grey ';
            }
        },
    },
};
</script>

<style>
.BookingSection .v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none;
}

.BookingSection .theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),
.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row) {
    border-bottom: none;
}
</style>