import { getCustomRepository } from "typeorm"
import { UsersReposirories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    async execute({name, email, admin = false, password}: IUserRequest) {
        const userRepository = getCustomRepository(UsersReposirories);
        const userAlreadyExist = await userRepository.findOne({email});
        const createUser = userRepository.create({name, password, email, admin});

        if(!email) throw new Error("Email incorrect!");
        if(userAlreadyExist) throw new Error("User already exists!");
        
        await userRepository.save(createUser);

        return createUser;
    }
}

export { CreateUserService }