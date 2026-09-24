
// via JS
// const heading = document.createElement("h1")
// heading.innerHTML = "This is From JavaScript"
// heading.setAttribute("class","Red")
// document.querySelector(".Box").appendChild(heading)

// Via React
// const heading = React.createElement(
//     "h1",
//     {
//         "className":"Red",
//     },
//     "This is From React"
// )

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
                "height":"200px"
            },
        ),
        React.createElement(
            "h1",
            {
                "className": "Red",
            },
            "Itachi Uchiha"
        )
    ]
)

const Root = ReactDOM.createRoot(document.querySelector(".Box"))

// Root.render(heading)

Root.render(parent)