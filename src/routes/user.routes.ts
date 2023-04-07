import { Router } from "express";
import { createProduct } from "../Controllers/productControllers";

const router = Router()

router.get('/hello', (req, res)=> res.send("Hello World"))
router.get('/')
router.get('./:id')
router.post('/', createProduct)


export default router