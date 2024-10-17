import express from 'express';
import path from 'path';

import __dirname from '../util/rootpath.js'
import {products} from './admin.js'
import * as controllers from '../controllers/product.js'
const router = express.Router()

router.get('/', controllers.getAllProduct)

export default router