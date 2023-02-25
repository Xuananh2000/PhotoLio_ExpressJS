class servicesController {
    index(req, res) {
        res.render('services')
    }
}

module.exports = new servicesController
