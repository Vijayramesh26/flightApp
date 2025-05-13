<script>
export default {
    components: {
        BarChart
    },
    data(){
        return{
            selected: 'Last Week', 
        }
    },
    props:{
        salesChart:{}
    }
}
import BarChart from '../../../../StaticContent/Charts/BarChart.vue';

</script>

<template>
    <div>
        <v-card class="rounded-lg " min-height="400">
            <v-card-title class="d-flex justify-space-between">
      <span class="text-h6 font-weight-bold">Sales</span>
      <v-select v-model="selected" :items="salesChart.options" dense outlined hide-details style="max-width: 150px;"></v-select>
    </v-card-title>
            <v-card-text>

                <BarChart  />
            </v-card-text>
        </v-card>
    </div>
</template>