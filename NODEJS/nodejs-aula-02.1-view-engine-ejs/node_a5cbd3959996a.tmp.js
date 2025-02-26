// Importando o Express (CommonJS Modules)
const express = require('express');
// Criando uma instância do Express
const app = express();
// Inicializando o servidor na porta 8080
app.listen(8080, (erro) => {
  if (erro) {
    console.log('Erro ao iniciar o servidor');
  } else {
    console.log('Servidor iniciado com sucesso');
  }
});

// import express from 'express';