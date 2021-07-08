import { Request, Response } from "express"
import { DeleteUserService } from "../services/DeleteUserService"

class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;
        const deleteUserService = new DeleteUserService();
        const deleteUser = await deleteUserService.execute(id);

        return res.json(deleteUser)
    }
}

export { DeleteUserController }