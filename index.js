const express = require('express') /// importando el modelo express
const app = express()



app.get('/', (req, res) => {
    res.json({msg: 'hello get'})
})

app.get('/:user/:pass', (req, res) => {
    const {user, pass} = req.params
    if  (user === 'Paola' && pass=== '1234') { 
        res.json ({msg: 'iniciaste sesión con exito'}) 

    }
    
    res.json ({msg: 'error en el usuario y contraseña'})
})

//http://localhost:3000/login?user=usuario&password=1234

app.get('/login', (req, res) => {
    const {user, password} = req.query
    if (!user || !password) {
        res.status(400).json({msg: 'Necesitas proporcionar tu usuario y contraseña' })
        return
        
    }


    if  (user === 'Paola' && password=== '1234') { 
        res.json ({msg: 'iniciaste sesión con exito'}) 
        return

    }
    res.status(404).json({msg: 'Error en el usuario y/o contraseña' })
}) 



app.post('/', (req, res) => { //endpoint
    res.json({msg: 'hello post'})
})

app.put('/', (req, res) => {
    res.json({msg: 'hello put'})
})

app.patch('/', (req, res) => {
    res.json({msg: 'hello patch'})
})

app.delete('/', (req, res) => {
    res.json({msg: 'hello delete'})
})


app.listen(3000, () => {console.log('listening on port')})