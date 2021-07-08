import { getCustomRepository,  } from "typeorm";
import { UsersReposirories } from "../repositories/UsersRepositories"

class ListUserService {
    async execute() {
        const listUsers = getCustomRepository(UsersReposirories);
        const users = await listUsers.find()

        return users;
    }
}

export { ListUserService }