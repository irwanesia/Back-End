// promise (WEB Programing Unpas)
// object yang merepresantasikan keberhasilan atau kegagalan sebuah event yang synchronous di masa yang akan datang

// janji terpenuhi = fulfilled
// tidak terpenuhi = rejected / pending
// 3 fungsi callback (resolve / reject / finally) 
// aksi ketika terpenuhi (then)
// aksi tidak terpenuhi (catch)

// contoh 1
let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('janji telah ditepati');
//     }else {
//         reject('ingkar janji..');
//     }
// });

// // console.log(janji1);

// janji1
//     .then(response => console.log("OK! : " + response))
//     .catch(response => console.log("Not OK! : " + response));

// constoh 2
const janji2 = new Promise((resolve, reject) => {
    if(ditepati){
        setTimeout(() => {
            resolve("ditepati setelah beberapa detik");
        }, 3000);
    }else{
        setTimeout(() => {
            resolve("tidak ditepati setelah beberapa detik");
        }, 3000);
    }
});

console.log("mulai");
// console.log(janji2.then(() => console.log(janji2))); // akan menampilkan log pending
janji2
    .finally(() => console.log("selesai menunggu"))
    .then(response => console.log("OK! : " + response))
    .catch(response => console.log("Not OK! : " + response));

console.log("selesai");