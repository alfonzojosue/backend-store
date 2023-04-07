import { Router } from "express";


const router = Router()

router.get('/hello', (req, res)=> res.send("Hello World"))
router.get('/')
router.get('./:id')
router.post('/')


export default router