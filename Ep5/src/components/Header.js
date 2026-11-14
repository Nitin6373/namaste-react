import React from "react"
import ReactDOM from "react-dom/client"
import { LOGO_URL } from "../utils/constants"

const Header = () => {
    return <nav>
        <div className="logo">
            <img height={100} src={LOGO_URL} alt="" />
        </div>
        <div className="navlist">
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </nav>
}

export default Header