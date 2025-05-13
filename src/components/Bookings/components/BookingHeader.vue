<template>
    <div>
        <v-row class="d-flex align-center " no-gutters>
            <v-col >
                <v-btn icon >
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <span class="mx-2 font-weight-bold">Manage Booking</span>
                <span class="success--text caption ml-5">
                    <v-icon color="success" small class="mr-1">
                        mdi-checkbook-arrow-right
                    </v-icon>
                    <span class="text-decoration-underline">
                       Check in open now
                    </span>
                </span>
            </v-col>
            <v-col align="end">
                <v-btn class="ButtonColor rounded-lg white--text text-capitalize caption" >
                    <v-icon>
                        mdi-plus
                    </v-icon>  New Booking
                </v-btn>
            </v-col>
        </v-row> 
    </div>
</template>