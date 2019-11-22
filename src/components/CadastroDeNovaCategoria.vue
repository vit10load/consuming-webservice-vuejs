<template>
    <div>
        <b-container>
            <h2>Cadastro | Nova categoria</h2>
        </b-container>
        <b-container>
            <b-row>
        <b-col sm="4">
            <b-form @submit.prevent="saveCategorys">
                <b-form-group
                        id="input-group-1"
                        label="Descrição"
                        label-for="Descrição"
                        label-cols-lg="3"
                >
                    <b-form-input
                            id="input-1"
                            type="text"
                            v-model="categoryObject.description"
                            required
                            placeholder="informe uma categoria"
                    ></b-form-input>
                </b-form-group>
                <b-button lg="3" type="submit" variant="primary">Salvar</b-button>
                <b-button type="reset" variant="danger">Cancelar</b-button>
            </b-form>
            </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

    import {BForm, BFormGroup, BFormInput, BButton, BContainer, BRow, BCol} from 'bootstrap-vue'
    import Category from "../models/Category";
    import category from "../services/category";

    export default {

        name: "CadastroDeNovaCategoria",

        data(){

            return {

                categoryObject: new Category()
            }
        },
        components: {
            BForm,
            BFormGroup,
            BFormInput,
            BButton,
            BContainer,
            BRow,
            BCol
        },

        methods: {

            saveCategorys(){

                let object = {"description": this.categoryObject.description};

                category.saveCategory(JSON.parse(JSON.stringify(object))
                        ,this.$store.getters.authUser.token).then((response) => {

                        console.log(response.data);

                        this.$router.push('/lista-categorias');

                }).catch((response) => {

                        console.log(response.data);
                });

            }

        }
    }
</script>

<style scoped>

</style>