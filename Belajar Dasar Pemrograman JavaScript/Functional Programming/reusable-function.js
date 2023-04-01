function judul(name){
    console.log(`============== ${name} ==============`);
}

judul("Reusable Function");
// Dengan menerapkan konsep-konsep yang ada di dalam paradigma FP, fungsi yang Anda buat akan bersifat reusable. Karena fungsi yang Anda buat merupakan pure function, ia tidak akan dipengaruhi ataupun mempengaruhi keadaan di/dari luar. Hal ini tentu membuat fungsi dapat digunakan berkali-kali tanpa khawatir mendapatkan hasil di luar ekspektasi Anda.

// Pada materi kali ini kita tidak berfokus untuk membuat banyak reusable function di JavaScript. Kami percaya, dengan memahami konsep functional programming secara matang, Anda dapat membuatnya sendiri sesuai kebutuhan.

// Alih-alih membuatnya sendiri, kita akan coba membahas dan menggunakan beberapa reusable function yang sudah ada di JavaScript. Khususnya beberapa Higher-Order Function yang dimiliki array, seperti map, filter, dan forEach.

judul("Array Map");
// Fungsi array.map() merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan. Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.
['haryy','ron','jeff', 'thomas'].map(() => { });
// Callback function tersebut akan dipanggil sebanyak jumlah panjang array dan akan memiliki akses pada index array sesuai dengan iterasinya.
['haryy','ron','jeff', 'thomas'].map((name) => { });
// Seperti yang Anda ketahui di awal, fungsi map akan mengembalikan array baru. Nilai tiap item pada array yang dikembalikan, dihasilkan dari kembalian callback function-nya. Karena callback function dapat mengakses item array, biasanya developer menggunakannya untuk menghasilkan nilai baru.
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);