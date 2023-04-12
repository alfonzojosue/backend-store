import { Router } from "express";
import { createProduct, getProducts, getProductById, getProductByCategory, getProductByName} from "../Controllers/productControllers";


const router = Router()

router.get('/', getProducts)
router.get("/:id", getProductById)
router.post('/', createProduct)
router.get('/categories/:category', getProductByCategory )
router.get('/categories', getProductByName )


export default router