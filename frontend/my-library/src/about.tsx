import React from "react";
import myimage from "./assets/library.png";
import Waicon from "./assets/whastapp.png";
import Emailicon from "./assets/email.png";
import IgIcon from "./assets/instagram.png";

const About: React.FC = () => {
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
        </main>
    );
};
export default About;
