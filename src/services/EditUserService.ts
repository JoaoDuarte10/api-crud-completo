import { getCustomRepository } from "typeorm"
import { UsersReposirories } from "../repositories/UsersRepositories"

interface IRequest {
    id: number;
    name: string;
    email: string;
    password: string;
    admin?: boolean
}

class EditUserService {
    async execute({ id, name, email, password, admin }: IRequest) {
        const editUserRepositories = getCustomRepository(UsersReposirories);
        const newUser = await editUserRepositories.findOne(id);

        newUser.name = name;
        newUser.email = email;
        newUser.password = password;
        newUser.admin = admin;

        await editUserRepositories.save(newUser)
        
        return newUser;
    }
}

export { EditUserService }