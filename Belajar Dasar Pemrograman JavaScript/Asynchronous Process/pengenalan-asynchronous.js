const judul = (isi) => {
    console.log(`================= ${isi} ==================`)
}
judul("Pengantar Asynchronous Process");
// Dalam pemrograman, tidak seluruh proses dapat berjalan dengan sangat cepat. Ada beberapa proses yang membutuhkan waktu tunggu, seperti baca tulis berkas, mendapatkan data dari internet, dan proses lainnya. Agar tidak menghalangi proses lainnya, kita harus mengetahui cara menjalankan proses yang lambat secara asynchronous.

// Dalam modul ini, kita akan membahas detail mengenai proses asynchronous di JavaScript. Berikut adalah beberapa poin yang akan dibahas pada modul asynchronous process.

// Pengenalan Proses Asynchronous di JavaScript.
// Penggunaan Fungsi setTimeout().
// Menangani Proses Asynchronous dengan Pola Callback.
// Menangani Proses Asynchronous dengan Promise.
// Memahami Penggunaan Static Method dari Objek Promise.
// Menangani Proses Asynchronous dengan Sintaks async dan await.

// Pengenalan Asynchronous
// Kode pada sebuah program biasanya dijalankan secara berurutan dan saling menunggu hingga prosesnya selesai. Contoh, pada baris pertama kita memanggil fungsi X dan baris kedua kita memanggil fungsi Y, maka fungsi Y hanya akan dijalankan setelah seluruh proses yang berhubungan dengan fungsi X selesai, begitu juga dengan baris kode selanjutnya. Proses yang dijalankan berdasarkan sebuah urutan dan saling menunggu disebut dengan proses synchronous.

// Dalam asynchronous process, kita bisa menjalankan proses yang berada di baris kedua tanpa harus menunggu kode pada baris pertama selesai dieksekusi. Arti lainnya, kita bisa melakukan lebih dari satu proses sekaligus dalam waktu yang bersamaan. Mengapa hal ini penting? Simak contoh berikut.

// Kode di bawah ini merupakan fungsi untuk menghasilkan bilangan prima sebanyak input dari pengguna. Jika Anda menginput dengan nilai yang besar, contohnya 1 juta, Anda bisa merasakan sedikit delay hingga akhirnya pesan “proses membuat 1000000 bilangan prima selesai”.
// import {isPrime, random} from ".utils";

// export function generatesPrimes(maximum){
//     const MAX_PRIME = 1000000;

//     const primes = [];

//     while (primes.length < maximum){
//         const candidate = random(MAX_PRIME);

//         if(isPrime(candidate)){
//             primes.push(candidate)
//         }
//     }
//     return primes;
// }

module.exports = {judul}; 
// export default judul;