import http from './config'

export default {

    listar: (categoria, pagina) => {

        return http.get("/product/list/"+categoria+"/"+pagina);
    },

    save: (obj, credentials) => {

        const header = {

            'Authorization': 'Bearer '+credentials
        };

        return http.post("/product/", obj, {headers: header});

    }
}
