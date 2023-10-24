module.exports = (req, res) => {
    let catname = ""
    let detail = ""
    let picture = ""
    let data = req.flash('data')[0]

    if(typeof data != "undefined") {
        catname = data.catname
        detail = data.detail
        picture = data.picture
    }
    res.render('catadd',{
        errors: req.flash('validationErrors'),
        catname: catname,
        detail: detail,
        picture: picture
    })
       
}