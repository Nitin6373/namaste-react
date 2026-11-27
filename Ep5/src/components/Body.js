import Card from "./Card"
import { resObj } from "../utils/mockData"
import { useEffect, useState } from "react"
import { ResCard } from "./Pro"



const Body = () => {

    // Updating the Normal Js ListofREs variable will not signal react to rerender the page
    // let ListOfRes = resObj;

    const [ListofRes, setListofRes] = useState(resObj)
    /*
        what's with this new syntax of state declaration
        it's nothing special 
        it's just normal JS
        useState hook returns an array which contains two arguments 
        first = State variable
        second = Function to modify the State & trigger the diff algorithm
        can we write differently
        yes

        const arr = useState(resObj)
        const [ListofRes,setListofRes] = arr
            or
        const ListofRes = arr[0]
        const setListofRes = arr[1]

        when we distructure using Obj
        we use 
        const {keyname} = obj;
        means that key exists in the obj and we want its value in this provided variable.

        when we distructure from array
        we provide the same no. of elements in [] as the arr contains

        here arr contains two
        so 
        const [first,setfirst] = arr;
    */
    // State are the powerful variables
    // REact keeps an eye on all state variable
    // react creates a virtual Dom of the react elements 
    // Ex : this main TAg
    // whenever state change the react check that what's
    // the difference between the old virtual Dom and the New virtual Dom.
    // whenever we use the setState function it triggers the diff algorithm which checks and finds the difference between the old and new virtual Dom.
    // After react gets the diff , it updates the Dom with new virtual Dom.


    /*
    Ep6 Started : 26 Nov

    UseEffect HOok = a simple Js Function which is given to us by React.

    Takes Two Arguments:
    First = A Callback Function = ()=>{}
    Second = a Dependency Array = []

    [] = After whole Component is Rendered , Execute Once
    */

    useEffect(() => {
        console.log("UseEffect Called");
        fetchData()
    }, [])

    const [apidata, setApidata] = useState(null)
    const [txt, setText] = useState("")
    const FinalList = apidata?.filter(res => res.title.toLowerCase().includes(txt.toLowerCase()))

    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/products")

        const json = await data.json()
        // console.log(json);

        // setTimeout(() => {
        setApidata(json?.products)
        // }, 2000);
    }

    console.log("Rendered")
    return <main>
        <div className="search">
            <input type="text" name="txtBox" onChange={(e) => setText(e.target.value)} placeholder="Enter Here" value={txt} />
            <button>
                Search
            </button>
            {/* <button onClick={() => {
                setListofRes(ListofRes.filter(res => (
                    res.avgRating > 4
                )))
            }}>Filter</button> */}
        </div>
        <h1>Product Card</h1>
        <div className="res-container">

            {
                FinalList ?
                    FinalList.map(resData => {
                        return <ResCard key={resData.id} resData={resData} />
                    })
                    : <div className="loading">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
            }

            {/* Props Examples */}
            {/* <Card imgUrl="https://woodchop.in/cdn/shop/files/ChatGPTImageJan28_2026_12_28_21AM2.png?v=1769540476" res="KFC" cuisine="Pizza-Burger . FastFood" rating="4.4 Stars" />

            <Card imgUrl="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" res="MeghnaFoods" cuisine="Biryani,North-Indian" rating="4 Stars" /> */}

            {/* Example of Usage of production ready data from Backend */}
        </div>
        {/* <h1>Restaurant Cards</h1> */}

        {/* <div className="res-container">

            {ListofRes.map(res => (
                <Card key={res.id} resData={res} />
            ))}
        </div> */}

    </main>
}

export default Body