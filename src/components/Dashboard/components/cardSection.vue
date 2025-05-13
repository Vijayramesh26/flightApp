<template>
    <div class="cardSection">
        <v-row no-gutters>
            <v-col v-for="(content, index) in cardContent" :key="index" lg="3" md="3" sm="6" cols="12">
                <v-card class="rounded-lg ma-2" max-width="100%" :style="{
                    background: `linear-gradient(to top left, ${content.startColor}, ${content.endColor})`
                }" relative>
                    <v-row class="d-flex flex-column ma-3 pa-4" no-gutters>
                        <v-col>
                            <v-row class="mb-2">
                                <v-col>
                                    <v-chip label class="iconColor ">
                                        <v-icon>
                                            {{ content.icon }}
                                        </v-icon>
                                    </v-chip>

                                </v-col>
                                <v-col class="d-flex justify-end "> <v-chip class="iconColor  " label>
                                        {{ content.percentage }}
                                    </v-chip>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col class=" text-subtitle-1 white--text">
                            {{ content.title }}
                        </v-col>
                        <v-col>

                            <v-row class="">
                                <v-col class="font-weight-bold text-h6 white--text">
                                    {{ content.price }}
                                </v-col>
                                <v-col class="d-flex justify-end "> <v-img src="../../../assets/spiral.png"
                                        style="position: absolute;  right: -60px; top:60px; "></v-img>
                                </v-col>
                            </v-row>

                        </v-col>

                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import Eventservices from '../../../services/Eventservices';
export default {
    data() {
        return {
            cardContent: [{
                icon: "mdi-bitcoin",
                title: "Sales",
                price: "$1,22,154",
                percentage: "25.26%",
                endColor: "#805ADF",
                startColor: "#E4DBFD"
            },
            ],

        }
    },
    methods: {

        getElevation(index) {
            // Check if the card is selected, then set the elevation
            return this.selectedCard === index ? 0 : 2;
        },
        getFontColor(index) {
            return this.selectedCard === index ? 'orange' : this.cards[index];
        },
        getColor(index) {
            // Check if the card is selected, then set the color
            return this.selectedCard === index ? this.cards[index] + ' lighten' : this.cards[index];
        }, isSelected(index) {
            // Check if the card is selected
            return this.selectedCard === index;
        },
        // FOR API CALL (MOCK)
        getDashCardValue() {
            Eventservices.GetDashCardValue()
                .then((response) => {
                    if (response.data.status == "S") {
                        this.cardContent = response.data.cardContent

                    } else {
                        this.MessageBar("E", response.data.errMsg);
                    }
                })
                .catch((errMsg) => {
                    this.MessageBar("E", errMsg);
                });
        }
    },
    mounted() {
        this.getDashCardValue()
    }
}</script>
<style>
.cardSection .iconColor {
    background-color: rgba(244, 245, 250, 0.3) !important;
    /* 30% opacity */
}

.cardSection .iconColor v-icon {
    opacity: 1 !important;
    /* Ensures icon is fully visible */
}
</style>