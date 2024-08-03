import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import AddBooksForm from "./addBooks";

const Updatedata = () => {
    const [books, setbooks] = useState([]);
    useEffect(() => {
        axios
    
            .get("http://localhost:1225/books")
            .then((Response) => {
                setbooks(Response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-slate-500 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                AuthorId
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Judul
                            </th>
                            <th scope="col" className="px-6 py-3">
                                penerbit
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Deskripsi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    {books.map((book, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {book.id}
                                </th>
                                <td className="px-6 py-4">
                                    {book.authorId}
                                </td>
                                <td className="px-6 py-4">
                                    {book.judul}
                                </td>
                                    
                                <td className="px-6 py-4">
                                    {book.penerbit}
                                </td>
                                
                                <td className="px-6 py-4">
                                    {book.deskripsi}
                                </td>
                                
                                    

                                <td className="px-6 py-4">
                                    <Link className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to={`/books/updatebooks/${book.id}`}>Update</Link>
                                    
                                    <Link className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" to={`/books/deletebooks/${book.id}`}>Delete</Link>
                                </td>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
            </div>

    );
};
export default Updatedata;