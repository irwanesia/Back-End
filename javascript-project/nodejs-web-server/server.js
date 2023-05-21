// membuat web server pertama menggunakan Node.js!
// running => npm run start

// 1. MEMBUAT HTTP SERVER
const http = require('http');
 
// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
 
//     response.statusCode = 200;
//     response.end('<h1>Halo HTTP Server!</h1>');
// };


// 2. MEMBUAT BODY REQUEST
// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     response.statusCode = 200;

//     const { method } = request;  // pake destructuring
    
//     if(method === 'GET'){
//         response.end('<h1>Hello!</h1>');
//     }

//     if(method === 'POST') {
//         let body = [];

//         request.on('data', chunk => {
//             body.push(chunk);
//         });

//         request.on('end', () => {
//             body = Buffer.concat(body).toString();
//             // Body masih bernilai data string JSON. Data ini masih perlu kita olah lagi agar bisa mendapatkan nilai name yang sebenarnya. Gunakanlah JSON.parse() untuk mengubah JSON string menjadi JavaScript objek
//             const { name } = JSON.parse(body);
//             response.end(`<h1>Hai, ${name}!</h1>`);
//         });
//     }
// };


// 3. LATIHAN MEMBUAT ROUTING REQUEST
const requestListener = (request, response) => {
    // 5. MEMBUAT RESPONSE HEADER
    // response.setHeader('Content-Type', 'text/html');
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
    
    const { method, url } = request;
    
    if(url === '/'){
        if(method === 'GET'){
            // 4. LATIHAN MEMBUAT RESPONSE STATUS
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage!',
            }));
        }else{
            response.statusCode = 400;
            // 5. MEMBUAT RESPONSE BODY
            response.end(JSON.stringify({
                message: `halaman tidak dapat diakses dengan ${method} request`
            }));
        }
        
    } else if (url === '/about'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Halo, Ini adalah halaman about!',
            }));
        } else if (method === 'POST'){
            let body = [];
            
            request.on('data', chunck => {
                body.push(chunck);
            });
            
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name  } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Halo, ${name} adalah halaman about!</h1>`,    
                }));
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
        
    }else{
        response.end(JSON.stringify({  
            message: 'Halaman tidak ditemukan!',
        }));
    }

};

 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});