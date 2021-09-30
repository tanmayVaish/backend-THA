process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

const rl = require("readline").createInterface(process.stdin, process.stdout);

const n = rl.question('',input=>{
    rl.end();
    return input;
});


rl.question('',()=>{
    
})