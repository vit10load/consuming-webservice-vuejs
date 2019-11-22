<template>
    <b-card title="Sign Up"
            sub-title="Cadastre-se para acessar o sistema">
        <b-form>
            <b-form-group
                label="Seu nome"
                description="Informe seu nome">
                <b-form-input
                    type="text"
                    v-model="usuario.name"
                    required
                    description="informe seu nome">
                </b-form-input>
            </b-form-group>

            <b-form-group
                    label="E-mail:"
                    description="Informe um e-mail válido">
                <b-form-input
                        type="email"
                        v-model="usuario.email"
                        required
                        placeholder="Insira seu e-mail">
                </b-form-input>
            </b-form-group>

            <b-form-group
                    label="Senha:"
                    description="A senha deve possuir no minimo 6 caracteres">
                <b-form-input
                        type="password"
                        v-model="usuario.password"
                        required
                        placeholder="Insira sua senha">
                </b-form-input>
            </b-form-group>
        </b-form>
        <b-button v-on:click="saveInSystem" variant="primary">Login</b-button>
    </b-card>
</template>

<script>
    import {BCard, BForm, BFormGroup, BFormInput, BButton} from 'bootstrap-vue'
    import User from '../models/User'
    import userService from '../services/user'

    export default {
        name: "SignUp",
        components: {
            BCard,
            BForm,
            BFormGroup,
            BFormInput,
            BButton
        },

        data(){

            return {

                usuario: new User()
            }
        },

        methods: {

            saveInSystem: function () {

                //console.log(JSON.parse(this.usuario.name));
                let obj = {

                    email: this.usuario.email.toString(),
                    name: this.usuario.name.toString(),
                    password: this.usuario.password.toString()
                }

                console.log(JSON.parse(JSON.stringify(obj)));

                userService.signup(JSON.parse(JSON.stringify(obj))).then((response) => {

                    console.log(response.data);

                    this.$router.push('/login');

                }).catch((response) => {

                    console.log(response.data)

                });
            }

        }

    }
</script>

<style scoped>

</style>
