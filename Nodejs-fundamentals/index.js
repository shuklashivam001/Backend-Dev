// const { add,remove,aoc }=require("./math")
// console.log(add(1,4),remove(1,5),aoc(4));
// const fs = require("fs");
// fs.writeFileSync("./text.txt","This is Sync file content")
// const file = fs.readFileSync("text.txt","utf-8")
// const asyncFile = fs.readFile("text.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Error in the file reading",err);
// }
//     else{
//         console.log("File reading successfully.",data);
// }
// })



// const user = (message,user)=>{
//     console.log(`Hello ${user}, ${message}`);
//     fs.appendFile("log.txt",`{${user} : ${message} : ${new Date().toISOString()}}\n`,(err)=>{
//         if(err){
//             console.log(err);
//         }
//     });
// }

// user("Welcome to the system","Shivam");
// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/json'});
//     res.end('Response is closed!');
// });

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// const http = require("http");
// const port = 3001

// http.createServer((req,res)=>{
//      switch(req.url){
//         case "/":
//             res.write("Welcome to the Home Page");
//             res.end();
//             break;
//         case "/about":
//             res.write("This is the About Page");
//             res.end();
//             break;
//         default:
//             res.writeHead(404, {"Content-Type": "text/html"});
            
//             res.end("<h1> 404 Not Found </h1>");
//      }
// }).listen(port,()=>{
//     console.log("Server is listening on port 3001");
// });


// const http = require("http");
// const port = 3001
// const fs = require("fs")

// http.createServer((req,res)=>{
//     const timestamp = new Date().toLocaleString();
//      const log = "User is requested at :"+timestamp+"\n";
//      fs.appendFile("server_log.txt",log,(err,data)=>{
//     if(err) console.log(err);

//      })
//      switch(req.url){
//         // case "/":
//         //     // res.write("Welcome to the Home Page");
//         //     res.writeHead(home);
//         //     res.end();
//         //     break;
//         case "/about":
//             res.write("This is the About Page");
//             res.end();
//             break;
//         default:
//             res.writeHead(404, {"Content-Type": "text/html"});
            
//             res.end("<h1> 404 Not Found </h1>");
//      }
// }).listen(port,()=>{
//     console.log("Server is listening on port 3001");
// });

const http = require("http");
const port = 3002
const fs = require("fs")
const url = require("url");

http.createServer((req,res)=>{
     const timestamp = new Date().toLocaleString();
     const log = "User is requested at :"+timestamp+"\n";
     const data = url.parse(req.url,true);
     console.log(data.query);
     fs.appendFile("server_log.log",log,(err,data)=>{
    if(err) console.log(err);

     })
    switch(req.url){
       case "/product":
        
           res.write("This is the Product Page");
           res.end();
           break;
    }
}).listen(port,()=>{
    console.log("Server is listening on port 3002");
});