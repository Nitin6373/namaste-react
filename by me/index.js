import React from "react";
import ReactDOM from "react-dom/client"


const root = ReactDOM.createRoot(document.querySelector(".root"))

{/* <div class="container">
    <h1>My Website</h1>

    <p>This is my website.</p>

    <img src="photo.jpg" alt="My Photo">

    <br>

    <button onclick="alert('Hello')">
        Click Me
    </button>
</div> */}

const jsxelement = (
    <div className="container">
        <h2>Login</h2>
        <form action="">
            <div>
            <label htmlFor="Email">Email : </label>
            <input type="text" name="Email" id="Email"/>
            </div>
            <div>
                <label htmlFor="Pass">PassWord : </label>
                <input type="text" name="Pass" id="Pass"/>
            </div>
            <div>
                <button onClick={Handler}>
                    Submit
                </button>
            </div>
        </form>
    </div>
)

function Handler(){
    alert("Oh Dude!")
}
root.render(jsxelement)