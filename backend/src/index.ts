import  express  from "express";
import dotenv from "dotenv";
import authorRouter from "./routes/authorRouter"
import bookRouter from "./routes/bookRouter"
import { PrismaClient } from "@prisma/client";
import prisma from "prisma"
import cors from "cors";
import { PrismaClientUnknownRequestError } from "@prisma/client/runtime/library";


const book = new PrismaClient().book


const app = express();
app.use(cors());

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json())

app.use('/books', bookRouter)
app.use('/authors', authorRouter)
app.get('/books/:id', async (request, response) => {
    try {
        const  id  = parseInt(request.params.id, 10);
        const books = await book.findUnique({
            where: {id}
        })
        return response.status(200).json(books);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
});

app.put('/books/:id', async (request, response) => {
    try {

        const { authorId, judul, penerbit, deskripsi} = request.body
        const  id  = parseInt(request.params.id, 10);
        const updatedItem = await book.update({
            where: { id },
            data: { authorId, judul, penerbit, deskripsi },
          });
      
          response.json(updatedItem);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
});


app.delete('/books/:id', async (request, response) => {
    try {

        const { authorId, judul, penerbit, deskripsi} = request.body
        const  id  = parseInt(request.params.id, 10);
        const deleteItem = await book.delete({
            where: {
                id
            }
            
          });
      
          response.json(deleteItem);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
});


app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});