import { products } from "../routes/admin.js"


export const getAddProduct = (req,res,next)=>{
        res.render('add-product',{
            pageTitle: 'Add Product',
            path: '/admin/add-product'
        }) 
    }

export const postAddProduct = (req,res,next)=>{
    res.push('add-product',{
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    }) 
}

export const getAllProduct = (req,res,next) => {
    res.render('shop', {
        pageTitle: 'Shop Page',
        path: '/',
        prods: products
    })
}