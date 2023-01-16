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
// const http = require("http");
// const fs = require('fs')
// const home=fs.readFileSync('./home.html','utf8')
// const server = http.createServer((req, res) => {
//     console.log(req.method)
//     console.log(req.url)
//     if (req.url === '/') {
//         res.writeHead(200, { 'content-type': 'text/html' })
//         res.write(home)
//       res.end();
//     }
//     else if (req.url === '/about') {
//         res.writeHead(200, { 'content-type': 'text/html' })
//         res.write('<h1>About Page...</h1>')
//       res.end();
//     } else {
//         res.writeHead(404, { 'content-type': 'text/html' })
//         res.write('<h1>Cant find the page youre looking for...</h1>')
//       res.end();
//     }
// });
// server.listen(3300);

// const log = require("./logger");
// // app.use(express.static('./Web'))
// app.use(log)
// app.get("/about/query", (req, res) => {
//     const { name } = req.query;
//     let newdata = [...data];
//     newdata = data.filter((item) => {
//       return item.first_name.startsWith(name);
//     });
//     res.status(200).json(newdata);
//   });
//   app.all("*", (req, res) => {
//     res.status(404).send("<h3> Resource Not Foud Buddy....</h3>");
//   });