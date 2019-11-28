<script>
    import {Line} from 'vue-chartjs'
    import serviceDashboard from '../services/dashboard'

    export default {
        name: "GraficoDashBoard",
        extends: Line,
        data: () => ({
            chartdata : {

                labels: ['JAN', 'FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'],

                datasets: [
                    {
                        label: '',
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: '#249EBF',
                        data: []
                    }
                ]
            },

            options: {

                responsive: true,
                maintainAspectRatio: false
            }
        }),

        methods: {

            carregarDashBoard(){

                serviceDashboard.listarQuantidadeVendidaPorMes().then((response) => {

                    this.chartdata.datasets[0].data = response.data;
                    this.renderChart(this.chartdata, this.options);

                }).catch((response) => {

                    console.log(response.data);

                });
            }
        },

        mounted() {

            this.carregarDashBoard();

        }
    }
</script>

<style scoped>

</style>