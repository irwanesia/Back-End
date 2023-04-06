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

judul("Array Filter");
// Sama seperti array.map(), fungsi array.filter() merupakan fungsi bawaan dari data yang bertipe array di JavaScript. Sesuai namanya, fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada. Bila Anda memiliki kasus di mana Anda ingin menghilangkan beberapa item di array berdasarkan spesifikasi tertentu, fungsi ini sangatlah cocok Anda gunakan.

// Cara kerja fungsi ini mirip seperti array.map(). Namun, callback function dari fungsi ini harus mengembalikan boolean. Di mana nilai boolean ini digunakan untuk menentukan apakah item array lolos saring atau tidak.

// Sama seperti fungsi map(), fungsi filter() juga akan mengembalikan array yang telah disaring dalam bentuk array baru.

// Contoh penggunaan ketika Anda ingin menghilangkan seluruh nilai false pada array:
const truthyArray = [1, '', 'hello', 0, null, 'harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);
// Contoh lain, penggunaan filter untuk menyaring array dari objek siswa yang layak mendapatkan beasiswa berdasarkan nilai skor yang didapat.
const students = [
    {
        name: 'harry',
        score: 60,
    },
    {
        name: 'andi',
        score: 88,
    },
    {
        name: 'yanti',
        score: 90,
    },
    {
        name: 'karmila',
        score: 75,
    }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
console.log(eligibleForScholarshipStudents);

judul("Array Reduce");
// Sama seperti array.map(), array.reduce() adalah fungsi bawaan dari data yang bertipe array yang digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja.

// arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [innitialValue]);

// Callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya pada accumulator. Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.

// Contoh penggunaannya misalkan ketika kita ingin menjumlahkan total nilai siswa:
// pake data object students
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);
console.log('hitung manual totalScore = ', 60+88+90+75);


judul("Array Some");
// array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan menghasilkan nilai boolean.

// arr.some(callback(element, [index], [array]), [thisArg]);

// Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.

// Contoh penggunaannya misalkan kita ingin mengetahui apakah dalam deretan angka terdapat angka genap.
const array = [1, 2, 3, 4];
const even = array.some(element => element % 2 === 0);
const even2 = array.some(element => element % 5 === 0);

console.log(even); // true
console.log(even2); // false


judul("Array Find");
// Mirip dengan array.some(), array.find() sesuai namanya digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function. 

// Yang membedakan array.find() dengan array.some(), find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi pada item array.

// arr.find(callback(element, [indedx], [array]), [thisArg]);

// Sebagai contoh, misalkan kita akan mencari siswa dengan nama `James`.
// ambil data dari object students

const findJames = students.find(student => student.name == 'James');
const findAndi = students.find(student => student.name == 'andi');
console.log(findJames); // tidak ketemu atau undefined
console.log(findAndi); // ketemu


judul("Array Sort");
// array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output ['March', 'Jan', 'Feb', 'Dec'];

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output [1, 30, 4, 1000, 101, 121];

// Contoh pengurutan di atas didasarkan pada pengurutan bentuk tipe data string. Oleh karena itu, ketika kita ingin mengurutkan sesuai dengan kriteria yang kita inginkan (berdasarkan tanggal ataupun berdasarkan nilai siswa) maka kita perlu membuat compare function tersendiri.
const array2 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array2.sort(compareNumber);
console.log(sorting);

// Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).

// Jika, negative maka `a` akan diletakkan sebelum `b`
// Jika, positive maka `b` akan diletakkan sebelum `a`
// Jika, 0 maka tidak ada perubahan posisi.


judul("Array Every");
// array.every() merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan. Kembalian dari array.every() adalah nilai Boolean.
const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);


judul("Array forEach");
// Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array. Berbeda dari fungsi array lain yang sudah kita bahas, fungsi ini tidak mengembalikan nilai apa pun. Jadi fungsi ini secara harfiah hanya berfungsi untuk memanggil fungsi callback-nya saja, tak lebih dari itu.

// Melalui fungsi ini, Anda dapat mengubah sintaks perulangan berdasarkan jumlah array secara imperatif menjadi deklaratif.
// cara imperatif
console.log('cara imperatif');
const namaNama = ['irwan', 'andi', 'iyan', 'haris', 'toat'];

for(let i = 0; i < namaNama.length; i++){
    console.log(`hello ${namaNama[i]}!`);
}

console.log('cara deklaratif');
// cara deklaratif
namaNama.forEach((nama) => {
    console.log(`Hello, ${nama}!`);
});

// Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan operator break atau continue pada proses perulangan (Anda bisa melakukannya pada perulangan for). Hal ini juga berlaku ketika pada fungsi map dan filter.

for(let i = 0; i < namaNama.length; i++){
    if(namaNama[i] === "iyan") continue; // bisa
    console.log(`Hello, ${namaNama}!`);
}

namaNama.forEach((nama) => {
    // if(nama == "iyan") continue; // tidak bisa
    console.log(`Hello, ${nama}!`);
})



console.log('Kuis Coding: Functional Programmming');

/**
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * Catatan: Jangan ubah nilai atau struktur dari books
 */

const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

const greatAuthors = books.filter((book) => book.sales > 1000000).map((book) => {return `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`});
console.log(greatAuthors);

// const test = greatAuthors.map((name) => { return `${author} adalah penulis buku ${title} yang sangat hebat!`});
// console.log(test);
