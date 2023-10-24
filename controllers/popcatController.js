const User = require('../models/User')
const Cat = require('../models/Cat')
module.exports = async (req, res) => {
    
    let UserData = await User.findById(req.session.userId)
    let CatData = await Cat.findById(req.session.catId)
    
    res.render('popcat',{
        UserData,
        CatData   
    })
    
}
