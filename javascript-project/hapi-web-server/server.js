// 1. BELAJAR MEMBUAT SERVER MENGGUNAKAN HAPI
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    // 2. METHOD/VERB REQUEST & ROUTING
    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();