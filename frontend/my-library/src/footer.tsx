import React from "react";
import Waicon from "./assets/whastapp.png";
import Emailicon from "./assets/email.png";
import IgIcon from "./assets/instagram.png";

const Footer: React.FC = () => {
    return (   
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
    );
};
export default Footer;
