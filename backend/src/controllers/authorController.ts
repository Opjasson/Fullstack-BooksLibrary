import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const authorClient = new PrismaClient().author;

//get all author 

export const getAllAuthor = async (req: Request,res: Response) => {
    try {
        // const authorId = req.params.id
        const allAuthor = await authorClient.findMany({
            include:{
                books: {
                        
                }
            }
        })
        res.status(200).send({
            message: "get all author succesfully",
            data: allAuthor
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({error: 'internal server error'});
    }
};


export const getAuthorById = async (req: Request, res: Response) => {
    try {
      const authorId = parseInt(req.params.id);
      const author = await authorClient.findUnique({
        where: {
          id: authorId, // Use authorId instead of Int
        },
        include: {
          books: true,
        },
      });
  
      if (author) {
        res.status(200).json(author);
      } else {
        res.status(404).json({ message: 'Author not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

// Create Authors

export const createAuthor = async (req: Request, res: Response) => {
    try {
        const authorData = req.body
        const author = await authorClient.create({
            data: authorData
        })
        res.status(201).send({
            message: "author created",
            data : author
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({error: 'internal server error'});
        
    }
}

export const deleteAuthor = async (req: Request, res: Response) => {
    try {
        const authorId = parseInt(req.params.id)
        const author = await authorClient.findUnique({
            where: {
                id: authorId
            },
        });
        res.status(201).send({
            message: "author created",
            data : author
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({error: 'internal server error'});
        
    }
}