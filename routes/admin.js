import express from 'express';

import __dirname from '../util/rootpath.js'
import * as controllers from '../controllers/product.js'

const router= express.Router()
const products = [];

router.get('/add-product',controllers.getAddProduct)

router.post('/add-product',controllers.postAddProduct)

// router.post('/add-product',(req,res,next) => {
//     console.log(req.body.title)
//     products.push({title: req.body.title})
//     res.redirect('/')})

export {router as adminRoutes, products}