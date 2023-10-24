const bcrypt = require('bcrypt')
const Cat = require('../models/Cat');

module.exports = (req, res) =>{
    const {catname, detail} = req.body

    Cat.deleteOne({catname: catname}).then((cat)=>{

        console.log("delete success")
        return res.redirect('/popcat')
    })
}
