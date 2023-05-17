// const server = new Server({
//     host: ProcessingInstruction.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
// });

const cpuInformastion = process.memoryUsage()['heapUsed'];
const processArgv = process.argv[1];
const processEnv = process.env['COMPUTERNAME'];

console.log(processEnv);

