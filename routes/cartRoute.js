const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    console.log('server created')
    res.setHeader('content-type','text/html')
    let url = req.url;
    let method = req.method;

    if(url === '/'){
         res.end(`
        <h1>Hello World</h1>
        <form action='/message' method='post'>
        <label>Name:</label>
        <input type='text' name ='username'/>
        <button>Add</button>
        </form>
    `)
    }else{
        if(url === '/message' && method === 'POST'){
            let datachunk = [];
            req.on('data',(chunk)=>{
                console.log(chunk);
                datachunk.push(chunk)
                req.on('end',()=>{
                let combain = Buffer.concat(datachunk)
                console.log(combain.toString())
                let value = combain.toString().split('=');
                console.log(value)

                fs.writeFile('message-text',value[1],(err)=>{
                    res.statusCode = 302;
                res.setHeader('Location','/');
            res.end();
        })
                })
            })
        }else{
            if(url === '/read'){
                fs.readFile('message-text',(err,data)=>{
                    console.log(data.toString());
                    res.end(`<h1>${data.toString()}</h1>`)
                })
            }
        }
    }
   })


server.listen(3000,()=>{
    console.log('server is running on port 3000')
})