import React from "react";
import "./navbar.scss"

const Navbar = () => {
    return(
        <nav>
            <img className="glasses" src="/public/glasses.svg" alt=''/>
            <a>ФІЛЬМИ</a>
            <a>СЕРІАЛИ</a>
            <a>МУЛЬТФІЛЬМИ</a>
            <a>ТОП 100</a>
        </nav>
    )
}

export default Navbar;