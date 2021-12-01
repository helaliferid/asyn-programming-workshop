const http=require('http');
const url = require('url');

const host='http://localhost';
const port="8090";


const server=http.createServer(function(req,res){
    let path=url.parse(req.url,true);
    let method = req.method;

    res.setHeader('Content-Type','application/json');


    // switch (method) , pathname 
    // case 'GET' && pathname === 'todos'
    //             return todos read from a file
    // case 'POST' && pathname === 'todos'
    //              save the body of the POST request in the file and return 
    // success message
         
    res.end(`{
        "path":"${JSON.stringify(path)}",
        "method":"${method}"
    }`
        )
});

server.listen(port,function(){
    console.log(`Server listening on ${host}:${port}`)
});

//TODO: completer l'implementation de ce
// server afin de repondre sur GET /todos
// et POS /todo ({task:'something'})
// et avec fetch ajouter et recuperer les todos 
// d'une maniere asynchrone (DOM)

// fetch('http://example.com/songs')
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));