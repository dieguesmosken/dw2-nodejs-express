import express from 'express'
const router = express.Router()
import Cliente from '../models/Cliente.js'

// ROTA CLIENTES
router.get("/clientes",function(req,res){
    Cliente.findAll()
        .then((clientes)=>{
            res.render("clientes", {
                clientes : clientes
            })
        })
        .catch((erro)=>{
            console.log("Ocorreu um erro ao buscar os clientes! \nErro: "+erro)
        })
})
router.get("/clientes/:id",(req,res) =>{
    const id = req.params.id
    Cliente.findByPk(id)
        .then((clientes)=>{
            res.render("clientes", {
                clientes : clientes
            })
        })
        .catch((erro)=>{
            console.log("Ocorreu um erro ao buscar o cliente pelo id! \nErro: "+erro)
        })  
})

// ROTA CADASTRO DE CLIENTES
router.post("/clientes/new",(req,res) => {
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco

    Cliente.create({
        nome: nome,
        cpf: cpf,
        endereco: endereco
    }).then(()=>{
        res.redirect("/clientes")
    }).catch((erro)=>{
        console.log("Ocorreu um erro ao cadastrar o cliente! \nErro: "+erro)
    })
    
})

// ROTA DELETAR CLIENTES
router.get("/clientes/delete/:id",(req,res) => {
    const id = req.params.id
    Cliente.destroy({
        where: {
            id: id
        }
    }).then(()=>{
        res.redirect("/clientes")
    }).catch((erro)=>{
        console.log("Ocorreu um erro ao deletar o cliente! \nErro: "+erro)
    })
})

// ROTA EDITAR CLIENTES
router.get("/clientes/edit/:id",(req,res) => {
    const id = req.params.id
    Cliente.findByPk(id)
        .then((cliente)=>{
            res.render("clienteEdit", {
                cliente : cliente
            })
        })
        .catch((erro)=>{
            console.log("Ocorreu um erro ao buscar o cliente pelo id! \nErro: "+erro)
        })  
})

//rota update cliente by id
router.post("/clientes/update/:id",(req,res) => {
    const id = req.params.id
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco

    Cliente.update({
        nome: nome,
        cpf: cpf,
        endereco: endereco
    },{
        where: {
            id: id
        }
    }).then(()=>{
        res.redirect("/clientes")
    }).catch((erro)=>{
        console.log("Ocorreu um erro ao atualizar o cliente! \nErro: "+erro)
    })
})


export default router