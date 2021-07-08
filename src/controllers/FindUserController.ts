import { Request, Response } from "express"
import { FindUserService } from "../services/FindUserService"

class FindUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;
        const findUserService = new FindUserService();

        const findUser = await findUserService.execute(id);

        res.json(findUser);
    }
}

export { FindUserController }