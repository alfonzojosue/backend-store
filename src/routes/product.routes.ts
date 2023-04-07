import { Router } from "express";
import { createProduct, getProducts } from "../Controllers/productControllers";


const router = Router()

router.get('/', getProducts)
router.get('./:id')
router.post('/', createProduct)


export default router