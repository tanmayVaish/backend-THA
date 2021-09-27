#!/usr/bin/env node


const fs = require("fs");

const args = process.argv;

if(args.length == 2){
    console.log(`./index.js [OPTION] [FILE]`);
}
else{
    if(args[2]=='-d'){
        if(args.length <= 3){
            console.log(`./index.js -d [DIRNAME]...`);
        }
        else{
            args.slice(3).forEach(ele=>{
                fs.mkdirSync(ele);
            });
        }
    }
    if(args[2]=='-f'){
        if(args.length <= 3){
            console.log(`./index.js -f [FILENAME]`);
        }
        else{
            fs.writeFileSync(args[3],args[4]);
        }

    }
    if(args[2]=='-af'){
        if(args.length <= 3){
            console.log(`./index.js -af [FILENAME]`);
        }
        else{
            fs.appendFileSync(args[3],args[4]);
        }
    }
    if(args[2]=='-df'){
        if(args.length <= 3){
            console.log(`./index.js -df [FILENAME]`);
        }
        else{
            fs.unlinkSync(args[3]);
        }
    }
    if(args[2]=='-dd'){
        if(args.length <= 3){
            console.log(`./index.js -df [FILENAME]`);
        }
        else{
            args.slice(3).forEach(ele=>{
                fs.rmdirSync(args[3],{ recursive: true, force: true });
            }
        }
    }
    if(args[2]=='-r'){
        if(args.length <= 3){
            console.log(`./index.js -r [FILENAME]`);
        }
        else{
            fs.rmdirSync(args[3],{ recursive: true, force: true });
        }
    }
}
