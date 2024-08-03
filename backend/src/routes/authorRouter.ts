import { getAllAuthor, createAuthor, getAuthorById } from "../controllers/authorController";
import { Router } from "express";

const authorRouter = Router()

authorRouter.get('/',getAllAuthor)
authorRouter.get('/:id',getAuthorById)
authorRouter.post('/create',createAuthor)
authorRouter.put('/:id',createAuthor)
authorRouter.delete('/delete/:id',createAuthor)



export default authorRouter;
