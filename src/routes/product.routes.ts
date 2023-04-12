import { Router } from "express";
import { createProduct, getProducts, getProductById, getProductByCategory, } from "../Controllers/productControllers";


const router = Router()



router.get('/', getProducts)
router.get('/:category', getProductByCategory)
router.get('/:category/:id', getProductById)
router.post('/', createProduct)




export default router