import { Router } from "express";
import userRouter from './user.routes'
import productsRouter from './product.routes'

const router = Router()

router.use('/users', userRouter)
router.use('/products', productsRouter)


export default router