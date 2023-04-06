// Untuk menangani eror pada JavaScript, gunakan try dan catch. Penulisan kode try-catch untuk menangani eror adalah seperti ini:

try {
    // kode
} catch (error) {
    // error handling
}

// Taruh kode yang berpeluang menimbulkan eror di dalam blok try. Apabila terjadi eror di dalam blok kode try, maka ia akan ditangkap dan ditangani oleh blok kode catch. Sementara, jika tidak terjadi eror pada kode, maka blok catch akan diabaikan.

try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Tidak terjadi eror, maka kode ini diabaikan");
}

// Kode di dalam blok try di atas tidak akan menghasilkan eror, sehingga kode di dalam blok catch akan diabaikan dan tidak dijalankan. Berikut ini adalah contoh kode yang menghasilkan eror

try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log("Terjadi error!");  // (4)
}

// Baris kode (2) akan menghasilkan eror. Eksekusi kode di dalam blok try akan dihentikan, sehingga baris kode (3) tidak akan tereksekusi. Kemudian kode akan dilanjutkan ke baris (4) atau blok catch.

// Selamat! Anda telah berhasil menangani eror dan menghindarkan aplikasi dari crash (Cobalah untuk menghapus sintaks try-catch dan melihat bagaimana aplikasi akan crash). Namun, bagaimana kita bisa tahu apa yang menyebabkan suatu program mengalami eror? Jika ada informasi yang jelas tentunya akan sangat membantu kita atau pengguna nantinya bukan?

// Sekarang perhatikan blok catch. Di sana catch memiliki satu parameter bernama error (nama variabel bisa diubah). Variabel error tersebut merupakan sebuah object yang menyimpan detail informasi dari error yang terjadi.

// Object error memiliki beberapa properti utama di dalamnya, yaitu:

// name : Nama error yang terjadi.
// message : Pesan tentang detail error.
// stack : Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error.
// Sekarang mari kita coba untuk mengubah kode dan menampilkan properti error di atas.

console.log("========== Menampilkan property error ========");

try {
    console.log("Awal blok try");
    errorCode;
    console.log("Akhir blok try");
} catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

/* output
Awal blok try
ReferenceError
errorCode is not defined
ReferenceError: errorCode is not defined

// Dari informasi di atas, kita bisa tahu bahwa error yang muncul adalah ReferenceError karena errorCode dianggap sebagai sebuah variabel atau nilai yang tidak terdefinisi.