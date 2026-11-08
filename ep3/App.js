import React from "react";
import ReactDOM from "react-dom/client"


const root = ReactDOM.createRoot(document.querySelector(".root"))

const heading = React.createElement(
    "div",
    {
        className: "red"
    },
    React.createElement("h1", {}, "Div > h1")
)
root.render(heading)


// Facebook Developers noticed that creating and rendering elements in the core React was very painful and it was not readable either 

// Solution : JSX
// JSX is a extension which allows developers to write html like code in the Javascript.EX:

const Jsxheading = <div className="red jsx"> <h1>"Div - h1"</h1></div>

root.render(Jsxheading)


// Is Writing This type of jsx in js valid ?

// Can we consider this a valid Javascript

// No,a valid Js is a Js that Js engine can understand directly

// Proof:try to write the same jsx in Chrome console directly

// at there we can execute any valid Js 

// but this won't execute = NOt a valid Js

// Then how it is working 


// Flow :
// IN REact core 
// React.createElement -> React Element[Just a Js Object] -> REnder -> Becomes Html Element

// IN Jsx

// Who Converts This Jsx into React Element at Runtime

// Bebel => a node package which we get along with the parcel
// bebel => is a js compiler , it converts the jsx into the REact element

//         BEbel
//          ||
// JSX -> Converted at runtime -> React.createElement -> React Element[Just a Js Object] -> REnder -> Becomes Html Element

// That's why this both lines gives the same output.
console.log(heading);
console.log(Jsxheading);


// React Component

const rootjsx = ReactDOM.createRoot(document.querySelector(".rootJSX"))

const Heading2 = () => <span>From HC2</span>

const HeadingComp = () => {
    return <h1 className="red">From Heading Component</h1>
}

// In the below way , 
// this will implicitly return the one value we provide 
// that's why only one main element

// React Component's Name always start from Uppercase Letter
const NestComp = () => (
    <>
        <div>
            <Heading2 />
            <HeadingComp />
        </div>
        <div>
            <h2>Can't Write Two Root Children in the ReactElement</h2>
        </div>
    </>
)

// console.log(<NestComp />)

// Arrow Function
// const FirstCmp = () => (
//     <h1>This is The First Component.</h1>
// )

// We can do Normal Function Also , but Return keyword is written explicitly
const FirstCmp = function () {
    return <h1>This is The First Component.</h1>
}

const reactEl = <h1 className="red">ReactElement 🚀 , Love You {1000 * 3}</h1>

// Component Inside a Component Is Known as Component Composition
const SecComp = () => (
    <div className="Container">
        <FirstCmp />
        <h1>Namaste From Second Component.</h1>
        {
            // WE can write any piece of Js inside JSx
        }
        {
            // By Using The Curly Brases
        }
        {reactEl}
        {console.log("Hello From Console")}
    </div>
)

// We can also write ReactComponent inside the REact Element

// What if we will use some data which is returned by some api
// data can be dangerous also 
// if data returns Js then this will be executed once we use it inside jsx

// const data = api.getdata()

// This Also WorksFine
const mainEl = (
    <div>
        {/* {data} */}
        {/* this works right so that means if the data returned by api is also a Js */}

        {/* we have to take precautions right */}

        {/* no , we don't have to do anything , cause JSX Senitize the code before converting into the react Element and executing the code */}

        {/* feel free to use it */}

        {/* {console.log('hi')} */}
        <h1 className="red">Component Inside The React Element</h1>

        {/* this both lines are same */}
        <SecComp />{/*  self closing tag */}
        <SecComp></SecComp>{/*  opening and closing pair of tags */}

        {/* at the end of the day all the react components are normal functions which returns JSX , which is converted in the REact Element */}

        {SecComp()}
    </div>
)


rootjsx.render(mainEl)


// What we Learned


/*
in Core react flow
React createElement -> REact Element -> rEnder -> Html Element

with jsx
jsx -> bebel converts in the react create element -> react element -> render -> html element

with jsx we can write js inside the html like syntax of jsx

using
{Js code}

Component Composition

using REact Component inside other react Component
in simple words nesting of react components

component are just function which returns jsx

use react element inside component
{reactElement}

how to use react component

three ways
<component/>
<component></component>

component are just a function 
that's why 
{Component()} also works

*/

