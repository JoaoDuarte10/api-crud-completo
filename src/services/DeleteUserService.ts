import { getCustomRepository } from "typeorm"
import { UsersReposirories } from "../repositories/UsersRepositories"

class DeleteUserService {
    async execute(id: number) {
        const userRepositories = getCustomRepository(UsersReposirories);
        const user = await userRepositories.findOne(id);
        
        if(!id) return {message: "informe o id corretamente"}
        if(!user) return {message: "o id não é válido"}

        try {
            await userRepositories.remove(user)
            return {message: "user deleted"}
        } catch (error) {
            return error
        }
    }
}

export { DeleteUserService }