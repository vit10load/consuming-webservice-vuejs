<template>
    <div>
        <h2>Cadastro | Categorias</h2>
        <b-link variant="primary" to="/novo-produto">
            <b-button variant="primary">
                Novo
            </b-button>
        </b-link>
        <b-table striped hover :items="items" :fields="cabecalhos">
                <template v-slot:cell(show_details)="row">

                    <router-link :to="`/produtos/${items[row.index].id}`">Produtos</router-link>
                </template>
        </b-table>
    </div>

</template>

<script>

    import serviceCategory from '../services/category'
    import {BTable, BLink, BButton} from 'bootstrap-vue'

    export default {
        name: "ListarCategoria",

        components: {
            BTable,
            BLink,
            BButton
        },

        data() {

            return {

                indice : 0,

                items: [

                    { id: '', description: ''}
                ],

                cabecalhos : [

                    {
                        key: 'id',
                        label: 'Ident.'
                    },
                    {
                        key: 'description',
                        label: 'Descrição'
                    },

                    {
                        key: 'show_details',
                        label: 'Produtos|categoria'
                    }

                ]

            }
        },

        methods: {
            loadCategory() {
                serviceCategory.listCategory().then((response) => {
                    this.items = response.data;

                }).catch((response) => {
                    console.log(response.data);
                });
            }
        },

        mounted() {

            this.loadCategory();
        }

    }
</script>

<style scoped>

</style>