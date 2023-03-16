
console.log("============== Properti dan Method ==============")
// Contohnya, jika Anda membuat class Car, properti adalah informasi yang sekiranya terdapat pada sebuah mobil seperti brand, color, maxSpeed, dan chasissNumber. Contoh lain, jika Anda membuat class Mail, secara umum propertinya adalah sender, receiver, subject, dan body.
console.log("============== Properti ==============")
class Cars {
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
}
 
class Mails {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }
}

// Nilai dari properti biasanya diambil dari dari argumen constructor agar nilainya dapat bervariasi setiap kali membuat instance.

class Car {
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
 }
  
 const car1 = new Car('BMW', 'red', 200, 'b-1');
 const car2 = new Car('Audi', 'blue', 220, 'a-1');
 const car3 = new Car('BMW', 'black', 250, 'b-2');
 
 console.log(car1);
 console.log(car2);
 console.log(car3);

//  Namun, adakalanya nilai properti juga bisa didefinisikan di dalam class itu sendiri. Contohnya, kita tidak ingin pengguna menentukan nomor rangka mobil secara mandiri, maka kita bisa memberi nilai properti chassisNumber langsung di dalam fungsi constructor.
class Carx {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    // Set a random chassis number
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}
 
const carx1 = new Carx('BMW', 'red', 200);
const carx2 = new Carx('Audi', 'blue', 220);
const carx3 = new Carx('BMW', 'black', 250);
 
console.log(carx1);
console.log(carx2);
console.log(carx3);

console.log("============== Properti Getter & Setter ==============")
// Secara standar, properti di dalam sebuah instance class bersifat mutable atau dapat diubah nilainya. Meskipun kita sudah menetapkan nilai chassisNumber oleh sistem, nyatanya nilai tersebut dapat diubah dengan mudah ketika objek mobil telah dibuat
class Carv {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
 
const carv = new Carv('BMW', 'red', 200);
carv.chassisNumber = 'BMW-1';
 
console.log(carv);
// Lalu, bagaimana cara memproteksi agar nilai dari properti chassisNumber tidak dapat diubah? Nah, ketika kita berhadapan dengan kasus seperti ini, kita bisa memanfaatkan properti getter dan setter.
// Sebelum memecahkan masalah di atas, ketahuilah bahwa ada dua tipe properti, yaitu data property dan accessor property.
// Data property merupakan properti yang sejauh ini kita lihat, properti yang langsung menampung sebuah nilai di dalam sebuah objek.
// Sedangkan accessor property merupakan properti yang dikontrol oleh sebuah getter dan setter. Nilai yang didapatkan dari properti tersebut dikontrol oleh method get dan cara menetapkan nilai tersebut dikontrol oleh method set.
// Berikut contoh dari accessor property.
class User {
  constructor(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;
 }
 
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
 
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
 
const user = new User('John', 'Doe');
console.log(user);
console.log(user.fullName);
 
user.fullName = 'Fulan Fulanah';
console.log(user);
// Catatan penting yang perlu Anda ketahui mengenai getter setter adalah:

// method getter harus mengembalikan sebuah nilai dan nilai tersebut akan menjadi nilai properti;
// method setter harus menerima satu argumen yang nilainya diambil dari operand ke dua ketika melakukan assignment operator.

// kembali ke masalah perubahan nilai properti chassisNumber. Bagaimana getter dan setter dapat memproteksi perubahan properti chassisNumber? Di JavaScript, pola yang sering diterapkan untuk memecahkan masalah ini adalah dengan memanfaatkan getter setter sebagai “wrapper” dari properti aslinya. Tujuannya agar getter setter bisa mengontrol akses seperti mendapatkan dan menetapkan nilai properti.

// Untuk menerapkan pola ini, pertama kita perlu mengubah nama dari properti chassisNumber, misalnya dengan menambahkan tanda garis bawah di depannya menjadi _chassisNumber
class Carq {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }
 
  get chassisNumber() {
    return this._chassisNumber;
  }
 
  set chassisNumber(chassisNumber) { 
    // Kita tidak ingin nilai chassisNumber dapat diubah sehingga untuk setter properti chassisNumber, cetak saja teks peringatan menggunakan console.log()
    console.log('you are not allowed to change the chassis number');
  }
}

const carq = new Carq('BMW', 'red', 200);
console.log(carq.chassisNumber);
carq.chassisNumber = 'BMW-1';
console.log(carq.chassisNumber);

console.log("============== Method ==============")
// Method adalah sebuah fungsi yang berada di dalam sebuah class dan dapat diakses melalui instance Class tersebut. Method biasanya mengindikasikan hal yang dapat dilakukan oleh sebuah class. Bila kita berbicara tentang class Car, method yang ada bisa drive(), reverse(), dan turn(). Jika pada class Mail, method bisa berupa send(), sendLater(), saveAsDraft().
class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }
 
  // Methods
  send() {
    console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
  }
 
  sendLater(delay) {
    console.log(`Sending after ${delay} ms`);
 
    setTimeout(() => {
      this.send();
    }, delay);
  }
 
  saveAsDraft() {
    console.log('Saving mail as draft');
  }
}

// Sama seperti fungsi JavaScript, method bisa menerima sebuah argumen. Contohnya pada method sendLater() di class Car dan sendLater di class Mail, kami memanfaatkan argumen direction dan delay untuk menetapkan arah dan waktu delay dalam menjalankan method-nya.
// Selain argumen, method juga dapat memiliki akses ke nilai properti atau method lainnya melalui keyword this.
// Method di dalam class hanya bisa dijalankan melalui instance dari class tersebut

const email = new Mail('irwan', 'float', 'test mail', 2000);
// email.send();
email.sendLater(2000);
email.saveAsDraft();

// Method memang kental dengan “kemampuan” yang bisa dilakukan oleh sebuah class, tetapi praktik nyatanya membuat method tidak hanya untuk itu. Method juga biasa dibuat ketika kita perlu mengekstraksi sebuah kode agar lebih mudah untuk dibaca dan method tersebut hanya digunakan untuk kebutuhan internal saja.

// Contoh, pada class Car, kita menetapkan nilai _chassisNumber dengan nilai random yang ditulis di dalam constructor. Hal itu membuat kode di dalam constructor menjadi sulit dibaca karena dicampuri dengan logika dalam menghasilkan angka acak.

// Agar kode di dalam constructor lebih rapi, kita bisa membuat method yang digunakan internal yang menampung kode random tersebut. Biasanya method yang hanya digunakan secara internal disebut dengan private dan namanya diawali dengan tanda underscore.
class Carr {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = this._generateChassisNumber();
  }
 
  get chassisNumber() {
    return this._chassisNumber;
  }
 
  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }
 
  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
 
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
 
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
 
  _generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

const car5 = new Carq('Esemka', 'silver', 2000);
let test = car5.chassisNumber;
console.log(car5.chassisNumber)
console.log(test)

console.log("============== Member Visibility ==============")
// Member visibility bisa disebut juga sebagai hak akses pada sebuah properti dan method di dalam class. Secara default, seluruh properti dan method yang dibuat di dalam class bersifat public, alias dapat diakses di luar dari kode class via instance. Selain public, kita juga bisa membuat properti dan method bersifat private, terutama ketika kita ingin properti atau method tersebut hanya digunakan dalam cakupan kode di dalam class saja (penggunaan internal).

// Di pembahasan sebelumnya, kita sudah mengenal bahwa pemberian tanda underscore pada properti atau method bisa dijadikan sebagai penanda bahwa ia dianggap private. Masalahnya adalah cara tersebut tidak benar-benar memproteksi hak aksesnya. Contoh, pada class Car, kita sudah membuat properti _chassisNumber dan method _generateChassisNumber() dengan tanda underscore. Namun, kedua member tersebut tetap saja masih bisa di akses via instance, bahkan kita bisa mengubah nilainya.Member visibility bisa disebut juga sebagai hak akses pada sebuah properti dan method di dalam class. Secara default, seluruh properti dan method yang dibuat di dalam class bersifat public, alias dapat diakses di luar dari kode class via instance. Selain public, kita juga bisa membuat properti dan method bersifat private, terutama ketika kita ingin properti atau method tersebut hanya digunakan dalam cakupan kode di dalam class saja (penggunaan internal).

// Di pembahasan sebelumnya, kita sudah mengenal bahwa pemberian tanda underscore pada properti atau method bisa dijadikan sebagai penanda bahwa ia dianggap private. Masalahnya adalah cara tersebut tidak benar-benar memproteksi hak aksesnya. Contoh, pada class Car, kita sudah membuat properti _chassisNumber dan method _generateChassisNumber() dengan tanda underscore. Namun, kedua member tersebut tetap saja masih bisa di akses via instance, bahkan kita bisa mengubah nilainya.
class Carp {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = this._generateChassisNumber();
  }
 
  get chassisNumber() {
    return this._chassisNumber;
  }
 
  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }
 
  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
 
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
 
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
 
  _generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
 
const car = new Carp('Bemo', 'red', 200);
 
console.log(car._chassisNumber);
car._chassisNumber = 'Esemka-1';
console.log(car._chassisNumber);
console.log(car._generateChassisNumber());

// Untuk menyelesaikan masalah ini, JavaScript versi ES2022 secara resmi mengenalkan cara dalam menetapkan hak akses private pada properti dan method objek, yakni dengan menambahkan tanda # di awal penamaan properti atau method.
class Carrx {
  #chassisNumber = null;
 
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber();
 }
 
  get chassisNumber() {
    return this.#chassisNumber;
  }
 
  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }
 
  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
 
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
 
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
 
  #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
const car01 = new Carrx('Bima Sakti', 'Blue', 2000);
// Dengan begitu, properti dan method yang sifatnya private tidak dapat diakses di luar dari cakupan kode class, misalnya via instance.
// car01.#generateChassisNumber(); // error
// console.log(car01.#chassisNumber); // error