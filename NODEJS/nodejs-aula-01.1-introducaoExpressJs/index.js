// Importando o Express (CommonJS Modules)
const express = require('express');
// Criando uma instância do Express
const app = express();

//criando a primeira rota (rota principal)
app.get("/", function(req, res){
  res.send("<h1> Bem Vindo ao meu site! ;)</h1>")
});
//criando a rota perfil
app.get("/perfil/:nome?", function(req, res){
  // :nome -> parametro obrigatorio
  const nome = req.params.nome;
  //coletando o parametro da rota e gravando na variavel nome
  if (nome){
    res.send(`<h2 style='font-size:32px;'>Olá, ${nome}. Seja bem vindo ao seu perfil!</h2>`);
  }else{
    res.send(`<h2>Faça login</h2>`)
  }
  
});
//criando a rota videos
app.get("/videos/:playlist/:video", function(req, res){
  playlist = req.params.playlist;
  video = req.params.video;
  res.send(`<h2>Você estpa na ${playlist}.</h2></br>
  <h2>reproduzindo o vídeo <strong>${video}...</strong></h2>`)
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