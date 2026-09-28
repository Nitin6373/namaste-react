
import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement(
    "div",
    {
        "className": "FirstDiv",
    },
    [
        React.createElement(
            "img",
            {
                "src":"https://everanta.in/cdn/shop/files/Itachi_Uchiha_Anime_Canvas_Print_Main_Image.webp?v=1766484844&width=1946",
                "height":"200px",
                "key":"Image"
            },
        ),
        React.createElement(
            "h1",
            {
                "className": "Red",
                "key":"Heading"
            },
            "Itachi Uchiha"
        )
    ]
)

const Root = ReactDOM.createRoot(document.querySelector(".Box"))

// Root.render(heading)

Root.render(parent)