const bodyParser = require('body-parser')


const express = require('express')
const mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/online-store')
const Product = mongoose.model('Product', {
    id: Number,
    name: String,
    price: mongoose.Schema.Types.Decimal128
})

const app = express()
app.use(bodyParser.json())
// const products = 
// [
//     {
//     "id": 1,
//     "name": "phone",
//     "price": 300,
// }
// ,
//     {
//     "id": 2,
//     "name": "tablet",
//     "price": 400,
// }
// ]



// app.get('/', (req,res)=> res.send('Привет, мир!'))
// app.get('/products', (req,res)=> res.json(products))
app.get('/products', (req,res)=> {Product.find()
.exec()
.then(products=>res.json(products))
})

app.post('/products',  (req,res)=> {
    Product.create(req.body)
    .then(createdProduct=>res.json(createdProduct))
})
// app.post('/products',  (req,res)=> {
//     products.push(req.body)
//     res.json(req.body)})

    app.put('/products/:id',  (req,res)=> {Product.findOneAndUpdate({id: req.params.id}, req.body)
        .exec()
        .then(product=>res.json(product))



    })
    app.delete('/products/:id',  (req,res)=> {Product.deleteOne({id: req.params.id})
    .exec()
    .then(()=>res.json({success: true}))
})
    app.put('/products/:id',  (req,res)=> {
        const product = products.find(p => p.id === + req.params.id)
        const productIndex = products.indexOf(product)
        const newProduct = {...product, ...req.body}
        products[productIndex] = newProduct
        res.json({success: true})
    })    
//eslint-disable-next-line
app.listen(3000, ()=>console.log('Listening 3000...'))