// Importando o Express (CommonJS Modules)
const express = require('express');
// Criando uma instância do Express
const app = express();

//definindo o EJS para renderizar pagginas html
app.set('view engine', 'ejs');

//definindo a pasta publica para arquivos estaticos
app.use(express.static('public'));

//criando a primeira rota (rota principal)
app.get("/", function(req, res){
  res.render('index');
});
//criando a rota perfil
app.get("/perfil/:nome?", function(req, res){
  res.render('perfil',nome = nome);
  
});
//criando a rota videos
app.get("/videos/:playlist/:video", function(req, res){
  res.render('videos')
});

//criando a rota produto
app.get("/produtos/:produto?", function(req, res){
  // :produto? -> parametro opcional
  const produto = req.params.produto;
  //coletando o parametro da rota e gravando na variavel produto
  if (produto){
    res.send(`<h2 style='font-size:32px;'>Produto:  ${produto}.</h2>`);
  }else{
    res.send(`<h2>bem vindo a pagina de produtos</h2>`)
  }
  
});

// Inicializando o servidor na porta 8080
app.listen(8080, (erro) => {
  if (erro) {
    console.log('Erro ao iniciar o servidor');
  } else {
    console.log('Servidor iniciado com sucesso');
  }
});

// import express from 'express';