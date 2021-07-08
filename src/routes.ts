import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserController } from "./controllers/ListUserController";
import { EditUserController } from "./controllers/EditUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { FindUserController } from "./controllers/FindUserController";

const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const editUserController = new EditUserController();
const deleteUserController = new DeleteUserController();
const findUserController = new FindUserController();

router.get('/', listUserController.handle)
router.get('/find-user', findUserController.handle)

router.post('/user', createUserController.handle)
router.post('/edit', editUserController.handle)
router.delete('/delete-user', deleteUserController.handle)

export { router }