import React from "react";
import NavBar from "./navBar";
import IO from "./io";
import Messeges from "./messege";
import "./style2.css"

const Home2=()=>{
    return (
      <div>
       <div><NavBar /></div>
        <IO/>
        <Messeges />
        <br />
      </div>
    );
}


export default Home2;