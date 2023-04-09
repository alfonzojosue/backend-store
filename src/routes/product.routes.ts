import { Router } from "express";
import { createProduct, getProducts, getProductById} from "../Controllers/productControllers";


const router = Router()

router.get('/', getProducts)
router.get("/:id", getProductById)
router.post('/', createProduct)


export default router