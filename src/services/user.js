import http from './config'

export default {
    signup: (user) => {

        /* ACESSO PERMITO POR CONTROLE DE ORIGEM */
        const headers = {

            'Content-Type': 'application/json',
            'Authorization': 'Access-Control-Allow-Origin: *'
        };

        return http.post("/user/signup", user, {headers: headers });
    },

    login: (email, senha) => {
        const credentials = btoa(email+":"+senha);
        const headers = {
            'Authorization': 'Basic '+credentials
        };
        return http.get("/user/login",{headers:headers});
    }
}
