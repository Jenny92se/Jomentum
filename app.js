let express=require('express');
let app=express();
let fs=require('fs');
console.log(__dirname);
app.use(express.static(__dirname + '/static'));
app.get('/',function(req,res){
    fs.readFile('./static/views/index.html',function(error,data){
        if(error)
        {
            console.log(error);
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        }
    })
});

app.listen(8080,function(){
    console.log('connect 8080');
});





