import { getCustomRepository } from "typeorm"
import { UsersReposirories } from "../repositories/UsersRepositories"

class FindUserService {
    async execute(id: number) {
        const usersRepositories = getCustomRepository(UsersReposirories);
        const user = await usersRepositories.findOne(id);

        if(!id) throw new Error("id invalid!")
        if(!user) throw new Error("the id doesn't exist")

        return user;
    }
}

export { FindUserService }