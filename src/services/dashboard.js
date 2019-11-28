import http from './config'

export default {

    listarQuantidadeVendidaPorMes:() => {

        return http.get('/dashboard');
    }
}