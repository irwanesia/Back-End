const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

// module.exports = coffeeStock;

// Kode module.exports = coffeeStock membuat object coffeeStock ditetapkan sebagai nilai dari module.exports. Nilai properti exports ini nantinya bisa di-import dan digunakan pada berkas JavaScript lain.

// Jika Anda mencoba melihat nilai module yang ada pada berkas state.js dengan menambahkan kode console.log(module) di akhir berkas, maka kita akan melihat object coffeeStock menjadi nilai dari properti exports.

// console.log(module);


const isCoffeeMachineReady = true;

// module.exports = coffeeStock;
// module.exports = isCoffeeMachineReady;

// Kita tidak bisa melakukan export dari kedua nilai di atas dengan cara seperti diatas
// Baris kode kedua berarti kita menginisialisasikan ulang nilai properti module.exports sehingga nilai yang di-export hanya variabel isCoffeeMachineReady.

// Solusinya adalah kita tetap mengekspor satu nilai, tetapi kita akan memanfaatkan object literals ({ }).

// module.exports = {coffeeStock, isCoffeeMachineReady};
// console.log(module);

// Lalu bagaimana cara import kedua nilai tersebut? Masih ingat dengan materi destructuring object? Pada berkas index.js kita gunakan teknik destructuring object untuk mendapatkan nilai yang di-import seperti ini:

module.exports = {coffeeStock, isCoffeeMachineReady}; 