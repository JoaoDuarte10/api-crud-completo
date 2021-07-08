import { Request, Response, NextFunction, request } from "express"
import { getCustomRepository } from "typeorm"
import { UsersReposirories } from "../repositories/UsersRepositories"

export async function CheckAdmin(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body.id;
    const userRepositories = getCustomRepository(UsersReposirories);
    const { admin } = await userRepositories.findOne(id)

    if(admin == true) return next()

    return res.status(401).json({error: "Unauthorized"})
}