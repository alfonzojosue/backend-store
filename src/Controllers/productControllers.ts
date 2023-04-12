import { Request, Response } from "express"
import { Product } from "../Models/Products"
import { Products } from "../connection/connection"

export const getProducts = async(req: Request, res:Response) => {
    const {name} = req.query
    const product = await Product.find()
    try {
        if(name){
            const filtername = name.toString()
            const result = product.filter(item => item.name.toLowerCase().includes(filtername.toLowerCase()) )
            res.status(200).json(result)
        }else {
            res.status(200).json(product)
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

export const createProduct = async (req: Request, res:Response) => {

const { name , price, img, size, characteristic, category, stock}= req.body
        if(!name || !price || !img  || !characteristic || !category || !stock){
            res.status(404).send("Data Found")
        }
try {
    const product =  new Product()
    product.name = name;
    product.price = price;
    product.img = img;
    product.size = size;
    product.characteristic = characteristic;
    product.category = category;
    product.stock = stock;

    await product.save()

    return res.json(product)
    } catch (error) {
            res.status(400).send(error)
    }
}


export const getProductById = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
    if(id){
        const product = await Product.find(
            {
                where: {
                    id : id
                }
            }
        )
        res.status(200).json(product)
    }else {
        res.status(200).json("ID no existe")
    }
} catch (error) {
        res.status(400).json(error)
}
}

export const getProductByCategory = async(req: Request, res: Response) => {
    const {category} = req.params
    const product = await Products()
    try {
        if(category){
            const result = product.filter(item => item.category == category)
            res.status(200).json(result)
        }

    } catch (error) {
    res.status(400).json(error)
    }
}

