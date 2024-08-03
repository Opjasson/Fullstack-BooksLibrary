import React from "react";
import myimage from "./assets/library.png";
import Waicon from "./assets/whastapp.png";
import Emailicon from "./assets/email.png";
import IgIcon from "./assets/instagram.png";

const Category: React.FC = () => {
    return (
        <main className="mt-16">
            <div className="flex flex-wrap sm:justify-normal justify-center">
                <img src={myimage} alt="" className="sm:h-80 h-52 sm:mr-10 sm:ml-0 ml-6 " />
                <div className="w-5/12 sm:text-left text-center mt-28 sm:ml-10 ml-7">
                    <h1 className="text-4xl font-bold border-b-4 border-slate-800 w-fit mb-5">
                        <span className="text-red-600">About</span> Me
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        In officia provident ducimus quam ratione,
                        exercitationem doloribus repellendus nemo corrupti
                        eveniet!
                    </p>
                </div>
            </div>
            <footer className="mt-28 sm:w-2/4 w-full m-auto border-t-4 border-slate-700 pt-5">
                <div className="flex w-56 justify-between m-auto">
                    <a href="">
                        <img src={Waicon} alt="Whastapp" className="h-10" />
                    </a>

                    <a href="">
                        <img src={IgIcon} alt="Instagram" className="h-10" />
                    </a>

                    <a href="">
                        <img src={Emailicon} alt="Email" className="h-10" />
                    </a>
                </div>

                <div className="mt-4">
                    <ul>
                        <li>
                            <a href="/">-- Home --</a>
                        </li>

                        <li>
                            <a href="/about">-- About --</a>
                        </li>

                        <li>
                            <a href="/category">-- Category --</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </main>
    );
};
export default Category;
