function judul(name){
    console.log(`============== ${name} ==============`);
}

judul("Pengenalan Setup Environment");
// Sejauh ini kita telah mempelajari beberapa hal mendasar dalam JavaScript sekaligus menjalankan contoh-contoh kodenya pada platform Dicoding. Selanjutnya bagaimana jika Anda ingin mengembangkan aplikasi lebih lanjut di luar platform Dicoding?

// Ada beberapa tools yang perlu Anda siapkan untuk memulai mengembangkan aplikasi dengan komputer atau laptop Anda sendiri.


judul("Text Editor");
console.log("// Dalam mengembangkan aplikasi, kita akan banyak menuliskan kode. Maka dari itu, tools yang wajib kita miliki adalah sebuah text editor. Beberapa sistem operasi sebenarnya sudah menyediakan text editor bawaan. Contohnya Windows memiliki Notepad, Linux memiliki Text Editors, dan Mac OS memiliki TextEdit. Ketiga aplikasi tersebut bisa kita gunakan untuk belajar membuat aplikasi dengan JavaScript, meskipun masih banyak alternatif text editor lainnya selama masih dapat menyimpan sebuah plain text dengan format .js ")

// Perlu diperhatikan bahwa kode yang kita tulis merupakan sebuah plain text. Pastikan Anda menggunakan text editor yang tepat. Jangan pernah gunakan Microsoft Word untuk menuliskan sebuah kode. Ini penting karena aplikasi tersebut menampilkan teks yang telah diformat atau biasa disebut dengan rich text.

// Selain text editor bawaan dari sistem operasi, ada beberapa teks editor lain yang memang dirancang khusus untuk menulis kode pemrograman. Teks editor ini umumnya dilengkapi dengan banyak fitur berguna yang mendukung kita dalam mengembangkan aplikasi.

// Tutorial dan contoh di kelas ini selanjutnya akan menggunakan teks editor Visual Studio Code. Visual Studio Code merupakan text editor yang dikembangkan oleh Microsoft. Dalam Visual Studio Code terdapat fitur debugging, Git control, syntax highlighting, code completion, snippets, dan code refactoring. Visual Studio Code tersedia untuk sistem operasi Windows, Mac, maupun Linux. Selain itu, text editor ini bisa kita gunakan secara gratis. Untuk mengunduhnya, silakan kunjungi website berikut: https://code.visualstudio.com/.



judul('Terminal');
// Pada materi selanjutnya kita akan sering menuliskan command line untuk menjalankan program menggunakan Node.js. Tentunya command line dituliskan dalam sebuah terminal.

// Sebenarnya Anda tidak perlu menyiapkan atau mengunduh aplikasi apa pun untuk ini, karena sistem operasi baik Windows, MacOS, dan Linux sudah menyediakan Terminal usungannya masing-masing. Untuk menuliskan command line pada Linux dan MacOS, gunakan aplikasi yang bernama “Terminal.” Pada Windows kita bisa menuliskannya melalui “CMD” atau “PowerShell”.

judul("JavaScript Runtime");
// Sesuai yang telah dijelaskan pada modul-modul awal, JavaScript mulanya hanya digunakan pada lingkungan web browser. Saat ini pun browser masih merupakan lingkungan eksekusi yang paling umum untuk kode JavaScript [4]. Lingkungan web browser memungkinkan kode JavaScript untuk menerima inputan dari mouse dan keyboard pengguna. Selain itu, JavaScript juga dapat menampilkan output kepada pengguna melalui HTML dan CSS.

// Salah satu cara termudah untuk menjalankan kode JavaScript di lingkungan browser adalah menggunakan browser itu sendiri. Kita dapat menggunakan developer tools yang disediakan oleh browser. Developer tools bisa kita akses melalui shortcut ctrl + shift + i atau klik kanan -> Inspect Element. Setelah itu pilih tab console. Developer tools ini dilengkapi dengan interpreter yang akan menjalankan kode yang kita tulis.

// Selain browser, terdapat runtime lain yang bisa menjalankan JavaScript, yaitu Node.js. Node.js memungkinkan JavaScript dapat berjalan di berbagai platform, tidak hanya browser. Itulah kenapa JavaScript yang awalnya terkenal sebagai bahasa untuk front-end web, kini mulai merambah juga ke ranah back-end dari website.

// Node memberikan akses JavaScript ke seluruh sistem operasi, memungkinkan program JavaScript dapat membaca dan menulis file; mengirim dan menerima data melalui jaringan; serta membuat dan melayani permintaan HTTP.

// Selanjutnya kita akan fokus untuk pengembangan program JavaScript pada lingkungan Node. Tentunya kita perlu menginstal Node.js terlebih dulu. Penasaran bagaimana caranya? Kita akan bahas pada materi selanjutnya.

judul("Node.js")

// Node.js adalah runtime environment untuk JavaScript yang bersifat open-source dan cross-platform. Dengan Node.js kita dapat menjalankan kode JavaScript di mana pun, tidak hanya terbatas pada lingkungan browser.

// Node.js menjalankan V8 JavaScript engine (yang juga merupakan inti dari Google Chrome) di luar browser. Ini memungkinkan Node.js memiliki performa yang tinggi.

// Node.js juga menyediakan banyak library/module JavaScript yang membantu menyederhanakan pengembangan aplikasi web. Berikut ini adalah beberapa fitur penting dari Node.js yang menjadikannya pilihan utama dalam pengembangan aplikasi:

// Asynchronous & Event-driven
// Semua API dari Node.js bersifat asynchronous, artinya tidak memblokir proses lain sembari menunggu satu proses selesai. Server Node.js akan melanjutkan ke pemanggilan API berikutnya lalu memanfaatkan mekanisme event notification untuk mendapatkan respon dari panggilan API sebelumnya.

// Very Fast
// Eksekusi kode dengan Node.js sangat cepat karena berjalan pada V8 JavaScript Engine dari Google Chrome.

// Single Threaded but Highly Scalable
// Node.js menggunakan model single thread dengan event looping. Mekanisme ini membantu server untuk merespon secara asynchronous dan menjadikan server lebih scalable dibandingkan server tradisional yang menggunakan banyak thread untuk menangani permintaan.
// Node.js dirancang untuk aplikasi dengan proses I/O yang intensif seperti network server atau backend API. Pemrograman dengan multithreading relatif lebih berat dan sulit untuk dilakukan. Jika kita ingin membuat web server yang bisa menangani ratusan request bersamaan, menggunakan ratusan thread akan membutuhkan memori yang besar. Oleh karena itu, karakteristik Node yang asynchronous dan single thread dirancang untuk memungkinkan implementasi server yang dapat menangani banyak request pada waktu yang sama.

judul('Instalasi Node.js dengan NVM');
// Selain dengan browser, agar dapat menjalankan JavaScript pada perangkat lokal, kita perlu menginstal Node.js. Node.js memiliki dua versi rilis, yaitu LTS dan current. LTS merupakan kepanjangan dari Long Term Support. Artinya, versi tersebut mendapat dukungan dalam jangka waktu yang lama, sehingga lebih disarankan menggunakan versi ini. Sementara, versi current berisi fitur-fitur baru yang dirilis untuk Node.js.

// Ada dua cara dalam memasang Node.js, yakni:

// sesuai dengan dokumentasi yang diberikan Node.js pada halaman resminya, dan
// menggunakan tool bernama Node Version Manager (NVM).
// Saat ini, cara yang direkomendasikan dalam memasang Node.js adalah dengan bantuan NVM. Alasanya, NVM banyak menyederhanakan proses dalam pemasangan Node.js. Selain itu, Anda bisa mudah menaikkan atau menurunkan versi Node.js tanpa perlu mengulang proses instalasi.

// Yuk, ikuti langkah-langkah berikut untuk memasang Node.js dengan NVM sesuai dengan sistem operasi yang Anda gunakan.

judul("intslasi di Linux dan macOS");
// Pada materi ini kita akan memasang Node.js di Linux dan macOS. Untuk Anda pengguna Windows, gulir materi ini ke bawah hingga menuju bagian Windows.

// Seperti yang sudah disebutkan sebelumnya, kita akan memasang NVM, lalu memasang Node.js. Untuk informasi lebih detail mengenai NVM di Linux dan macOS, kunjungi halaman NVM di GitHub.

// Berikut langkah-langkah dalam memasang NVM di Linux dan macOS.

judul("Instalasi Node.js pada Windows");
// Sejatinya NVM merupakan proyek yang dibuat khusus untuk macOS dan Linux. Namun, jika Anda menggunakan Windows, terdapat alternatif yang tool bernama nvm-windows yang bisa digunakan. Walau namanya mirip, nvm-windows tidak sama dengan nvm yang ada di Linux dan macOS.

// Kita akan memasang NVM di Windows, lalu memasang Node.js. Untuk informasi lebih detail mengenai NVM di Windows, kunjungi halaman nvm-windows.

// Berikut adalah langkah-langkah dalam memasang nvm-windows.

// Kunjungi halaman unduh nvm-windows pada tautan berikut: https://github.com/coreybutler/nvm-windows/releases.