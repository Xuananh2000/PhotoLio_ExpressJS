const siteRouter = require('./siteRoute')
const aboutRouter = require('./aboutRoute')
const servicesRouter = require('./servicesRoute')
const contactRouter = require('./contactRoute')
const galleryRouter = require('./galleryRoute')

function route(app) {
    app.get('/', siteRouter);
    app.use('/about', aboutRouter);
    app.use('/services', servicesRouter);
    app.use('/contact', contactRouter);
    app.use('/gallery', galleryRouter);
}

module.exports = route
