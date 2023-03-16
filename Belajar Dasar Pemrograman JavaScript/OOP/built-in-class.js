
console.log("============== Object-Oriented Programming ==============")
// Object-Oriented Programming (OOP) adalah salah satu paradigma dalam pemrograman yang berfokus pada pembuatan sebuah objek dan interaksi dengan objek-objek tersebut. Di OOP, objek merupakan sebuah entitas yang terdiri dari dua hal, yakni properties dan methods.

// Properti merupakan nilai di dalam objek yang menyimpan informasi tentang objek tersebut.
// Method merupakan fungsi yang menggambarkan aksi yang dapat dilakukan oleh objek tersebut.
// Paradigma OOP kerap digambarkan dengan kehidupan dunia nyata. Objek di dalam OOP, bisa kita anggap seperti objek yang ada di dunia nyata. Kita ambil contoh, mobil. Dalam OOP, sebuah mobil dapat dilihat sebagai objek yang memiliki beberapa properti seperti merek, warna, kecepatan maksimal, dan nomor rangka. Objek tersebut memiliki kemampuan atau method seperti maju, mundur, dan belok.
// Lalu, seperti apa bentuk objek mobil dalam bentuk JavaScript? Sama seperti yang sudah Anda ketahui di modul Struktur Data, objek mobil dibuat dengan menggunakan tanda kurung kurawal dan untuk method-nya, Anda cukup buat properti yang merupakan sebuah fungsi, contohnya seperti ini.

const car = {
    // properties
    brand: 'Ford',
    color: 'red',
    maxSpeed: 200,
    chassisNumber: 'f-1',
    // methods
    drive: () => {
      console.log('driving');
    },
    reverse: () => {
      console.log('reversing');
    },
    turn: () => {
      console.log('turning');
    }
  }
   
console.log(car.brand); // Ford
console.log(car.color); // red
console.log(car.maxSpeed); // 200
console.log(car.chassisNumber); // f-1
car.drive(); // driving
car.reverse(); // reversing
car.turn(); // turning

// Di JavaScript untuk membuat sebuah objek terlihat mudah, bukan? Namun, masalah yang dipecahkan oleh paradigma OOP tidak hanya sebatas membuat objek sederhana saja. Seiring berkembangnya aplikasi, pembuatan objek akan semakin banyak dan saling berinteraksi satu dengan yang lainnya. Sehingga, kita harus mengetahui cara efektif mengelola objek termasuk cara membuatnya.

// Mari kita angkat sebuah masalah baru dari contoh kode di atas. Bagaimana jika Anda ingin membuat objek dua mobil baru dengan nilai yang berbeda? Haruskah Anda mendefinisikan properti dan method yang sama secara berulang seperti contoh kode di bawah ini?

const cars = {
    brand: 'Ford',
    color: 'red',
    maxSpeed: 200,
    chassisNumber: 'f-1',
    drive: () => {
      console.log('driving');
    },
    reverse: () => {
      console.log('reversing');
    },
    turn: () => {
      console.log('turning');
    }
  }
   
  const myCar = {
    brand: 'Tesla',
    color: 'black',
    maxSpeed: 250,
    chassisNumber: 't-1',
    drive: () => {
      console.log('driving');
    },
    reverse: () => {
      console.log('reversing');
    },
    turn: () => {
      console.log('turning');
    }
  }
   
  const yourCar = {
    brand: 'BMW',
    color: 'white',
    maxSpeed: 300,
    chassisNumber: 'b-1',
    drive: () => {
      console.log('driving');
    },
    reverse: () => {
      console.log('reversing');
    },
    turn: () => {
      console.log('turning');
    }
  }

  console.log("============== Constructor Function ==============")
// Kebanyakan paradigma OOP diterapkan pada class-based programming languages, seperti Java, C++, C#, dan bahasa pemrograman berbasis class lainnya. JavaScript sendiri bukanlah bahasa pemrograman berbasis class karena sebelum hadirnya sintaks ES6, JavaScript tidak mengenal class. Namun, walaupun demikian, konsep-konsep yang ada di OOP masih bisa diterapkan di JavaScript.

// JavaScript bukanlah class-based language, melainkan prototype-based language. Menariknya, konsep-konsep OOP yang memanfaatkan class seperti pewarisan dapat dilakukan dengan memanfaatkan prototype. Alih-alih menggunakan class, prototype-lah yang diadaptasi JavaScript.
// cara membuat object blueprint di JavaScript? Fitrahnya, object blueprint dapat dibuat dengan menggunakan constructor function yang tampak seperti ini

function Carss(brand, color, maxSpeed, chassisNumber){
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}

Carss.prototype.drive = function() {
  console.log(`${this.brand} ${this.color} is driving`);
}
Carss.prototype.reverse = function() {
  console.log(`${this.brand} ${this.color} is reversing`);
}
Carss.prototype.turn = function() {
  console.log(`${this.brand} ${this.color} is turning`);
}

// Membuat objek mobil dengan constructor function Car
const cars1 = new Carss('Toyota', 'Silver', 200, 'to-1');
const cars2 = new Carss('Honda', 'Black', 180, 'ho-1');
const cars3 = new Carss('Suzuki', 'Red', 220, 'su-1');

console.log(cars1);
console.log(cars2);
console.log(cars3);
 
cars1.drive();
cars2.drive();
cars3.drive();

// Mungkin saat ini Anda bertanya-tanya, bagaimana bisa membuat sebuah objek dengan sebuah fungsi? Itulah salah satu kemampuan fungsi di JavaScript. Fungsi di atas bukanlah fungsi biasa, melainkan constructor function. Berikut beberapa perbedaan yang harus Anda perhatikan.

// Penamaan fungsi yang merupakan constructor function, secara konvensi harus ditulis dengan huruf kapital. Itulah alasan kami memberi nama fungsi tersebut Car, bukan car. Hal ini penting untuk Anda ikuti guna membedakan fungsi biasa dengan constructor function karena penggunaannya berbeda.
// Constructor function dapat memanfaatkan keywordthis yang bernilai objek (instance) dirinya sendiri. Keywordthis dapat dimanfaatkan untuk mengakses nilai properti atau method dari objek tersebut. Contoh, kami menggunakan keyword this untuk menetapkan nilai properti brand dari argumen fungsi. Selain itu, di dalam method drive, kami juga menggunakan this untuk mendapatkan nilai properti brand dan color.
// Constructor function memiliki internal property bernama prototype. Properti ini digunakan untuk mendefinisikan method-method yang akan dimiliki oleh objek yang dibuat. Alasan method perlu didefinisikan di dalam prototype agar mudah untuk diwarisi ketika melakukan pewarisan.
// Terakhir, agar fungsi mengembalikan sebuah objek, Anda harus memanggilnya dengan menambahkan keyword new. Contoh, pada kode di atas, perhatikan cara kami memanggil fungsi Car untuk membuat objek car1, car2, dan car3.
// Perlu Anda ingat bahwa constructor function hanya dapat dibuat dengan reguler function. Anda tidak dapat membuat constructor function dengan arrow function. Arrow function tidak dapat dipanggil dengan keyword new.

console.log("============== Sintaks Class di ES6 ==============")
// Sintaks JavaScript modern (ES6) menawarkan cara membuat constructor function dengan menggunakan keyword class. Hal ini membuat penerapan OOP di JavaScript mirip seperti bahasa pemrograman berbasis class. Kita bisa menulis constructor function Car dengan gaya class seperti ini.
class Mobil {
  constructor(brand, color, maxSpeed, chassisNumber){
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }

drive() {
  console.log(`${this.brand} ${this.color} is driving`);
}

reverse() {
  console.log(`${this.brand} ${this.color} is reversing`);
}

turn() {
  console.log(`${this.brand} ${this.color} is turning`);
}
}

// Membuat objek mobil dengan constructor function Car
const mobil1 = new Mobil('Toyota', 'Silver', 200, 'to-1');
const mobil2 = new Mobil('Honda', 'Black', 180, 'ho-1');
const mobil3 = new Mobil('Suzuki', 'Red', 220, 'su-1');
 
console.log(mobil1);
console.log(mobil2);
console.log(mobil3);
 
mobil1.drive();
mobil2.drive();
mobil3.drive();

// Jika Anda memiliki pengalaman di bahasa pemrograman C++, Java, atau C#, pembuatan class seperti di atas tentu lebih mudah dipahami, bukan? Memang inilah tujuan diciptakan sintaks class di JavaScript. Ia hadir untuk mempermudah penerapan OOP bagi developer yang memiliki latar belakang class-based language.

// Walaupun di JavaScript sudah hadir sintaks class, hal itu tidak membuat JavaScript menjadi class-based language. Faktanya, sintaks class di JavaScript hanyalah syntactic sugar atau cara alternatif dalam mendefinisikan constructor function. Untuk membuktikan hal tersebut, kita bisa mengecek tipe class melalui operator typeof.

class Mobils {};
console.log("class pada javascript adalah :", typeof Mobils);