import React from "react";
import "./App.css";
import Home from "./listbook";
import Nav from "./navApp";
import Footer from "./footer";


const App: React.FC = () => {
    return (
      <div>
        <Nav />
  
        <Footer />
      </div>
    );
};

export default App;
