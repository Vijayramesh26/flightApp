<template>
    <div class="mt-2">
        <v-row align="center" class="mb-2">
            <v-btn icon @click="moveToFlight">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <span class="ml-2 font-weight-bold">Add New Flight</span>
        </v-row>

        <!-- Stepper -->
        <v-stepper v-model="step" class=" transparent elevation-0">
            <v-stepper-header class="white rounded-lg elevation-0">

                <v-stepper-step :color="step >= 1 ? 'CalenderBtn' : 'grey lighten-1'" :complete="step > 1" step="1"
                    @click="MoveBack">
                    <span :class="step >= 1 ? 'CalenderBtn--text' : 'grey--text  text--lighten-1'"
                        class="font-weight-thin ">
                        Flight details
                    </span></v-stepper-step>
                <v-spacer></v-spacer>
                <v-icon
                    :class="step >= 1 ? 'CalenderBtn--text' : 'grey--text  text--lighten-1'">mdi-chevron-double-right</v-icon>
                <v-spacer></v-spacer>
                <v-stepper-step :color="step >= 2 ? 'CalenderBtn' : 'grey lighten-1'" :complete="step > 2" step="2"
                    @click="MoveBack">
                    <span :class="step >= 2 ? 'CalenderBtn--text' : 'grey--text  text--lighten-1'"
                        class="font-weight-thin ">
                        Schedule
                    </span></v-stepper-step>
                <v-spacer></v-spacer>
                <v-icon
                    :class="step >= 2 ? 'CalenderBtn--text' : 'grey--text  text--lighten-1'">mdi-chevron-double-right</v-icon>
                <v-spacer></v-spacer>
                <v-stepper-step :color="step >= 3 ? 'CalenderBtn' : 'grey lighten-1'" :complete="step > 3" step="3"
                    @click="MoveBack">
                    <span :class="step >= 3 ? 'CalenderBtn--text' : 'grey--text  text--lighten-1'"
                        class="font-weight-thin ">
                        Aircraft Info
                    </span></v-stepper-step>
                <v-spacer></v-spacer>
                <v-icon
                    :class="step >= 3 ? 'CalenderBtn--text' : 'grey--text  text--lighten-3'">mdi-chevron-double-right</v-icon>
                <v-spacer></v-spacer>
                <v-stepper-step :color="step >= 4 ? 'CalenderBtn' : 'grey lighten-1'" :complete="step > 4" step="4"
                    @click="MoveBack">
                    <span :class="step >= 4 ? 'CalenderBtn--text' : 'grey--text  text--lighten-1'"
                        class="font-weight-thin ">
                        Pricing
                    </span></v-stepper-step>
                <v-spacer></v-spacer>
                <v-icon
                    :class="step >= 4 ? 'CalenderBtn--text' : 'grey--text  text--lighten-1'">mdi-chevron-double-right</v-icon>
                <v-spacer></v-spacer>
                <v-stepper-step :color="step >= 5 ? 'CalenderBtn' : 'grey lighten-1'" :complete="step > 5" step="5"
                    @click="MoveBack">
                    <span :class="step >= 5 ? 'CalenderBtn--text' : 'grey--text  text--lighten-1'"
                        class="font-weight-thin ">
                        Review
                    </span></v-stepper-step>



            </v-stepper-header>
            <v-stepper-items class="mt-3 white rounded-lg">
                <v-stepper-content step="1">
                    <Sheet1 :addFlights="addFlights" />
                </v-stepper-content>

                <v-stepper-content step="2">
                    <Sheet2 :addFlights="addFlights" />
                </v-stepper-content>

            </v-stepper-items>
        </v-stepper>
        <!-- Buttons -->
        <v-row class="my-6 ml-1" justify="start">

            <v-btn color="ButtonColor" class="mr-4 text-capitalize rounded-lg elevation-0 white--text" large
                @click="step++">
                Save & Continue
            </v-btn>
            <v-btn outlined color="ButtonColor" class="text-capitalize rounded-lg" large @click="moveToFlight">Save
                & Exit</v-btn>
        </v-row>
    </div>
</template>

<script>
import Sheet1 from './sheet1.vue';
import Sheet2 from './sheet2.vue';


export default {
    components: {
        Sheet1,
        Sheet2
    },
    props: {
        addFlights:{}
    },
    methods: {
        MoveBack() {
            if (this.step > 1) {
                this.step--
            }
        },
        moveToFlight() {
            this.$emit('moveToFlight')
        },
    },
    data() {
        return {
            step: 1,
        };
    },
};
</script>
<style>
.v-stepper__step__step {
    border-radius: 4px !important;
    /* Make it a square with slightly rounded edges */
    width: 24px !important;
    height: 24px !important;
}
</style>