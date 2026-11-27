
import { useState } from "react"
import { LOGO_URL } from "../utils/constants"

const Header = () => {
    // let btnLogin = "Login"
    // Try To build a button which toggles it's text between login and logout

    const [btnState,setbtnState] = useState("Login")
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
                <button onClick={()=>{
                    // btnLogin = btnLogin === "Login" ? "Logout" : "Login"
                    // console.log(btnLogin)
                    
                    // now we have created a state variable so we only need to change this
                    // but we can't change a state like this
                    // this will trigger error of updating const var 
                    // won't trigger rerender aswell

                    // btnState = btnState === "Login" ? "Logout" : "Login"
                    setbtnState(btnState === "Login" ? "Logout" : "Login")

                }}>{btnState}</button>
            </ul>
        </div>
    </nav>
}

export default Header