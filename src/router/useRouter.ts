import express, { Request, Response } from "express";
import {
    getAllUsersHandler,
    getSingleUserHandler,
    createNewUser,
    deleteUser,
    updateUser
} from '../controllers/user.controller'
const useRouter: express.Router = express.Router();


useRouter.get("/users", getAllUsersHandler);
useRouter.get("/user/:id", getSingleUserHandler);
useRouter.post("/user", createNewUser);
useRouter.delete("/user/:id", deleteUser);
useRouter.put("/user/:id", updateUser);

export default useRouter;