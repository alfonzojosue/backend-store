import { Router } from "express";
import { createProduct } from "../Controllers/productControllers";


const router = Router()

router.get('/')
router.get('./:id')
router.post('/', createProduct)


export default router