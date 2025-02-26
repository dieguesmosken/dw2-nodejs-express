import express from 'express'
const router = express.Router()
import Produto from '../models/Produto.js'

// ROTA PRODUTOS
router.get("/produtos",function(req,res){
    Produto.findAll()
        .then((produtos)=>{
            res.render("produtos", {
                produtos : produtos
            })
        })
        .catch((erro)=>{
            console.log("Ocorreu um erro ao buscar os produtos! \nErro: "+erro)
        })
})


export default router