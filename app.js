import express from 'express'
import path from 'path'
//Root importálása
import __dirname from './util/rootpath.js'
import bodyParser from 'body-parser'

import {adminRoutes} from './routes/admin.js'
import shopRoutes from './routes/shop.js'

/*A szerver létrehozása*/
const app = express()

app.set('view engine','ejs')
app.set('views','views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extends: false}))



//Middlewear - root végpont kezelése
app.use('/admin',adminRoutes)
app.use('/', shopRoutes)

app.use((req,res,next) =>{
    res.status(404).render('404',{
        pageTitle: 'Page Not Found',
        path: ''
    })
})

//A szerver mely pontra figyeljen
app.listen(3000, () => {console.log(`server is listen on port: 3000`)})
