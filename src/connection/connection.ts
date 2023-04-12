import { Product } from "../Models/Products";


export const Products = () => {
    const product = Product.find()
    return product
}

