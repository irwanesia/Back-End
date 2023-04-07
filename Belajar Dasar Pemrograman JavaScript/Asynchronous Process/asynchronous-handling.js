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