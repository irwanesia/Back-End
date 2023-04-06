// Lalu bagaimana caranya untuk melakukan import atau menggunakan object yang sudah di-export? Caranya adalah menggunakan method require(). cara 1
// const coffeeStock = require('./state');

// Lalu bagaimana cara import kedua nilai tersebut? Masih ingat dengan materi destructuring object? Pada berkas index.js kita gunakan teknik destructuring object untuk mendapatkan nilai yang di-import seperti ini: cara 2
const {coffeeStock, isCoffeeMachineReady} = require('./state');

// console.log(coffeeStock);
console.log(coffeeStock);
console.log(isCoffeeMachineReady);

// Dalam inisialisasi variabel coffeeStock (nama variabel bebas kita tentukan), kita gunakan method require() dengan memberikan parameter lokasi berkas state.js. Dengan begitu variabel coffeeStock akan memiliki nilai module.exports yang sama pada berkas state.js. Setelah mendapatkan nilainya, kita bebas menggunakannya seperti variabel lokal pada umumnya.

// Namun ingat, ketika menggunakan destructuring object pastikan penamaan variabel lokal sesuai dengan properti objeknya. Jika tidak, maka variabel tersebut akan menghasilkan undefined.

// arabica: 100, robusta: 150, liberica: 200

const makeCoffee = (type, miligrams) => {
    if(coffeeStock[type] >= miligrams){
        console.log("Kopi berhasil dibuat!");
    }else{
        console.log("Biji kopi habis!");
    }
} 

makeCoffee("robusta", 151);

// Tips: Jika kita menggunakan lokasi yang relatif (dapat berubah/dipindahkan), pastikan awali dengan menuliskan ./. Contohnya, berkas index.js dan state.js berada pada folder yang sama, maka kita cukup menuliskannya dengan ./state.js.

