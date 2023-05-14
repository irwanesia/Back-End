const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[0];
const environment = process.env.NODE_ENV;

for (let i = 0; i <= 10; i++) {
    // process loop ini akan membuat pengunaan memori naik
}


const currentMemoryUsage = process.memoryUsage().heapUsed;

// console.log(currentMemoryUsage);
// console.log(initialMemoryUsage);

console.log(`hai, ${yourName}`);
console.log(`mode environment: ${environment}`);
console.log(`penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

