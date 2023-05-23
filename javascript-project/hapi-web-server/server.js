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

// 5. MEMBUAT RESPONSE TOOLKIT
// detailed notaion
const handler = (request, h) => {
    const response = h.response('success');
    response.type('text/plain');
    response.header('X-Custom', 'some-value');
    return response;
}


// cahined notaion
const handlers = (request, h) => {
    const response = h.response('success')
    .type('text/plain')
    .header('X-Custom', 'some-value');
    return response;
}