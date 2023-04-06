
import coffeeStock from "./state.js";

import { coffeeStock } from "../Module/state";

// Berbeda dengan gaya Node.js, kita gunakan keyword import ketika mendeklarasikan variabel yang di-import. Kita juga menggunakan keyword from untuk menentukan lokasi berkas JavaScript-nya.

// Hal tersebut aman untuk dilakukan karena dengan menggunakan export default dapat dipastikan hanya satu nilai yang diekspor pada satu berkas JavaScript.


// Setelah kita berhasil mendapatkan nilai yang diekspor,kita dapat menggunakan nilainya layaknya variabel lokal.


// import stock from "./state.js";
// Hal tersebut aman untuk dilakukan karena dengan menggunakan export default dapat dipastikan hanya satu nilai yang diekspor pada satu berkas JavaScript.

// Setelah kita berhasil mendapatkan nilai yang diekspor,kita dapat menggunakan nilainya layaknya variabel lokal.

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(coffeeStock);