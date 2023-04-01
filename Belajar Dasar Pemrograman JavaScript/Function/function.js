
console.log("============== Declaring Function ==============")
// Mirip dengan fungsi pada matematika, fungsi dalam pemrograman juga digunakan untuk menghasilkan output berdasarkan input tertentu.

// Namun, fungsi juga bisa digunakan sebagai blok kode atau prosedur yang dapat digunakan secara berulang. Dalam arti lain, kita dapat berpikir bahwa function merupakan sebuah variabel yang berisi blok logika. Blok logika tersebut akan dieksekusi ketika variabelnya dipanggil.

// Terkadang di dalam tanda kurung kita membutuhkan sebuah informasi tambahan yang disebut dengan parameter. Parameter merupakan data yang digunakan pada fungsi untuk diproses di dalamnya. Sebagai contoh, fungsi console.log() dapat menerima argument berupa string atau data lain untuk ditampilkan ke konsol.
function multiply(a, b) { // parameter
    return a * b;
}

// Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi.
let test = multiply(3, 4); // parameter
console.log(test);

function greeting2() {
    console.log("Good Morning!")
  }
  
greeting2();

function greeting(name, language) {
    if(language === "English") {
      console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
      console.log(`Bonjour ${name}!`);
    } else {
      console.log(`Selamat Pagi ${name}!`);
    }
}
greeting("Harry", "Indonesia");

// Satu hal lagi, function dapat menghasilkan output atau mengembalikan sebuah nilai. Dengan nilai kembalian, kita dapat membuat function yang berfungsi untuk melakukan perhitungan matematika dan hasilnya dapat kita masukkan ke dalam sebuah variabel
function multiply2(a, b) {
    return a * b;
  }
  
let result = multiply2(10, 2)
console.log(result)

// Agar fungsi bisa mengembalikan nilai, gunakan keyword return diikuti dengan nilai yang akan dikembalikan. Nilai kembalian tidak hanya number, bisa juga berupa string, boolean, object, array, atau tipe yang lain
function greeting3(name, language) {
    if(language === "English") {
      return `Good Morning ${name}!`
    } else if (language === "French") {
      return `Bonjour ${name}!`;
    } else {
      return `Selamat Pagi ${name}!`;
    }
  }
  
  let greetingMessage = greeting3("Harry", "English");
  console.log(greetingMessage);

  console.log("============== Expression Function ==============")
//   Cara lain untuk membuat sebuah fungsi pada JavaScript adalah expression function. Ingat kembali bahwa expression adalah kode atau instruksi yang mengembalikan nilai, sehingga expression function bisa disimpan dalam sebuah variabel.
// Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya. Fungsi yang tidak bernama juga dikenal dengan anonymous function
const greeting4 = function(name, language) {
    if(language === "English") {
      return "Good Morning " + name + "!";
    } else if (language === "French") {
      return "Bonjour " + name + "!";
    } else {
      return "Selamat Pagi " + name + "!";
    }
}

console.log(greeting4('Irwan', 'French'));

console.log("============== Function Parameter ==============")
// Parameter dari fungsi dapat berupa tipe data apa pun, mulai dari string, number, object, bahkan fungsi lain.

// Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya. Contohnya seperti berikut:
const user = {
    id: 24,
    displayName: 'float',
    fullName: 'floatnesia.co.id',
};
  
function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}
  
introduce(user);

console.log("============== Default Parameter ==============")
// Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun tipe argumen yang dimasukkan ke dalam parameter. Ini berarti kita bisa memasukkan argumen meskipun tidak sesuai dengan parameter yang telah didefinisikan.
// function exponentsFormula(baseNumber, exponent) {
//     const result = baseNumber ** exponent;
//     console.log(`${baseNumber}^${exponent} = ${result}`);
//   }
  
//   exponentsFormula(2);
function exponentsFormula(baseNumber, exponent = 2) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}
  
exponentsFormula(3);

console.log("============== Rest Parameter ==============")
// Masih ingat dengan spread operator (...)? Jika spread operator menyebarkan array menjadi beberapa elemen berbeda, rest parameter ini adalah kebalikan dari operator tersebut. Penasaran?

// Rest parameter juga dituliskan menggunakan three consecutive dots (...). Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array. Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan parameter yang tidak pasti.

// Sebagai contoh adalah fungsi yang menjumlahkan seluruh nilai argumen seperti berikut
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
}
  
console.log(sum(1, 2, 3, 4, 5, 10, 12, 12));

console.log("============== Arrow Function ==============")
// Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ). Tentunya penulisan arrow function ini akan lebih singkat.

// # reguler function
// function declaration
function sayHello1(greet) {
  console.log(`${greet}!`);
}
 
// # function expression
const sayName2 = function (name) {
  console.log(`Nama saya ${name}`);
}

// # Arrow function
// function expression
const sayHello2 = (greet) => {
  console.log(`${greet}!`);
}
 
const sayName3 = (name) => {
  console.log(`Nama saya ${name}`);
}

// Pada arrow function kita tidak perlu menuliskan keyword function setiap membuat fungsi. Kita tetap menuliskan parameter di dalam tanda kurung lalu diikuti dengan tanda panah (=>) sebelum kurung kurawal.
// Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung seperti berikut:
const sayName = (name) => console.log(`Nama saya ${name}`);
sayName("Floatnesia");
const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();
// Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris)
const noReturn = (a, b) => a * b;
console.log(noReturn(3, 4));

console.log("============== Variable Scope ==============")
// Variabel yang dapat diakses dari seluruh script disebut dengan “globally scoped”, sementara variabel yang hanya diakses hanya pada fungsi tertentu disebut dengan “locally scoped”.
// Variabel JavaScript menggunakan fungsi untuk mengelola cakupannya. Jika variabel didefinisikan di luar fungsi, maka variabel tersebut bersifat global. Jika variabel didefinisikan di dalam fungsi, maka variabel bersifat lokal dan cakupannya hanya pada fungsi tersebut beserta turunannya.
// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
  // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
  const b = 'b'; 

  function child() {
  // local variable, dapat diakses hanya pada fungsi child().
    const c = 'c';
  }
}

function multiplys(num) {
  // const total = num * num;
  total = num * num;
  return total;
}

let total = 9;
let number  = multiplys(20);

console.log(total)
// console.log(number)

console.log("============== Closure ==============")
// Sebelumnya kita telah tahu bahwa fungsi dapat didefinisikan dalam lingkup global atau di dalam fungsi lain. Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan closure. Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.
function init() {
  const name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
  function greet() {      // Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
  }

  greet();
}

init();

// menggunakan return
function inits() {
  const name = 'Float Wan';

  function greet() {
    console.log(`Halo, ${name}`);
  }

  return greet;
}
const myFunction = inits();
myFunction();

// Kode di atas akan menghasilkan output yang sama. Perbedaannya adalah fungsi greet() dikembalikan (return) dari outer function-nya sebelum dieksekusi. Karena variabel name berada dalam scope init(), maka umumnya variabel tersebut akan hilang atau dihapus ketika fungsinya selesai dijalankan. Namun, pada kasus di atas fungsi greet() yang diakses melalui fungsi MyFunction() masih memiliki referensi atau akses ke variabel name. Variabel pada mekanisme di atas telah tertutup (close covered), yang berarti variabel tersebut berada di dalam closure.

// JavaScript tidak memiliki cara untuk mendeklarasikan suatu fungsi atau variabel menjadi private seperti bahasa Java. Sehingga sebuah fungsi atau variabel bisa diakses dari mana pun. Kenapa kita membutuhkan private method? Salah satunya adalah untuk membatasi akses ke fungsi atau variabel.
let counter = 0;
const adds = () => {
  return ++counter;
}

console.log(adds());
console.log(adds());
console.log(adds());
counter = 23;
console.log(adds());
console.log(adds());

// Nilai counter akan bertambah ketika kita memanggil fungsi add(). Namun, kita juga bisa mengubah nilai counter secara langsung dengan assignment operator. Pada contoh program yang lebih kompleks, sebaiknya hal ini dihindari karena perubahan langsung pada nilai counter bisa saja memunculkan bug.

// Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private. Seperti inilah contoh program counter yang dibuat dengan closure
const add = () => {
  let counters = 0;
    return () => {
      return ++counters;
  };
}

const addCounter = add();

console.log(addCounter());
// counters = 12 // akan error karena variabel private
console.log(addCounter());
console.log(addCounter());

function minMax(arrayOfNumbers) {
  let currentMin = arrayOfNumbers[0];
  let currentMax = arrayOfNumbers[0];
  for (let value of arrayOfNumbers) {
      if (value < currentMin) {
          currentMin = value;
      } else if (value > currentMax) {
          currentMax = value;
      }
  }

  console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);