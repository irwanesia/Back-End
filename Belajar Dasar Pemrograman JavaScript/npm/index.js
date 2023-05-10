import _ from 'lodash';

const myArray = [1, 2, 3, 4];
// let sum = 0;

// for(let i=0; i<myArray.length; i++){
//     sum += myArray[i];
// }

// console.log(sum);

// // atau 
// let sum2 = myArray.reduce((prev, curr) => {
//     return prev + curr;
// });
// console.log(sum2);


// dengan package/library lodash dapat meringkas kode diatas seperti ini
const myArray2 = [1, 2, 3, 4];
const sum = _.sum(myArray2);
console.log(sum);

