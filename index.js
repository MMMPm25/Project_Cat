const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')

//mongodb connection
mongoose.connect('mongodb+srv://Tanawat:MMMPm2.5@cluster.doxsiks.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true
})

global.loggedIn = null
global.cat = null
//controller
const indexController = require('./controllers/indexController')
const loginController = require('./controllers/loginController')
const registerController = require('./controllers/registerController')
const storeUserController = require('./controllers/storeUserController')
const loginUserController = require('./controllers/loginUserController')
const logoutController = require('./controllers/logoutController')
const homeController = require('./controllers/homeController')
const popcatController = require('./controllers/popcatController')
const breedcatController = require('./controllers/breedcatController')
const healController = require('./controllers/healController')
const catcontactController = require('./controllers/catcontactController')

const CatController = require('./controllers/CatController')
const storeCatController = require('./controllers/storeCatController')
const babyController = require('./controllers/babyController')
const adultController = require('./controllers/adultController')
const oldController = require('./controllers/oldController')

const addcatcon = require('./controllers/addcatcon')

const percon = require('./controllers/percon')
const exocon = require('./controllers/exocon')
const mencon = require('./controllers/mencon')
const bricon = require('./controllers/bricon')
const novicon = require('./controllers/novicon')
const scoutcon = require('./controllers/scoutcon')

const redirectifAuth = require('./middleware/redirectifAuth')
const authMiddleware = require('./middleware/authMiddleware')
const updatecat = require('./controllers/updatecat')
const updatecatfun = require('./controllers/updatecatfun')
const deletecat = require('./controllers/deletecat')
const deletecatfun = require('./controllers/deletecatfun')
const sadangcon = require('./controllers/sadangcon')
const search = require('./controllers/search')


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.use(expressSession({
    secret: "node secret"
}))
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    
    next()
})



app.set('view engine', 'ejs')



app.get('/',indexController)
app.get('/home',authMiddleware,homeController)
app.get('/login',redirectifAuth,loginController)

app.get('/breedcat',breedcatController)
app.get('/heal',healController)
app.get('/catcontact',catcontactController)
app.get('/register',redirectifAuth, registerController)
app.post('/user/register',redirectifAuth, storeUserController)
app.post('/user/login',redirectifAuth, loginUserController)

app.get('/popcat',popcatController)
app.get('/search',search)
app.post('/cat/search',sadangcon)
app.get('/catadd', CatController)
app.post('/cat/catadd', storeCatController)

app.get('/logout',logoutController)
app.get('/babycat',babyController)
app.get('/adult',adultController)
app.get('/oldcat',oldController)

app.get('/updatecat',updatecat)

app.post('/cat/updatecat',updatecatfun)


app.get('/deletecat',deletecat)
app.post('/cat/deletecat',deletecatfun)

app.get('/percat',percon)
app.get('/exocat',exocon)
app.get('/mencat',mencon)
app.get('/bricat',bricon)
app.get('/novicat',novicon)
app.get('/scoutcat',scoutcon)











app.listen(3000, () =>{
    console.log("App listening on port 3000")
})