import { Request, Response } from "express"
import { EditUserService } from "../services/EditUserService"

class EditUserController {
    async handle(req: Request, res: Response) {
        const { id, name, email, password, admin } = req.body;
        const editUserService = new EditUserService();

        if(!id || !name || !email || !password) throw new Error("Preencha todos os campos")

        const editUser = await editUserService.execute({id, name, email, password, admin });

        return res.json(editUser)
    }
}

export { EditUserController }