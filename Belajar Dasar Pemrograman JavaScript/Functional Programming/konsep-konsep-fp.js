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

// Konsep immutability sangat kental pada paradigma FP. Anda bisa lihat sebelumnya pada contoh penggunaan array map. Ketika menggunakan array.map(), alih-alih ia mengubah nilai dari array itu sendiri, malah ia membuat atau menghasilkan array baru
const nama2 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNama2WithExcMark = nama2.map((name) => `${name}!`);

console.log({
    nama2,
    newNama2WithExcMark,
});
// Lantas, bagaimana bila kita benar-benar perlu mengubah nilai dari sebuah objek? Contohnya seperti ini:
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);

console.log(user);

// Yup! Tujuan Anda memang tercapai namun itu bukanlah konsep dari paradigma FP. Bila Anda ingin menerapkan FP sepenuhnya, hindari cara seperti di atas. Lantas bagaimana solusinya? Sama seperti fungsi array map(), alih-alih mengubah nilai objek secara langsung, terapkan perubahan tersebut pada nilai return dalam objek baru.
const user2 = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUser2WithNewLastName = (newLastName, user2) => {
    return { ...user2, lastName: newLastName }
}

const newUser2 = createUser2WithNewLastName('Potter', user2);

console.log(newUser2);

juduls("Rekursif");
// Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.

// Kita akan mencoba mengubah fungsi countDown yang biasanya kita buat menggunakan sintaksis iterasi seperti for, foreach, while seperti kode di bawah menjadi bentuk rekursif.
const countDown = start => {
    do {
      console.log(start);
      start -=1;
    }
    while(start > 0);
};
   
countDown(10);

// Maka, bentuk rekursinya adalah sebagai berikut:
const countDowns = start => {
    console.log(start);
    if(start > 0) countDowns(start-1);
  };
  
  console.log("hasil dari rekursif");
  countDowns(10);
//   Dengan teknik rekursif ini, kita sebenarnya bisa menggantikan operasi iterasi dengan rekursi. Namun tidak sebatas itu saja, dengan rekursi kita dapat membuat dan mengolah data structures seperti Tree dan Array.

juduls("Higher-Order Function");
// JavaScript memiliki kemampuan First Class Functions, karena itu fungsi pada JavaScript dapat diperlakukan layaknya sebuah data. Kita bisa menyimpan function dalam variabel, memberikan function sebagai parameter pada fungsi lainnya, hingga mengembalikan function di dalam function.
const hello = () => {
    console.log('Hello!')
  };
  
const say = (someFunction) => {
    someFunction();
}
  
const sayHello = () => {
    return () => {
      console.log('Hello!');
    }
}
  
hello();
say(hello);
sayHello()();

//   Higher-Order Function menjadi bagian konsep pada paradigma FP. Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.

// Teknik Higher-Order Function biasanya digunakan untuk:

    // Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
    // Membuat utilities yang dapat digunakan di berbagai tipe data.
    // Membuat teknik currying atau function composition.
// Array map() merupakan salah satu contoh Higher-Order Function yang ada di JavaScript. Karena dalam penggunaanya, ia menerima satu buah argumen yang merupakan sebuah function.

// Dengan mengetahui adanya Higher-Order Function, Anda bisa membuat fungsi map() versi Anda sendiri.
const namesx = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}


const newNamesx = arrayMap(namesx, (name) => `${name}!` );

console.log({
  namesx,
  newNamesx,
});