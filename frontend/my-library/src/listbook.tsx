import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
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
        <div className="mt-10 flex flex-wrap justify-evenly text-left">
            {books.map((book, index) => (
                <div className="sm:w-52 w-44 p-5 border-2 border-white rounded-xl mb-3">
                    <Link to={`/books/detailbooks/${book.id}`}>
                        {book.judul}
                    </Link>
                    
                    <h2 className="sm:text-lg text-base font-medium">
                        {book.penerbit}
                    </h2>
                    <p>{book.deskripsi}</p>
                </div>
            ))}
        </div>
    );
};
export default Home;
