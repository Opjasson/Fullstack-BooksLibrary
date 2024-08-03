import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import "./App.css";
import Dropdownmenu from "./dropdownmenu";
import About from "./about";
import AddItemForm from "./formcreate";
import Home from "./listbook";
import AddBooksForm from "./addBooks";
import Updatedata from "./update";
import Updatebookform from "./updateBooks";
import Deletebooks from "./deleteBook";
import Detailbooks from "./detailbooks";


const Nav: React.FC = () => {
    return (
        <Router>
            <nav className="flex justify-between items-center object-center shadow-lg p-5 ">
              <Link to="/">
                <h1 className="font-bold sm:text-2xl sm:mt-0 mt-2 text-sm">JssN-library</h1>
              </Link>
                <ul className="flex sm:text-lg text-sm">
                    <li className="mt-2">
                        <Link to="/about">About</Link>
                    </li>

                    <li className="mx-5 mt-2">
                        <Link to="/list">All list</Link>
                    </li>

                    <li>
                        <Dropdownmenu />
                    </li>
                </ul>
            </nav>
            
            
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/createAuthors" element={<AddItemForm />} />
                <Route path="/createBooks" element={<AddBooksForm />} />
                <Route path="/update" element={<Updatedata />} />
                <Route path="/books/updatebooks/:id" element={<Updatebookform />} />
                <Route path="/books/deletebooks/:id" element={<Deletebooks />} />
                <Route path="/books/detailbooks/:id" element={<Detailbooks />} />
                <Route path="/list" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default Nav;
