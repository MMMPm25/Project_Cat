const Cat = require('../models/Cat')
module.exports = (req, res) => {
    Cat.create(req.body).then(()=>{
        console.log("Cat registered successfully!")
        res.redirect('/popcat')
    }).catch((error) => {
        //console.log(error.errors)
        if(error){
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors',validationErrors)
            req.flash('data',req.body)
            return res.redirect('/popcat')
        }
    })
}