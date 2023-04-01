class Judul {
    constructor(nama){
        this.nama = nama;
    }

    header(){
        console.log(`============== ${this.nama} ==============`);
    }
}

const judul1 = new Judul("Konsep-Konsep FP");
judul1.header()

function juduls(name){
    console.log(`============== ${name} ==============`);
}

juduls("Konsep-Konsep FP");
// Di sini kita akan membahas 4 konsep besar yang ada di FP. Yakni Pure Function, Immutability, Recursive, dan High-Order Function
// Pure Function
// Salah satu konsep besar dari paradigma FP adalah Pure Function. Apa artinya? Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya. Sehingga mau seperti apa keadaanya, fungsi yang dibuat selalu menghasilkan sesuatu yang sama, terkecuali bila fungsi tersebut diberikan nilai parameter yang berbeda.
let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80

// contoh diatas merupakan impure function
// Fungsi tersebut tidak bisa dikatakan pure function karena ia membutuhkan nilai yang berada di luar dari fungsinya, yakni nilai PI. Bila nilai PI berubah, maka penggunaan fungsi menghasilkan nilai yang berbeda walaupun diberikan nilai parameter yang sama.

// cara membuat pure function
const hitungLuasLingkaran2 = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
}

//   Dengan memindahkan nilai PI secara konstan di dalam fungsi, maka dapat dipastikan nilai tersebut tidak akan berubah atau tak sengaja diubah. Dengan begitu fungsi selalu menghasilkan nilai yang sama bila nilai parameter yang diberikan sama.
// Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.
// Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang Anda buat.

    // 1.Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
    // 2. Hanya bergantung pada argumen yang diberikan.
    // 3. Tidak menimbulkan efek samping.
// Bila 3 konsep di atas terpenuhi, maka bisa dipastikan Anda membuat sebuah pure function.
  
console.log(hitungLuasLingkaran2(4)); // 50.24
console.log(hitungLuasLingkaran2(4)); // 50.24
console.log(hitungLuasLingkaran2(8)); // 200.96
console.log(hitungLuasLingkaran2(8)); // 200.96

juduls("Immutability");
// Konsep yang kedua adalah immutability. Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat. Kontras dengan mutable yang artinya objek boleh diubah setelah objek tersebut dibuat.

// Konsep immutability sangat kental pada paradigma FP. Anda bisa lihat sebelumnya pada contoh penggunaan array map. Ketika menggunakan array.map(), alih-alih ia mengubah nilai dari array itu sendiri, malah ia membuat atau menghasilkan array b


juduls("sdfsdfsdfsd");
juduls("tesdfdsfsdst");
juduls("khjkhjkhjk");