var http=require('http');
const PORT =3000;
var server=http.createServer(function exec(request,response){
    // response.end("welcome here")
    console.log(request.method)
    if(request.url=='/home'){
        response.end("Home page")
    }
    else if(request.url=='/faq'){
        response.end("Lists of FAQ")
    }
    else{
        response.end("Welcome to page11")
    }
});
server.listen(PORT,function exe(){
    console.log("started")
});


