// const na = "Gautam Sharma";
// function printname() {
//   console.log("function import working");
// }
// module.exports = printname;
// module.exports.product = "MacBook Air 2020";
// const printname = require("./names.js");
// const a = require("./names.js");
// const a = 10;
// if (a > 10) {
//   console.log("a is gretaer than 10");
// } else {
//   console.log("a is smaller than 10");
// }
// console.log(`this is my first node application`);

// const os = require("os");
// console.log(`The system uptime is ${os.uptime} seconds.`);

// const currentOS={
//   type: os.type(),
//   release: os.release(),
//   arch: os.arch(),
//   free:os.freemem(),
// }
// console.log(currentOS)

// const path=require("path")
// const basepath=path.basename('../coupansArray/backend/app/app.js')
// console.log(basepath)
// const fullpath = path.join('../coupansArray', '/frontend', 'app/package.json')
// console.log(fullpath)
// const absolute = path.resolve(__dirname, 'weather-using-api', 'package.json')
// console.log(absolute)

const fs = require("fs");
// const b = fs.writeFileSync(
//   "../new.txt",
//   "Hello this is written by node js \n hello " ,{ flag: "a" }
// );
// const a = fs.readFileSync("../new.txt", "utf8");
// console.log(a);

// const b = fs.writeFile('../new.txt', 'this is written by write file sync', (err, result) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(result)
//     }
// })
// const a = fs.readFile('../new.txt', 'utf8', (err,result) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(result)
//     }
// })
// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end("Welcome to homepage ")
//     }
//     if (req.url === '/about') {
//         res.end("Welcome to about ")
//     }
//     if (req.url === '/fans') {
//         res.end("Welcome to fans page ")
//     }
//     res.end("Oops we cant find page you're looking for...")
// })
// server.listen(3300)
// const EventEmitter = require('events')
// const customEmitter = new EventEmitter()
// customEmitter.on('event1', (name, id) => {
//     console.log(`hello ${name} ${id} `)
// })
// customEmitter.on('event1', () => {
//     console.log("\n data recieved second time...")
// })
// customEmitter.emit('event1','gautam',69)