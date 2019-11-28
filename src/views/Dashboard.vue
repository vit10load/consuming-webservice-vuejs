<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>Dashboard
                    <small class="text-muted"> | resumo</small>
                </h3>
                <grafico-dash-board></grafico-dash-board>
            </div>
        </b-row>
    </div>
</template>

<script>
    import GraficoDashBoard from "../components/GraficoDashBoard";

    import {BRow} from 'bootstrap-vue'
    export default {
        name: 'dashboard',
        components: {
            BRow,
            GraficoDashBoard
        }
    }
</script>

<style scoped>

</style>
