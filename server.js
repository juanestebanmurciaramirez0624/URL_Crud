const express = require("express")

//crear el objeto  
const app = express()

//put para cambiar todos los atributos, patch para cambiar uno

//definir puerto del servidor

const PUERTO = 4500

//Definir el servidor 

app.listen(PUERTO,
            console.log(`Servidor ejecutando en ${PUERTO} `))


//url prueba

app.get('/prueba', (req , res) => {
     //EJEMPLO MAS SENCILLO RESPONSIVE
     res.send("puto el que lo lea ")
    })

//SELECCIONAAAR

app.get(('/bootcamps'),
        (req, res) => {
            return  res.json({
                success: true,
                msg: "Seleccionando los bootcamps"
            })
        })


//SELECCIONAR POR ID

app.get(('/bootcamp/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Seleccionando los bootcamps| cuyo id es ${bootcapmId}`
            }
            )
        })


//CREAAAAAAAR
app.post(('/bootcamp'),
        (req, res) => {
        return  res.json({
        success: true,
        msg: "Crear bootcamps"
    })
})




//ACTUALIZAAAAAAR

app.put(('/bootcamp/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Actualizando los bootcamps| cuyo id es ${bootcapmId}`
            }
            )
        })


//ELIMINAAAAAR

app.delete(('/bootcamp/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Eliminando los bootcamps| cuyo id es ${bootcapmId}`
            }
            )
        })


        

////USUARIOS/////
//SELECCIONAAAR

app.get(('/users'),
        (req, res) => {
            return  res.json({
                success: true,
                msg: "Seleccionando los Usuarios"
            })
        })


//SELECCIONAR POR ID

app.get(('/user/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Seleccionando los usuarios| cuyo id es ${bootcapmId}`
            }
            )
        })


//CREAAAAAAAR
app.post(('/user'),
        (req, res) => {
        return  res.json({
        success: true,
        msg: "Crear usuario"
    })
})




//ACTUALIZAAAAAAR

app.put(('/user/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Actualizando los usuarios| cuyo id es ${bootcapmId}`
            }
            )
        })


//ELIMINAAAAAR

app.delete(('/user/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Eliminando los usuarios| cuyo id es ${bootcapmId}`
            }
            )
        })

////CURSOS/////
//SELECCIONAAAR

app.get(('/cursos'),
        (req, res) => {
            return  res.json({
                success: true,
                msg: "Seleccionando los cursos"
            })
        })


//SELECCIONAR POR ID

app.get(('/curso/:id'),
        (req, res) => {
        Id =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Seleccionando los cursos| cuyo id es ${Id}`
            }
            )
        })


//CREAAAAAAAR
app.post(('/curso'),
        (req, res) => {
        return  res.json({
        success: true,
        msg: "Crear cursos"
    })
})




//ACTUALIZAAAAAAR

app.put(('/curso/:id'),
        (req, res) => {
         Id =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Actualizando los cursos| cuyo id es ${Id}`
            }
            )
        })


//ELIMINAAAAAR

app.delete(('/curso/:id'),
        (req, res) => {
         Id =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Eliminando los cursos| cuyo id es ${Id}`
            }
            )
        })
////REVIEWS////
//SELECCIONAAAR

app.get(('/reviews'),
        (req, res) => {
            return  res.json({
                success: true,
                msg: "Seleccionando los reviews"
            })
        })


//SELECCIONAR POR ID

app.get(('/review/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Seleccionando los reviews | cuyo id es ${bootcapmId}`
            }
            )
        })


//CREAAAAAAAR
app.post(('/review'),
        (req, res) => {
        return  res.json({
        success: true,
        msg: "Crear reviews"
    })
})




//ACTUALIZAAAAAAR

app.put(('/review/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Actualizando los reviews | cuyo id es ${bootcapmId}`
            }
            )
        })


//ELIMINAAAAAR

app.delete(('/review/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Eliminando los reviews | cuyo id es ${bootcapmId}`
            }
            )
        })
