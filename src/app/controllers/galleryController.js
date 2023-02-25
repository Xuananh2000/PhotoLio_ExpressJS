class galleryController {
    index(req, res) {
        res.render('album')
    }
}

module.exports = new galleryController
