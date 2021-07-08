import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserController } from "./controllers/ListUserController";
import { EditUserController } from "./controllers/EditUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";

const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const editUserController = new EditUserController();
const deleteUserController = new DeleteUserController();

router.get('/', listUserController.handle)

router.post('/user', createUserController.handle)
router.post('/edit', editUserController.handle)
router.delete('/delete-user', deleteUserController.handle)

export { router }