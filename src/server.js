const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./src/data/database.json')
const publicRoutes = require('./routes/publicRoutes')
const authenticationMiddleware = require('./middleware/authenticationMiddleware')


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

server.use('/public', publicRoutes) //rotas na porta 8000


server.use(/^(?!\/(public|livros|autores|categorias)).*$/, authenticationMiddleware);

server.use(router) //rotas na prota 3000

server.listen(8000, () => {
<<<<<<< HEAD
  console.log("Servidor iniciado na porta 8000")
  console.log("API disponível em http://localhost:8002")
=======
  console.log("Servidor iniciado na porta 8001")
  console.log("API disponível em http://localhost:8000")
>>>>>>> f89d481eca0709f2174d01fecbfbd85983d99933
})
