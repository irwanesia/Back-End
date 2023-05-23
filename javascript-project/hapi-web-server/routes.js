const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Home Page';
        },
    },

    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut!';
        },
    },

    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        },
    },

    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut!';
        },
    },

    {
        method: 'GET',
        // 3. MEMBUAT PATH PARAMETER
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            // 4. MEMBUAT QUERY PARAMETERS
            const { lang } = request.query;

            
            if(lang == 'id'){
                return `Hai ${name}!`;
            }

            return `Hello ${name}!`;
        },
    },

    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan!';
        },
    },

    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            // MEMBUAT BODY/PAYLOAD REQUEST
            const { username, password }  = request.payload;
            return `Welcome, ${username}`;
        },
    },
];

module.exports = routes;