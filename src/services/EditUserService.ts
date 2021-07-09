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

        if(!id || !name || !email || !password) throw new Error("Preencha todos os campos")
        if(!newUser) throw new Error("the id doesn't valid")

        newUser.name = name;
        newUser.email = email;
        newUser.password = password;
        newUser.admin = admin;

        await editUserRepositories.save(newUser)
        
        return newUser;
    }
}

export { EditUserService }