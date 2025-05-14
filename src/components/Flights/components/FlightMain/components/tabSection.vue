<template>
    <div class="flightSection">
        <v-row class="d-flex align-center " no-gutters>
            <v-col>
                <v-tabs v-model="tab" background-color="transparent" color="TabTextColor" slider-color="SliderColor"
                    slider-size="3" class="caption">
                    <v-tab class="caption" :class="{ 'SliderColor--text font-weight-bold': tab === index }"
                        v-for="(tabs, index) in flightHome.tabValues" :key="tabs" v-text="tabs"></v-tab>
                </v-tabs>
            </v-col>
            <v-col align="end">
                <v-btn class="ButtonColor rounded-lg white--text text-capitalize caption" @click="moveToAddFlight">
                    <v-icon>
                        mdi-plus
                    </v-icon> Add New Flights
                </v-btn>
            </v-col>
        </v-row>
        <v-row no-gutters class="my-2 pt-2">
            <v-col>
                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="monthYear"
                    transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" small class="white  rounded-lg" text>{{ formattedMonth }}
                            <v-icon class="ml-2" small>
                                mdi-calendar
                            </v-icon>
                        </v-btn>
                    </template>

                    <v-date-picker v-model="monthYear" type="month" no-title scrollable @input="onMonthChange">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(monthYear)">OK</v-btn>
                    </v-date-picker>
                </v-menu>
            </v-col>
            <v-col align="end">
                <v-btn small class="white mx-2 rounded-lg" text @click="prevWeek" :disabled="currentWeekIndex === 0">
                    <v-icon x-small color="black">
                        mdi-less-than
                    </v-icon>
                </v-btn>
                <v-btn small class="white mx-2 rounded-lg font-weight-bolder" text @click="nextWeek"
                    :disabled="currentWeekIndex === weeksArr.length - 1">
                    <v-icon x-small color="black">
                        mdi-greater-than
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row no-gutters class="my-3 d-flex justify-space-between">
            <v-col v-for="(day, index) in weeksArr[currentWeekIndex]" :key="index" class="d-flex align-center ">
                <v-card class="pa-3 py-5 rounded-xl d-flex flex-column align-center justify-center" elevation="0"
                    width="180" @click="getChartByID(day)"
                    :class="{ 'CalenderBtn white--text': day.date == ChoosedDate }">
                    <div class="font-weight-bold text-h5" :class="{ ' grey--text': day.date != ChoosedDate }"
                        v-text="day.date">
                    </div>
                    <div class="text-uppercase caption" :class="{ ' grey--text': day.date != ChoosedDate }"
                        v-text="day.day">
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <FlightContent :flightdata="flightdata" :actions="flightHome.actions" />
    </div>
</template>
<script>
import FlightContent from './flightContent.vue';

export default {
    components: {
        FlightContent
    },
    props: {
        flightHome: {}
    },
    data() {
        return {
            tab: 'Upcoming',
            menu: false,
            monthYear: this.getCurrentMonth(), // "2025-05"
            weeksArr: [],
            currentWeekIndex: 0,
            ChoosedDate: 0,
            flightdata: [],

        };
    },
    computed: {
        formattedMonth() {
            const [year, month] = this.monthYear.split("-");
            const date = new Date(`${year}-${month}-01`);
            return date.toLocaleString("default", { month: "long", year: "numeric" });
        }
    },
    methods: {
        moveToAddFlight() {
            this.$emit('moveToAddFlight')
        },
        getChartByID(date) {
            if (!date || !date.date || !date.dateKey) {
                console.warn("Invalid date object passed to getChartByID:", date);
                return;
            }

            this.ChoosedDate = date.date;

            if (this.flightHome?.flightsByDate?.[date.dateKey]) {
                this.flightdata = this.flightHome.flightsByDate[date.dateKey];
            } else {
                this.flightdata = []; // or null 
            }
        },
        getCurrentMonth() {
            const now = new Date();
            return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
        },
        onMonthChange() {
            this.generateWeeks();
            this.currentWeekIndex = 0;
        },
        generateWeeks() {
            const [year, month] = this.monthYear.split("-");
            const date = new Date(year, month - 1, 1);
            const days = [];

            while (date.getMonth() === parseInt(month) - 1) {
                days.push({
                    date: date.toLocaleDateString("default", { day: "2-digit" }),
                    month: date.toLocaleDateString("default", { month: "2-digit" }),
                    day: date.toLocaleDateString("default", { weekday: "short" }),
                    dateKey: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`,
                    dayIndex: date.getDay()
                });
                date.setDate(date.getDate() + 1);
            }
            this.getChartByID(days[0])
            // Group days into weeks
            const weeks = [];
            let week = [];

            days.forEach((dayObj, index) => {
                week.push(dayObj);
                if (week.length === 7 || index === days.length - 1) {
                    weeks.push(week);
                    week = [];
                }
            });

            this.weeksArr = weeks;

        },
        prevWeek() {
            if (this.currentWeekIndex > 0) {
                this.currentWeekIndex--;
            }
        },
        nextWeek() {
            if (this.currentWeekIndex < this.weeksArr.length - 1) {
                this.currentWeekIndex++;
            }
        }
    },
    mounted() {
        this.generateWeeks();
    }
};
</script>
<style>
.flightSection .v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev {
    display: none;
}
</style>