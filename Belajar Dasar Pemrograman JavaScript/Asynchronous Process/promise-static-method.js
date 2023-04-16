const { resolve } = require("path");
const {judul} = require("./pengenalan-asynchronous");

judul("Promise Static Method");

// Dalam JavaScript, Promise mePada materi sebelumnya, Anda sudah mengenal dasar-dasar penggunaan Promise.rupakan salah satu fitur yang penting, terutama ketika bekerja dengan operasi asynchronous. 

// Promise memiliki beberapa static method yang dapat digunakan untuk mempermudah penggunaan dalam berbagai kasus. Pada materi ini, kami akan membahas empat static method dari class Promise yang umum digunakan, yaitu Promise.all, Promise.race, Promise.allSettled, dan Promise.any.

judul("promise.all()");
// Promise.all() digunakan untuk mengeksekusi banyak Promise secara paralel. Method ini menerima sebuah array yang berisi beberapa Promise sebagai argumen. Fungsi ini akan mengembalikan sebuah Promise baru dan membawa nilai yang di-resolve dalam masing-masing Promise yang diletakkan pada array argumen.

// Berikut adalah contoh penggunaan Promise.all().

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 10000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 20000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 30000));

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));
// // [1, 2, 3] setelah 3 detik

// Pada contoh di atas, kita membuat tiga Promise yang masing-masing akan mengembalikan setelah waktu berbeda-beda. Kemudian, kita menggunakan Promise.all() untuk mengeksekusi ketiga Promise tersebut secara paralel. Ketika semua selesai dieksekusi, Promise.all() akan mengembalikan Promise baru. Ia membawa nilai array berisi nilai-nilai yang dikembalikan oleh ketiga Promise tersebut.

// Jika terdapat rejection pada salah satu Promise, Promise.all() akan langsung menghasilkan rejected tanpa mengembalikan nilai Promise lain yang statusnya fulfilled. Berikut contohnya.
const promise4 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 10000));
const promise5 = new Promise((resolve) => setTimeout(() => resolve(2), 20000));
const promise6 = new Promise((resolve) => setTimeout(() => resolve(3), 30000));

Promise.all([promise4, promise5, promise6])
    .then((values) => console.log(values))
    .catch((error) => console.log(error.message)); // ups


judul("Promise.race");
// Promise.race() digunakan untuk mengeksekusi beberapa Promise secara paralel seperti Promise.all(). Namun, ia hanya mengembalikan nilai Promise yang paling cepat menyelesaikan eksekusinya.

// Berikut adalah contoh penggunaan dari Promise.race().
Promise.race([promise1, promise2, promise3])
    .then((value) => console.log(value));

// Pada contoh kode di atas, kita membuat tiga Promise yang masing-masing membutuhkan waktu selesai berbeda-beda. Kemudian, kita menggunakan Promise.race() untuk mengeksekusi ketiganya secara paralel. Ingat! Promise.race() hanya mengembalikan nilai Promise yang prosesnya paling cepat. Jadi, ia hanya mengembalikan nilai dari promise1.

// Lalu, bagaimana jika salah satu Promise ada yang rejected? Jika proses rejection merupakan proses yang paling cepat, ia akan mengembalikan rejection tersebut. Jika rejection tidak kalah cepat dengan proses lain yang nilainya fulfilled, ia akan tetap mengembalikan nilai resolved tercepat.

Promise.race([promise4, promise5, promise6])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)); // Ups

// promise.allSettled()  
judul("promise.allSettled()");
// Promise.allSettled() bekerja mirip seperti Promise.all(). Namun, Promise.allSettled() mengembalikan seluruh hasil dari Promise yang dieksekusi dalam bentuk array of object dengan format berikut
// Dari struktur objek yang dihasilkan, Anda bisa melihat bahwa Promise.allSettled() akan mengembalikan seluruh nilai Promise yang dijalankan, baik yang statusnya fulfilled ataupun rejected.

// Berikut contoh penggunaan Promise.allSettled().
Promise.allSettled([promise1, promise2, promise3])
    .then((results) => console.log(results));

// Pada contoh di atas, kita membuat tiga Promise yang masing-masing membutuhkan waktu eksekusi yang berbeda. Kita menggunakan Promise.allSettled() untuk menjalankan seluruh Promise secara paralel. Pada output console, Anda bisa melihat bahwa Promise.allSettled() mengembalikan array of object seperti yang sudah dijelaskan sebelumnya.

judul("Promise.any")
// Method Promise terakhir yang akan kami bahas adalah Promise.any(). Cara kerja method ini mirip seperti Promise.race(), tetapi hanya mengembalikan nilai tercepat yang berstatus fulfilled. Jika seluruh Promise berstatus rejected, method ini akan mengembalikannya dengan pesan “All Promises were rejected”.
// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
 .then((value) => console.log(value)) // 1
 .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
 .then((value) => console.log(value))
 .catch((error) => console.log(error.message)); // All Promises were rejectedS

//  Static method Promise, seperti Promise.all(), Promise.race(), Promise.allSettled(), dan Promise.any() dapat sangat membantu ketika bekerja dengan operasi asynchronous menggunakan Promise. Dengan menggunakan method-method tersebut, kita dapat mengeksekusi banyak Promise secara paralel dan mengelola hasilnya dengan lebih efisien.z