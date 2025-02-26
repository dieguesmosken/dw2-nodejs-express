import express from 'express'
const router = express.Router()
import Pedido from '../models/Pedido.js'

// ROTA PEDIDOS
router.get("/pedidos",function(req,res){
    Pedido.findAll()
        .then((pedidos)=>{
            res.render("pedidos", {
                pedidos : pedidos
            })
        })
        .catch((erro)=>{
            console.log("Ocorreu um erro ao buscar os pedidos! \nErro: "+erro)
        })
})

router.get("/pedidos",function(req,res){
    const pedidos = [
        {numero: "983721931", valor: 1200},
        {numero: "983721932", valor: 900},
        {numero: "983721933", valor: 3200},
        {numero: "983721934", valor: 150}
    ]
    res.render("pedidos", {
        pedidos: pedidos
    })
})
export default router