const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const CatSchema = new Schema({
    catname:{
        type: String,
        required:[true, 'Please provide Cat name']
    },
    detail:{
        type: String,
        required:[true, 'Please provide Cat detail']
    },
    picture:{
        type: String,
        required:[true, 'Please provide Cat picture']
    }
    
    
    
})
const Cat = mongoose.model('Cat', CatSchema)
module.exports = Cat