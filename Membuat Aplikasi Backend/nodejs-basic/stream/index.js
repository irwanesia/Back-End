const fs = require('fs');
const { resolve } = require('path');

// read
const readableStream = fs.createReadStream(resolve(__dirname, './input.txt'), {
    highWaterMark: 15
});

// create
const writableStream = fs.createWriteStream(resolve(__dirname, './output.txt'));

// jalankan events stream
readableStream.on('readable', ()=>{
    try {
        writableStream.write(`[${readableStream.read()}]\n`);
    }catch(error){
        // // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', ()=>{
    console.log('Done');
});