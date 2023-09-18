//importando-exporess-para-servidor
const express = require("express");
const app = express()

//construtor-de-caminhos-para-localizar-arquivos
const path = require("path")

//token-de-endereço-do-servidor
const TOKEN = 8000;

//setando-engine-para-ejs
app.set('view engine', 'ejs');

//localzando-arqiuvos-publicos
app.use(express.static(path.join(__dirname, 'public')))

//pagina-principal
app.get("/", (req, res) => {
    res.render(path.join(__dirname + "/index"))
})


//iniciando-servidor-node
app.listen(TOKEN, () => {
    console.log("Server Runing...")
})