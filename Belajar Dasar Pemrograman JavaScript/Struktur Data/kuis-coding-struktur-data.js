console.log("============== Kuis Dicoding Struktur Data ==============")
console.log("=> Kuis Object ")
const restaurant = {
    name: "Irwan",
    city: "Cirebon",
    "favorite drink": "Kopi Tubruk",
    "favorite food": "Nasi Kebuli",
    isVegan: true,
}

let name = restaurant.name;
let favoriteDrink = restaurant["favorite drink"];

console.log(name);
console.log(favoriteDrink);

console.log("=> Kuis Array ")
/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// TODO
var evenNumber = []
for(let i=1; i<=100; i++){
	if(i % 2 == 0){
        var test = evenNumber.push(i)
    }
}
console.log(evenNumber);
console.log(evenNumber.pop());
console.log(evenNumber.shift());
console.log(delete evenNumber[1]);
console.log(evenNumber);

console.log("=> Kuis Map ")
const currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500],
]);

let priceInJPY = 5000;

let priceInIDR = priceInJPY * currency.get('JPY');
console.log(priceInIDR);


