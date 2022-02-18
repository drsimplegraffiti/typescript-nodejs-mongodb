import express, { Request, Response } from "express";
import userHandlerController from '../controllers/user.controller';
const useRouter: express.Router = express.Router();


useRouter.get("/user", userHandlerController);

export default useRouter;