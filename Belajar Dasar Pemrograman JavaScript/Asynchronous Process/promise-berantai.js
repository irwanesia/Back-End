const { rejects } = require('assert');
const {judul} = require('./pengenalan-asynchronous');

judul("Promise Berantai");
// Masih ingat tentang masalah readability code yang disebabkan callback hell? Masalah tersebut kerap terjadi ketika proses agregasi data dari berbagai proses asynchronous yang saling bergantung antara satu dan yang lainnya. Dengan hadirnya Promise, kita bisa terbebas dari callback hell.

// Promise didesain untuk dapat dijalankan secara berantai dengan Promise lain. Contohnya, jika Anda memiliki dua fungsi Promise, Anda bisa menjalankan kedua fungsi tersebut secara berurut, alias berantai. Agar penjelasannya lebih seru, mari kita bayangkan dengan kehidupan sehari-hari.

// Dalam kehidupan sehari-hari, kita mungkin pernah melakukan chaining Promise tanpa disadari. Misalkan ketika ingin menonton film di bioskop, kita perlu melakukan beberapa tahap sebelum akhirnya bisa menikmati film tersebut. Misalnya, tahap pertama kita perlu menarik uang untuk nantinya membeli tiket bioskop. Tahap ini bisa direpresentasikan menjadi sebuah fungsi bernama withdrawMoney(). Fungsi tersebut akan mengembalikan sejumlah uang jika saldonya mencukupi, dalam arti lain Promise-nya menjadi fulfilled (resolve). Selain itu, fungsi akan menampilkan pesan error jika saldonya kurang, yang artinya rejected (reject). Jika Promise-nya fulfilled, tahap selanjutnya akan dijalankan.

// Tahap kedua adalah membeli tiket bioskop yang dapat direpresentasikan dengan fungsi bernama buyCinemaTicket(). Fungsi tersebut menerima argumen uang yang sudah kita tarik. Jika uang yang diberikan pada argumen kurang dari harga tiketnya, Promise akan di-reject dengan pesan “not enough money to buy ticket”. Jika nilai argumen cukup, Promise akan mengembalikan nilai “tiket-1”.

// Tahap ketiga adalah masuk ke bioskop, aktivitas ini bisa digambarkan dengan fungsi goInsideCinema() yang menerima satu argumen berupa tiket. Jika tidak ada tiket, Promise akan di-reject dengan pesan “no ticket”. Jika ada, Promise akan di-resolve dengan pesan “enjoy the movie”.

// Seluruh tahap yang kami jelaskan adalah Promise dan dapat dijalankan secara berantai seperti ini.

function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(amount > 100) {
                reject(new Error('Not enaough money to withdraw'));
            }
        }, 1000);
    },);
}

function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (money < 10) {
          reject(new Error('not enough money to buy ticket'));
        }
  
        resolve('ticket-1');
      }, 1000);
    });
}
  
function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!ticket) {
          reject(new Error('no ticket'));
        }
  
        resolve('enjoy the movie');
      }, 1000);
    });
}

// function watchMovie(){
//     withDrawMoney(10)
//         .then((money) => {
//             return buyCinemaTicket(money);
//         })
//         .then((ticket) => {
//             return goInsideCinema(ticket);
//         })
//         .then((result) => {
//             console.llog(result);
//         })
//         .then((error) => {
//             console.log(error.message);
//         });
// }


// Ketika kita memanggil fungsi watchMovie(), Promise chaining akan dijalankan. Dengan teknik tersebut, kita bisa menentukan urutan pemanggilan tiap-tiap fungsi Promise berdasarkan tahapan yang harus dilakukan. 

// Pada kode di atas, kita bisa melihat bahwa tahapan pertama adalah memanggil fungsi withDrawMoney(), kemudian buyCinemaTicket(), dan terakhir goInsideCinema(). Setelah tahapan tersebut selesai, nilai akhir dari Promise akan ditampilkan dalam console dengan fungsi console.log(). Jika ada Promise yang di-reject pada salah satu tahapan, ia akan langsung ditangkap oleh catch dan menampilkan error ke console dengan fungsi console.log(). 

// Dalam chaining Promise seperti yang ditunjukkan oleh kode di atas, penting untuk diingat bahwa setiap fungsi .then() harus mengembalikan Promise baru untuk melanjutkan proses chaining karena nilai yang dikembalikan tersebut akan dibawa ke fungsi .then() selanjutnya.

// Ada tips dalam melakukan Promise chaining di atas. Anda bisa membuat kode tampak lebih bersih dan singkat dengan memanfaatkan arrow function implisit return. Namun, tips ini hanya dapat digunakan jika arrow function hanya memiliki satu baris kode saja.

function watchMovie() {
    withDrawMoney(10)
      .then((money) => buyCinemaTicket(money))
      .then((ticket) => goInsideCinema(ticket))
      .then((result) => console.log(result))
      .catch((error) => console.log(error.message));
}

watchMovie();