// const {myEventEmitter} = require('events'); // tidak bisa

// harus menggunakan teknik module ES6
import { EventEmitter } from 'events';

const myEventEmitter = new EventEmitter();

const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

// myEventEmitter.on('coffee-order', makeCoffee);
// myEventEmitter.on('coffee-order', makeBill);

// atau dengan cara membuat satu fungsi
const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

// memicu event 'coffee-order' terjadi
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 25000 });
