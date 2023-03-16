// # object
console.log("============== Object ==============")
// Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks
// Object berisi pasangan key dan value yang juga dikenal dengan property
const user = {firstName: "Luke", lastName: "Skywalker", age: 19, isJedi: true};
// atau 
const user2 = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine",
  };
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
// Setelah mempelajari bagaimana membuat object dan menampilkan property di dalamnya, selanjutnya kita akan memodifikasi sebuah object. Untuk mengubah nilai properti di dalam object kita gunakan assignment operator (=).
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };
  
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);

//   Tunggu dulu. Object spaceship dideklarasikan sebagai const, tetapi kenapa kita bisa mengubah nilainya?
//   Yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi ulang nilai. Ketika membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga kita masih bisa memodifikasi nilainya. Berbeda jika kita menginisialisasi ulang variabel dari object.
const spaceship2 = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};
   
// spaceship2 = { name: "New Millenium Falcon" }; // Error
// harusnya
spaceship2.name = "New Millenium Falcon";
console.log(spaceship2);
// Ketika kita mengubah object menggunakan assignment operator dan property/key-nya sudah ada, maka nilai di dalamnya akan tergantikan dengan nilai yang baru. Sedangkan, jika property dengan nama key yang ditentukan tidak ditemukan, maka property baru akan ditambahkan ke object.
const spaceship3 = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};
  
spaceship3.color = "Glossy red";
spaceship3["maxSpeed"] = 1300;
spaceship3.class = "Light freighter";
  
console.log(spaceship3);
// Kita juga dapat menghapus property pada object menggunakan keyword delete seperti berikut:
const spaceship4 = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};
  
spaceship4.color = "Glossy red";
spaceship4["maxSpeed"] = 1300;
  
delete spaceship4.manufacturer;
  
console.log(spaceship4);

// # array
console.log("============== Array ==============")
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray.length);
myArray.push('javascript'); 
console.log(myArray);
myArray.pop(); // mengeluarkan data atau elemen terakhir dari array
myArray.shift(); // untuk mengeluarkan elemen pertama dari array
myArray.unshift("apple"); // untuk menambahkan elemen di awal array
delete myArray[1]
console.log(myArray);
myArray.splice(1,1) // Menghapus dari index ke 1 sebanyak 1 elemen
console.log(myArray);

// # spread operator
console.log("============== Spread Operator ==============")
const favorites = ['seafood','salad','nugget', 'soup'];
const others = ["Cake", "Pie", "Donut"];
console.log(...favorites)
// Hasilnya Sama seperti kita menuliskan kode seperti ini:
console.log(favorites[0], favorites[1], favorites[2], favorites[3]);
// menggabungkan 2 array dgn spread operator
const allFavorites = [...favorites, ...others];
console.log(allFavorites);
// Selain array, spread operator juga bisa digunakan untuk object literals. Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas.
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };
const newObj = { ...obj1, ...obj2 };
console.log(newObj);

// # Destructuring Object & Array
// merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil.
console.log("============== Destructuring Object & Array ==============")
// Destructuring Object
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}   
const { firstName, lastName, age } = profile;
console.log(firstName, lastName, age)
// Destructuring Assignment
const profile2 = {
    firstName2: "John",
    lastName2: "Doe",
    age2: 18
}   
let firstName2 = "Dimas";
let age2 = 20;
 
// menginisialisasi nilai baru melalui destructuring object
({ firstName2, age2 } = profile2);
 
console.log(firstName2);
console.log(age2);
// Destructuring Array
// Destructuring array serupa dengan destructuring object. Object menggunakan tanda kurung kurawal { } sedangkan array menggunakan tanda kurung siku [ ]. Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada penamaan propertinya. Berikut contoh dari destructuring array pada ES6:
const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites2;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
 
const [ee, , bebas, tre ] = favorites2;
 
console.log(bebas);
console.log(ee)

// Destructuring Assignment
// Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites2;
 
console.log(myFood);
console.log(herFood);
// Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variabel. Sebelum ES6, untuk melakukan hal ini kita menggunakan cara manual menggunakan algoritma sorting seperti ini:
var a = 1;
var b = 2;
var temp;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
temp = a;
a = b;
b = temp;
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

// Dengan array destructuring assignment, kita bisa menukar nilai variabel dengan mudah tanpa membuat variabel tambahan.
let c = 1;
let d = 2;
console.log("Sebelum swap");
console.log("Nilai c: " + c);
console.log("Nilai d: " + d);
 
[c, d] = [d, c] // menetapkan nilai c dengan nilai d dan nilai d dengan nilai c.
 
console.log("Setelah swap");
console.log("Nilai c: " + c);
console.log("Nilai d: " + d);

// default value
// Ketika melakukan destructuring array, tetapi terdapat variabel yang posisinya tidak dapat terjangkau oleh array, maka variabel tersebut akan bernilai undefined. Contohnya
const favorites3 = ["Seafood"];
const [myFood3, herFood3] = favorites3
 
console.log(myFood3);
console.log(herFood3);

console.log("============== Map ==============")
// # Map
// Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.

// Untuk mendefinisikan Map gunakan constructor seperti di bawah ini:
// const myMap = new Map();
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
  ]);

  console.log(myMap);

  const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
  ]);
// untuk mendapatkan nilainya berdasarkan key tertentu dengan metode get() dan untuk menambahkan pasangan key value dengan metode set()
  console.log(capital.size);
  console.log(capital.get("London"));
  capital.set("New Delhi", "India");
  console.log(capital.size);

console.log("============== Set ==============")
// Set bersifat unik dan tidak ada duplikasi
const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet);

// Untuk menambahkan data ke dalam Set kita bisa memanfaatkan fungsi add().
const numberSet2 = new Set([1, 4, 6, 4, 1]);
numberSet2.add(5);
numberSet2.add(10);
numberSet2.add(6);

console.log(numberSet2);

numberSet2.delete(4)
console.log(numberSet2);

console.log("============== WeakMap & WeakSet ==============")
// WeakMap merupakan varian dari Map yang mendukung garbage collection. Garbage collection adalah proses di mana interpreter JavaScript mengambil kembali memori yang tidak lagi “dapat dijangkau” dan tidak dapat digunakan oleh program [3]. Garbage collection di JavaScript dilakukan secara otomatis dan bukan menjadi urusan dari developer.

// Yang dimaksud weak dalam WeakMap adalah referensi terhadap nilai yang disimpan. Apabila suatu nilai yang disimpan di WeakMap sudah tidak terjangkau atau tidak bisa lagi diakses, maka referensi ke memorinya akan dihapus

// Berikut ini adalah beberapa hal yang membedakan antara Map dan WeakMap:
// * Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection.
// * WeakMap memiliki method get(), set(), has(), dan delete(). Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki method keys(), values(), atau forEach().
// * WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.
// contoh kode dan perbedaan antara Map dan WeakMap.

const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);  // Menambahkan user "Jonas"

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(visitsCountMap);
}, 10000)

// Berbeda jika kita menggunakan WeakMap seperti ini.
// Ketika nilai jonas sudah tidak bisa dijangkau, object jonas akan dihapus dari memori termasuk informasi yang disimpan di dalam WeakMap.
const { inspect } = require('util'); // modul commonJS
// import inspect from "../util"; // modul ES
// export const inspect = 'util';
const visitsCountMap2 = new WeakMap(); // Menyimpan daftar user

function countUser2(user2) {
  let count = visitsCountMap2.get(user2) || 0;
  visitsCountMap2.set(user2, count + 1);
}

let jonas2 = { name: "Jonas" };
countUser2(jonas2);  // Menambahkan user "Jonas"

jonas2 = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(inspect(visitsCountMap2, { showHidden: true }));
}, 10000);