const {judul} = require('./pengenalan-asynchronous');

judul("Asynchronous Handling dengan Callback");
// Dalam materi sebelumnya, kita sudah mengetahui bahwa ada kalanya operasi di JavaScript akan berjalan secara asynchronous. Proses tersebut membuat JavaScript dapat mengeksekusi proses selanjutnya tanpa menunggu tahapan sebelumnya selesai. Perilaku ini membuat penanganan proses asynchronous berbeda dengan synchronous. Sebagai developer, kita harus tahu cara menangani proses asynchronous agar kelak kita bisa mendapatkan nilai yang dihasilkan dari proses tersebut.

// Saat ini ada dua cara atau pola yang digunakan JavaScript dalam menangani proses asynchronous. Pola pertama yang akan kita bahas adalah callback.


judul("Pola Callback");
// Pola callback merupakan salah satu cara menangani proses asynchronous. Tidak hanya di JavaScript, pola ini juga digunakan pada bahasa pemrograman lainnya. Callback merupakan sebuah fungsi yang disisipkan pada argumen fungsi asynchronous dan akan dipanggil ketika proses dinyatakan selesai. Fungsi callback akan membawa nilai-nilai yang dihasilkan dari proses asynchronous sehingga kita bisa memanfaatkan nilai tersebut.

function getUsers(callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
      callback(users);
    }, 3000);
}

// Anggaplah getUsers() merupakan fungsi yang digunakan untuk mendapatkan data nama pengguna yang diambil dari internet. Kami menggunakan setTimeout() untuk menyimulasikan bahwa fungsi berjalan secara asynchronous. Anda juga bisa melihat bahwa fungsi tersebut memanggil argumen callback ketika prosesnya selesai dan membawa data users.

// Berikut adalah cara memakai fungsi tersebut untuk mendapatkan nilai users.
getUsers((users) => {
    console.log(users);
});
// Ketika menggunakan fungsi getUsers() kita perlu memanggil dengan memberikan argumen fungsi. Fungsi ini akan dipanggil ketika proses asynchronous selesai sekaligus membawa data users yang dihasilkan. Di dalam cakupan fungsi inilah kita bisa mengonsumsi nilai users yang dihasilkan dari proses asynchronous. Inilah yang dimaksud dengan pola callback.

// Catatan: Callback merupakan salah satu implementasi dari konsep High-Order Function yang sudah kita bahas pada modul Functional Programming.

// Agar kode lebih mudah dibaca, Anda bisa mendeklarasikan fungsi callback di luar argumen seperti ini.

// Proses yang dijalankan secara asynchronous, biasanya berpotensi menghasilkan error. Misalnya, sebuah fungsi yang mengambil data dari internet akan menghasilkan error ketika jaringan kita bermasalah. Contoh lainnya, ketika berkas tersebut tidak ditemukan, fungsi yang membacanya akan menghasilkan error.

// Dengan alasan tersebut, pada fungsi callback selain membawa argumen data, ia juga membawa argumen error. Argumen error hanya akan memiliki nilai ketika proses asynchronous gagal atau mengalami gangguan.

// Untuk lebih jelasnya, mari kita ubah fungsi getUsers() menjadi seperti ini

function getUsers2(isOffline, callback){
  // simulate network delay
  setTimeout(()=> {
    const users2 = ['irwan', 'andi', 'gibran', 'ahmad'];

    if(isOffline){
      callback(new Error('cannot retrive users due offline'), null);
      return;
    }

    callback(null, users2);
  }, 3000);
}

// Kami menambahkan argumen isOffline pada fungsi getUsers() untuk menentukan proses asynchronous berhasil atau gagal. Sebab prosesnya berpotensi gagal, nilai yang dibawa oleh fungsi callback harus disesuaikan.

// Fungsi callback yang digunakan di JavaScript secara standar (convention) memiliki struktur seperti kode di bawah ini.

// function callback(error, data) {
  // logika ketika proses asynchrounous selesai
// }

// Argumen pertama dari fungsi callback merupakan error. Argumen ini hanya akan bernilai jika proses asynchronous gagal, sebaliknya biasanya bernilai null. Argumen kedua dari fungsi callback merupakan data yang dibawa ketika prosesnya berhasil. Jika proses asynchronous gagal, dia akan bernilai null.

// Selain itu, Anda juga perlu mengingat convention yang ditetapkan oleh Node.js bahwa argumen callback selalu diletakkan terakhir. Itulah alasan kami mendefinisikan argumen isOffline kemudian callback pada fungsi getUsers().

// Catatan: Harap diingat convention tersebut ditetapkan karena banyak proses asynchronous yang terdapat pada Node.js API menggunakan struktur tersebut dalam penggunaan callback, seperti fungsi fs.readFile().

// Dengan diubahnya fungsi getUsers(), kita juga perlu menyesuaikan struktur callback-nya. Untuk menangani proses asynchronous pada fungsi getUsers(), baik ketika prosesnya berhasil maupun gagal, maka fungsi usersCallback() perlu diubah menjadi seperti ini.

function usersCallback(error, users2) {
  if(error){
    console.log('process failed:', error.message);
    return;
  }

  console.log('process success:', users2);
}

getUsers2(false, usersCallback);
getUsers2(true, usersCallback);


// Apakah Anda sudah paham dengan pola callback ini? Untuk mengasah pemahaman, cobalah selesaikan tantangan yang kami sediakan di bawah ini.

// Tantangan!

// Kami menyediakan fungsi asynchronous untuk mendapatkan nilai daftar provinsi di Indonesia dengan nama getProvinces(). Fungsi tersebut akan mengembalikan daftar provinsi pada pemanggilan pertama dan menghasilkan error pada pemanggilan kedua. Fungsi getProvinces() hanya menerima satu argumen, yakni fungsi callback yang perlu Anda buat.

// Cobalah panggil fungsi tersebut dan tangani proses asynchronous-nya dengan pola callback. Pastikan callback yang Anda buat dapat menangani proses yang gagal dan berhasil.

// Jika Anda berhasil menyelesaikan tantangan ini, hasilnya akan tampak seperti ini.