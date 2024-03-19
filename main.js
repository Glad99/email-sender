import fs from "fs"
import http from "http"


const PORT = 3000
console.log('HELLO WORLD')


http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/json'});

    res.end('<h1>Hello Node!!!</h1>\n');
}).listen(PORT)

console.log(`server is running on http://localhost:${PORT}`);


fs.writeFile('welcome.txt', 'Hello Node', (err, data)=>{
    if(err){
        console.log(err.stack);
        return;
    }
    console.log("Successfully created file")
})

fs.readFile("hello.txt", (err, data) => {
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString())
})