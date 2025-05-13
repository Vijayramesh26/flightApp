<template> 
      <apexchart
        type="bar"
        height="250"
        :options="chartOptions"
        :series="series"
      /> 
  </template>
  
  <script>
  import VueApexCharts from 'vue-apexcharts';
  
  export default {
    components: {
      apexchart: VueApexCharts,
    },
    data() {
      return {
        series: [
          {
            name: 'Sales',
            data: [78000, 55000, 67000, 25000, 54000, 85000, 60000],
          },
          {
            name: 'Remaining',
            data: [22000, 45000, 33000, 75000, 46000, 15000, 40000],
          },
        ],
        chartOptions: {
          chart: {
            stacked: true,
            type: 'bar',
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '40%',
              endingShape: 'rounded',
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: false,
          },
          xaxis: {
            categories: ['June 01', 'June 02', 'June 03', 'June 04', 'June 05', 'June 06', 'Sept 10'],
            labels: {
              style: {
                fontWeight: 600,
              },
            },
          },
          yaxis: {
            max: 100000,
            labels: {
              formatter: (val) => `${val / 1000}k`,
            },
          },
          fill: {
            opacity: 1,
            colors: ['#2E0F54', '#E5E5E5'],
          },
          legend: {
            show: false,
          },
          grid: {
            show: true,
          },
        },
      };
    },
  };
  </script>
  
  <style scoped>
  h3 {
    font-weight: bold;
  }
  </style>
  