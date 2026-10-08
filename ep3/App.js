import React from "react";
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.querySelector(".root"))

const Comp1 = () => (
    <h2>Comp1</h2>
)

const Comp2 = () => (
    <>
        <div>
            <Comp1 />
            <p>Something Came from other component.</p>
        </div>
    </>
)


root.render(<Comp2 />)