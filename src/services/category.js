import http from './config'


export default {

    listCategory: () => {

        return http.get('/category/list');
    },

    saveCategory: (category, credentials) => {

        const header = {

            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+credentials
        };

        return http.post('/category', category, {headers: header});
    }
}