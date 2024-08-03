import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Request, Response } from "express";
import express from 'express';

const bookClient = new PrismaClient().book

export const getAllBooks = async (req:Request, res:Response) => {
    try {
        const allBooks = await bookClient.findMany();

        res.status(200).send({
            msg : "get all books succesfully",
            data : allBooks
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({error: 'internal server error'});
        }
    };



export const createBooks = async (req: Request, res: Response) => {
    try {
       
        const { judul , penerbit, deskripsi, authorId} = req.body;
        const book = await bookClient.create({
            data: {
                judul : judul,
                penerbit : penerbit,
                deskripsi : deskripsi,
                author : {connect: {id : authorId}}
            }
        })
        res.status(201).send({
            msg: "Create data book SuccesFully",
            data: book
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({error: 'internal server error'});
    }
}

export const createBooksById = async (req: Request, res: Response) => {
    try {
       
        const { judul , penerbit, deskripsi, authorId} = req.body;
        const book = await bookClient.create({
            data: {
                judul : judul,
                penerbit : penerbit,
                deskripsi : deskripsi,
                author : {connect: {id : authorId}}
            }
        })
        res.status(201).send({
            msg: "Create data book SuccesFully",
            data: book
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({error: 'internal server error'});
    }
}





