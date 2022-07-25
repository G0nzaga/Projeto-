const express = require("express");
const app = express();


app.get("/", function(req, res){
    //res.send("<h1>Projeto para doar Computadores</h1>")
    res.status(200).send({Alive:true})
});


app.listen(200,function(erro){
    if(erro){
        console.log("Ocorreu um erro")
    } else{
        console.log("Servidor iniciado com sucesso")
    }
})


