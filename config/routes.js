const products = require('../app/controllers/products')
const auth = require('../app/controllers/auth')
const authMiddleware = require('../app/middleware/auth')


module.exports = app=>{
    app.get('/products', authMiddleware, products.getAll)
    app.post('/products', authMiddleware, products.create )
    app.put('/products/:id', authMiddleware, products.update)
    app.delete('/products/:id', authMiddleware, products.toDelete )
    app.post('/signin', auth.signIn)
}

