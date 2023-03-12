// # object

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

let a = 1;
let b = 2;
// Dengan array destructuring assignment, kita bisa menukar nilai variabel dengan mudah tanpa membuat variabel tambahan.
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);