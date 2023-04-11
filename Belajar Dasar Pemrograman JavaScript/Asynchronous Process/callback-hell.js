const {judul} = require('./pengenalan-asynchronous');

judul("Callback Hell");

// Seiring kompleksnya pengembangan aplikasi, kita akan semakin banyak menggunakan fungsi yang berjalan secara asynchronous. Tidak jarang kita perlu mengagregasikan banyak data dari berbagai proses asynchronous. Masalah akan timbul ketika sebuah proses asynchronous perlu dijalankan setelah tahapan serupa lainnya selesai.

// Sebagai developer pemula, kita sangat terbiasa dengan operasi yang saling menunggu pada proses synchronous. Jika Anda coba baca kode di bawah ini, tentu akan mudah memahami alurnya.

function getUserWeathers(userId){
    try {
        const users = getUsers(userId);
        const getUserWeathers = getWeathers(user.location);
        return { ...users, ...weathers};
    }catch(error){
        console.log(error.message);
        return null;
    }
}

const userWeathers = getUserWeathers(1);
console.log(userWeathers)

// Kode di atas menunjukkan sebuah fungsi getUserWeather() yang bertujuan untuk mendapatkan cuaca berdasarkan userId. Anda juga bisa melihat bahwa data cuaca didapatkan dengan cara mengagregasi dua fungsi, yakni getUser() dan getWeather(). Jika kedua fungsi tersebut berjalan secara sinkron, tentu proses agregasi akan mudah karena proses berjalan secara terurut dan saling menunggu.

// Sekarang bayangkan jika fungsi getUser() dan getWeather() berjalan secara asinkron dan memanfaatkan pola callback. Untuk menghasilkan output yang sama, kita perlu ubah kode menjadi seperti ini.

const { getUser, getWeather } = require('./utils');

function getUserWeather(userId, callback) {
  getUser(userId, (error, user) => {
    if (error) {
      callback(error, null);
    }

    getWeather(user.location, (error, weather) => {
      if (error) {
        callback(error, null);
      }

      callback(null, { ...user, ...weather });
    });
  });
}

getUserWeather(1, (error, userWeather) => {
  if (error) {
    console.log(error);
  }

  console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
});