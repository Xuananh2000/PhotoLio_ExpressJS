class siteController {
    index(req, res) {
        res.render('home')
    }
}

module.exports = new siteController
