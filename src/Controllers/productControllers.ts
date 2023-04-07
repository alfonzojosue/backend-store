import { Request, Response } from "express"
import { Product } from "../Models/Products"

export const getProducts = (req: Request, res:Response) => {

}

export const createProduct = async (req: Request, res:Response) => {
    
        const { name , price, img, size, characteristic, category, stock}= req.body
        if(!name || !price || !img  || !characteristic || !category || !stock){
            res.status(404).send("Data Found")
        }
 
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

  


   
}