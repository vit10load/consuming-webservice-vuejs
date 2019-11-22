<template>
    <div>
        <b-table :items="produtos">
            <template v-slot:cell(img)="row">
                <img :src="`data:image/png;base64,${produtos[row.index].img}`" />
            </template>
            <template v-slot:cell(category)="row">
                <p>{{produtos[row.index].category.description}}</p>
            </template>
        </b-table>
    </div>
</template>

<script>

    import {BTable} from 'bootstrap-vue'
    import serviceProduto from '../services/produto'

    export default {
        name: "Produtos",

        components: {
            BTable
        },

        data(){

            return {

                array: window.location.pathname.split('/'),

                produtos: [


                ]
            }
        },

        methods: {

            carregarProduto: function () {

                serviceProduto.listar(this.array[2], 1).then((response) =>{

                    console.log(response.data);

                    this.produtos = response.data;

                    console.log(this.produtos);

                }).catch((response) => {

                    console.log(response);
                });
            }

        },

        mounted(){

            this.carregarProduto();

        },

    }
</script>

<style scoped>
    img {

        width: 80px;
        height: 80px;
    }
</style>