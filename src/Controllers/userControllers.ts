import { Request, Response } from "express"
import { User} from "../Models/User"


export const getUsers = async (req: Request ,res: Response) => {
    const users = await User.find()
    res.status(200).json(users)
}

export const getUsersById = async (req: Request, res: Response) => {
    const {id} = req.params
    
    const user = await User.find(
        {
            where: {
                id: id
            }
        }
    )
    return res.status(200).json(user)


}