import { request } from "http";
import { getAllBooks, createBooks} from "../controllers/bookController";
import { response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const book = new PrismaClient().book
const routerBooks = Router()

routerBooks.get('/',getAllBooks)
routerBooks.post('/create',createBooks)




export default routerBooks;