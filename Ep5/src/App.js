
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.js";

const root = ReactDOM.createRoot(document.querySelector(".root"))

const AppCmp = ()=>{
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

root.render(<AppCmp/>)