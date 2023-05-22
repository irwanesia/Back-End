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
            return `Hello ${name}!`;
        }
    },

    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan!';
        },
    },
];

module.exports = routes;