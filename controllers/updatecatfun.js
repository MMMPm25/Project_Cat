
const bcrypt = require('bcrypt')
const Cat = require('../models/Cat');

module.exports = (req, res) =>{
    const {catname, detail} = req.body

    Cat.updateMany({catname: catname},{$set: {catname: catname,detail:detail}}).then((cat)=>{
        
        
        
        console.log("update sucess")
    })

    console.log(catname)

    res.redirect('/popcat')
    }