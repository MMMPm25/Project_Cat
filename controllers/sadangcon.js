const bcrypt = require('bcrypt')
const Cat = require('../models/Cat')

module.exports = (req, res) =>{
    const {catname} = req.body
    console.log(catname)
    Cat.findOne({catname :catname}).then((CatData)=>{
        if(CatData){
            req.session.catId = CatData._id
            console.log(CatData)
            
            res.render('popcat',{
                CatData
            })
        }
    })
}