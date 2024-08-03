import React, { useState } from "react";
import "./App.css";


const Dropdownmenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
                <button
                    onClick={toggleMenu}
                    id="dropdown-toggle"
                    className="text-white bg-blue-700 hover:bg-blue-800 active:ring-4 active:outline-none active:ring-blue-300 font-medium rounded-lg text-base sm:mt-0 mt-1 sm:px-5 px-6 sm:py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"> {isOpen ? 'Close ' : 'Open '}
                    Menu
                </button>
                <div
                    id="dropdown"
                    className="z-10 top-12 absolute bg-white divide-y divide-gray-100 rounded-lg shadow sm:w-44 w-36  dark:bg-gray-700">
                    {isOpen && (
                        <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDefaultButton">
                            <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <a href="/createAuthors">Create authors</a>
                            </li>
                            <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <a href="/createBooks">Create books</a>
                            </li>
                            <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <a href="/update">Update</a>
                            </li>
                            
                        </ul>
                )}
                </div>
                    
            </div>

    );
};
export default Dropdownmenu;
