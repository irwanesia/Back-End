const {judul} = require('./pengenalan-asynchronous');

judul("Callback Hell");

// Seiring kompleksnya pengembangan aplikasi, kita akan semakin banyak menggunakan fungsi yang berjalan secara asynchronous. Tidak jarang kita perlu mengagregasikan banyak data dari berbagai proses asynchronous. Masalah akan timbul ketika sebuah proses asynchronous perlu dijalankan setelah tahapan serupa lainnya selesai.

// Sebagai developer pemula, kita sangat terbiasa dengan operasi yang saling menunggu pada proses synchronous. Jika Anda coba baca kode di bawah ini, tentu akan mudah memahami alurnya.

function getUserWeather(userId){
    try {
        const user = getUser(userId);
        const getUserWeather = getWeather(user.location);
        return { ...user, ...weather};
    }catch(error){
        console.log(error.message);
        return null;
    }
}

const userWeather = getUserWeather(1);
console.log(userWeather)

// Kode di atas menunjukkan sebuah fungsi getUserWeather() yang bertujuan untuk mendapatkan cuaca berdasarkan userId. Anda juga bisa melihat bahwa data cuaca didapatkan dengan cara mengagregasi dua fungsi, yakni getUser() dan getWeather(). Jika kedua fungsi tersebut berjalan secara sinkron, tentu proses agregasi akan mudah karena proses berjalan secara terurut dan saling menunggu.

// Sekarang bayangkan jika fungsi getUser() dan getWeather() berjalan secara asinkron dan memanfaatkan pola callback. Untuk menghasilkan output yang sama, kita perlu ubah kode menjadi seperti ini.