import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, password, email, admin } = req.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, password, email, admin });

        return res.json(user);
    }
}

export { CreateUserController }