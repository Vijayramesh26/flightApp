<template>
    <apexchart width="280" :options="chartOptions" :series="series" />
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            series: this.chartSeries,
            chartOptions: {
                chart: {
                    height: 280,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '50%',
                        },
                        dataLabels: {
                            name: {
                                show: false, // ✅ Hide center label name
                            },
                            value: {
                                fontSize: '24px',
                                fontWeight: 'bold', // ✅ Make it bold
                                show: true, // Keeps the percentage value visible
                            },
                        },
                    },
                },
                // labels: ['Cricket'], // ❌ Removed to hide label name
            },
        }
    },
    props:{
        chartSeries :Array
    }
}
</script>

<style scoped>
h3 {
    font-weight: bold;
}
</style>