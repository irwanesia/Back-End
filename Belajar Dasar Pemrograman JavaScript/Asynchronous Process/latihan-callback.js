const {judul} = require('./pengenalan-asynchronous');

judul("Tantangan - latihan callback");
// Tantangan!

// Kami menyediakan fungsi asynchronous untuk mendapatkan nilai daftar provinsi di Indonesia dengan nama getProvinces(). Fungsi tersebut akan mengembalikan daftar provinsi pada pemanggilan pertama dan menghasilkan error pada pemanggilan kedua. Fungsi getProvinces() hanya menerima satu argumen, yakni fungsi callback yang perlu Anda buat.

// Cobalah panggil fungsi tersebut dan tangani proses asynchronous-nya dengan pola callback. Pastikan callback yang Anda buat dapat menangani proses yang gagal dan berhasil.

// Jika Anda berhasil menyelesaikan tantangan ini, hasilnya akan tampak seperti ini.

function getProvinces(callback){
    
    setTimeout(() => {
        const provinces = ['banten','dki jakarta','jawa barat','jawa tengah','jawa timur'];
      
        callback(null, provinces);
    }, 3000);
}

// function getProvinces(isNone, callback){
    
//     setTimeout(() => {
//         const provinces = ['banten','dki jakarta','jawa barat','jawa tengah','jawa timur'];
        
//         if(isNone){
//             callback(new Error('cannot retrive users due isNone'), null);
//             return;
//         }
      
//         callback(null, provinces);
//     }, 3000);
// }

// solution
function provincesCallback(error, provinces) {
    if (error) {
      console.log(error.message);
      return;
    }
  
    console.log(provinces);
}
  
getProvinces(provincesCallback);
getProvinces(provincesCallback);

// getProvinces(false, provincesCallback);
// getProvinces(true, provincesCallback);