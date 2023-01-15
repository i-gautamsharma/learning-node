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

const express = require("express");
const path=require('path')
const app = express();
app.use(express.static('./Web'))
// app.get('/', (req,res) => {
//   res.status(200).sendFile(path.resolve(__dirname,'./Web/index.html'))
// })
app.get('/about', (req, res) => {
  res.status(200).send("You're on about page...")
})
app.all('*', (req,res) => {
  res.status(404).send('<h3> Resource Not Foud Buddy....</h3>')
})
app.listen(3300, () => {
  console.log("app is listening....");
});
