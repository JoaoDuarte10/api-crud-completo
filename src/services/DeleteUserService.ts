import { getCustomRepository } from "typeorm"
import { UsersReposirories } from "../repositories/UsersRepositories"

class DeleteUserService {
    async execute(id: number) {
        const userRepositories = getCustomRepository(UsersReposirories);
        const user = await userRepositories.findOne(id);
        
        if(!id) return {message: "inform the id correctly"}
        if(!user) return {message: "the id doesn't valid"}

        await userRepositories.remove(user).catch(error => error)

        return {message: "user deleted"}
    }
}

export { DeleteUserService }