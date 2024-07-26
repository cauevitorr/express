import express from "express"

const PORT = 3333

const app = express()

// Parte 01 - Roteamento: GET, POST, PUT e DELETE
// Parte 02 - Roteamento: receber informações
/** Formas
 * 1 - QUERY PARAMS -> GET -> /users?nome=CauêVitor&cargo=Aluno
 * 2 - ROUTE PARAMS -> GET, PATH, DELETE -> /users/1
 * 3 BODY PARAMS -> POST -> /users = {JSON}
 */

// 1 - QUERY PARAMS -> GET -> /users?nome=Cauê&cargo=Aluno
app.get('/users', (request, response) => {
console.log(request.query)
const {nome,cargo, idade} = request.query
response.status(200).json({nome,cargo,idade})
})

app.post('/users', (request, response) => {
 response.status(201).json([
  "Usuario 01",
  "Usuario 02",
  "Usuario 03",
  "Usuario 04"
 ])
})

// 2 - ROUTE PARAMS -> GET, PATH, DELETE -> /users/1
app.put('/users/:id/:idade', (request, response) => {
 const {id, idade} = request.params
 response.status(200).json({"users": id, "idade": idade})
})

app.delete('/users', (request, response) => {
 response.status(200).json([
  "Usuario 01",
  "Usuario 10",
  "Usuario 03"
 ])
})

app.listen(PORT, () => {
 console.log("Servidor on PORT " + PORT)
})
