const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});
rl.pause();

(async () => {
    let a = parseInt(await cin());
    let b = parseInt(await cin());
    console.log(`X = ${a+b}`);
    process.exit(0);
})()

function cin(){
    rl.resume();
    return new Promise((resolve, reject) => {
        rl.on('line', (line) => {
            rl.pause();
            resolve(line);
        });
    });
}