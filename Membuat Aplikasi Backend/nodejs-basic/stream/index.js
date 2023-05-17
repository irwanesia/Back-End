const fs = require('fs');
const { resolve } = require('path');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('gagal membaca input text');
        return;
    }
    console.log(data);
}

fs.readFile(resolve(__dirname, './input.txt'), 'UTF-8', fileReadCallback);
