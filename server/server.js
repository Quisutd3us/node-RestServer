const express = require('express');
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4')
const app = express();

require('../server/config/config')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
     extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.route('/usuario/:id', )
     .get((req, res) => {

          res.json('Get Usuario')
     })

     .put((req, res) => {
          let id = req.params.id
          res.json({
               id
          })
     })
     .delete((req, res) => {
          res.json('Get delete')
     })

app.post('/usuario', (req, res) => {
     let data = req.body
     if (!data.nombre || !data.email) {
          res.status(400).json({
               ok: false,
               mensaje: 'Falta el nombre o email'
          })
     } else {
          data.id = uuidv4()
          res.json({
               data
          })
     }
})

app.listen(process.env.PORT, () => {
     console.log('Server Conectado');
})