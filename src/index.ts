import express from "express"
import cors from "cors"


const app = express()
app.use(cors())

// Teste se API esta funcionando
app.get("/", (req, res) => {
    res.send("Hellow World")
})

// Ouvindo a porta de escolha
app.listen(3000, () => console.log("Rodando na porta 3000"))
