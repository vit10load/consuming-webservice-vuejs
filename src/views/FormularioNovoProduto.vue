<template>
    <div>
        <h2>Cadastro</h2>
        <hr>
        <b-form @submit="onSubmit">
            <b-form-group
                    id="input-group-1"
                    label="Descrição"
                    label-for="input-1"
                    description=""
            >
                <b-form-input
                        id="input-1"
                        v-model="form.description"
                        type="text"
                        required
                        placeholder="description"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Preço:" label-for="input-2">
                <b-form-input
                        id="input-2"
                        v-model="form.price"
                        required
                        placeholder="Enter Price"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Categorias" label-for="input-3">
                <b-form-select
                        id="input-3"
                        v-model="form.cat"
                        :options="categories"
                        required
                ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4" label="Preço promocional:" label-for="input-4">
                <b-form-input
                        id="input-4"
                        v-model="form.promocao"
                        required
                        placeholder="Enter Price"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="Marca:" label-for="input-5">
                <b-form-input
                        id="input-5"
                        v-model="form.marca"
                        required
                        placeholder="Enter Marca"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" label="Quantidade:" label-for="input-6">
                <b-form-input
                        id="input-6"
                        v-model="form.quantidade"
                        required
                        placeholder="quantidade"
                ></b-form-input>
            </b-form-group>

            <b-form-group>
                <b-form-file
                            v-model="form.file"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                            @change="onFileChange"
                ></b-form-file>
            </b-form-group>

            <b-button type="submit" variant="primary">Enviar</b-button>

        </b-form>
    </div>
</template>

<script>

    import {BForm, BFormGroup,BFormInput, BFormFile, BFormSelect, BButton} from 'bootstrap-vue'
    import serviceProduto from '../services/produto'
    import serviceCategory from '../services/category'

    export default {
        name: "FormularioNovoProduto",

        components: {

            BForm,
            BFormGroup,
            BFormSelect,
            BFormInput,
            BFormFile,
            BButton

        },
        data() {
            return {
                form: {
                },
                image: '',
                categories: [
                    {text: '', value: ''}
                ],

            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                let category = {

                    id: this.form.cat
                };
                let object = {

                    description: this.form.description,
                    price: this.form.price,
                    category: category,
                    promotionalPrice: this.form.promocao,
                    brand: this.form.marca,
                    quantity: this.form.quantidade,
                    img: this.form.file
                };

                console.log(object);

                this.salvarProduto(object,this.$store.getters.authUser.token);
            },
            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {

                 this.image = new Image();
                 let reader = new FileReader();
                 this.image = this;

                reader.onload = (e) => {

                    this.image = e.target.result;
                    this.form.file = this.image.split(",")[1];
                };

                reader.readAsDataURL(file);
            },

            salvarProduto: function (obj, credentials) {

                serviceProduto.save(obj, credentials).then((response) => {

                    console.log(response.data);

                }).catch((response) => {

                    console.log(response.data);
                });
            },

            loadCategories: function(){

                serviceCategory.listCategory().then((response) => {

                    for (let i = 0; i < response.data.length; i++) {

                        let objCategorieList = {

                            text: response.data[i].description,
                            value: response.data[i].id
                        };
                        this.categories.push(objCategorieList);
                    }

                }).catch((response) => {
                    console.log(response.data);
                });
            }
        },

        mounted() {

            this.loadCategories();
        }
    }
</script>

<style scoped>

</style>