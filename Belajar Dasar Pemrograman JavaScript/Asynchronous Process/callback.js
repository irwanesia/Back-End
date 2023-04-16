// const {judul} = require('./pengenalan-asynchronous');

// judul('Callback From Sandhika Galih');

// Synchrounous callback

// Callback => function yang dikirim sebagai parameter pada function yang lain
function hallo(nama){
    console.log(`Halo, ${nama}`);
}

function tampilkanPesan(callback){
    const nama = ["irwan", "andi", "adel"];

    callback(nama);
}

tampilkanPesan(hallo);

// attau

tampilkanPesan(nama => console.log(`Ini memasukan langsung fungsi kedalam argumen callback. thanks ${nama}`));


const mhs = [
    {
        "nama": "Irwan",
        "nik": "0001",
        "email": "Irwan@naw.co.id",
    },
    {
        "nama": "Andi",
        "nik": "0002",
        "email": "andi@naw.co.id",
    },
    {
        "nama": "Adel",
        "nik": "0002",
        "email": "adel@naw.co.id",
    },
];

console.log("mulai");
mhs.forEach(m => console.log(m.nama));
console.log("selesai");

// asynchrounous callback
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.status === 200){
        if(xhr.readyState === 4){
            console.log(JSON.parse(xhr.response));
        }
    }else{
        console.log(xhr.responseText);
    }
}

xhr.open('get', 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers');
xhr.send();

// ada cara simple cara begini menggunakan fetch
// lanjutt di promise

