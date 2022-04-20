import React from "react";
import "../css/Footer.css" // Use 2 dots

const Footer = () => {
    const name = "Edrian"
    return(
        <footer>
            <p>
                Copyright &copy; {name}
            </p>
        </footer>
    )
}

export default Footer