import React from "react"
import ReactDOM from 'react-dom/client'

/*
- header
    logo
    nav Items
- Body
    SearchBar
    CardContainer
    Cards
        Image
        Rating
        Title
- Footer
    Copyrights
    Social LInks
*/

const root = ReactDOM.createRoot(document.querySelector(".root"))

const resObj =
{
    "status": "success",
    "message": "Restaurants fetched successfully",
    "data": {
        "restaurants": [
            {
                "id": "res_001",
                "name": "Burger House",
                "cloudinaryImageId": "burger_house",
                "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
                "cuisines": ["Burgers", "American", "Fast Food"],
                "avgRating": 4.5,
                "totalRatings": 1250,
                "costForTwo": 350,
                "deliveryTime": 25,
                "isOpen": true,
                "promoted": true,
                "offer": {
                    "title": "50% OFF",
                    "description": "Up to ₹100"
                },
                "location": {
                    "area": "Vesu",
                    "city": "Surat"
                },
                "availability": "AVAILABLE",
                "menuUrl": "/restaurant/res_001"
            },
            {
                "id": "res_002",
                "name": "Pizza Paradise",
                "cloudinaryImageId": "pizza_paradise",
                "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
                "cuisines": ["Pizza", "Italian", "Pasta"],
                "avgRating": 4.3,
                "totalRatings": 980,
                "costForTwo": 500,
                "deliveryTime": 35,
                "isOpen": true,
                "promoted": false,
                "offer": {
                    "title": "40% OFF",
                    "description": "Up to ₹120"
                },
                "location": {
                    "area": "Adajan",
                    "city": "Surat"
                },
                "availability": "AVAILABLE",
                "menuUrl": "/restaurant/res_002"
            },
            {
                "id": "res_003",
                "name": "Spice Junction",
                "cloudinaryImageId": "spice_junction",
                "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
                "cuisines": ["North Indian", "Thalis", "Chinese"],
                "avgRating": 4.1,
                "totalRatings": 760,
                "costForTwo": 400,
                "deliveryTime": 30,
                "isOpen": true,
                "promoted": false,
                "offer": {
                    "title": "30% OFF",
                    "description": "Up to ₹75"
                },
                "location": {
                    "area": "City Light",
                    "city": "Surat"
                },
                "availability": "AVAILABLE",
                "menuUrl": "/restaurant/res_003"
            },
            {
                "id": "res_004",
                "name": "Sushi World",
                "cloudinaryImageId": "sushi_world",
                "imageUrl": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
                "cuisines": ["Japanese", "Sushi", "Asian"],
                "avgRating": 4.7,
                "totalRatings": 540,
                "costForTwo": 800,
                "deliveryTime": 40,
                "isOpen": true,
                "promoted": true,
                "offer": {
                    "title": "20% OFF",
                    "description": "Up to ₹150"
                },
                "location": {
                    "area": "Piplod",
                    "city": "Surat"
                },
                "availability": "AVAILABLE",
                "menuUrl": "/restaurant/res_004"
            },
            {
                "id": "res_005",
                "name": "Sweet Cravings",
                "cloudinaryImageId": "sweet_cravings",
                "imageUrl": "https://images.unsplash.com/photo-1551024506-0bccd828d307",
                "cuisines": ["Desserts", "Bakery", "Ice Cream"],
                "avgRating": 4.4,
                "totalRatings": 1100,
                "costForTwo": 250,
                "deliveryTime": 20,
                "isOpen": true,
                "promoted": false,
                "offer": {
                    "title": "BUY 1 GET 1",
                    "description": "On selected items"
                },
                "location": {
                    "area": "Vesu",
                    "city": "Surat"
                },
                "availability": "AVAILABLE",
                "menuUrl": "/restaurant/res_005"
            }
        ],
        "pagination": {
            "page": 1,
            "limit": 5,
            "total": 5,
            "hasNextPage": false
        }
    }
}


const Card = (props) => {

    // Destructuring
    // const {res , imgUrl , rating , cuisine} = props
    const { resData } = props
    return (
        <div className="res-card">
            {/* <h2>{props.res}</h2>
            <div className="image">
                <img src={props.imgUrl} alt="" />
            </div>
            <h2>{props.rating}</h2>
            <span>{props.cuisine}</span> */}

            <h2>{resData.name}</h2>
            <div className="image">
                <img src={resData.imageUrl} alt="" />
            </div>
            <h2>{resData.rating}</h2>
            <span>{resData.cuisines.join(',')}</span>
        </div>
    )
}

const Body = () => {
    return <main>
        <div className="search">
            <input type="text" placeholder="Enter Here" />
            <button>Search</button>
        </div>
        <div className="res-container">

            {/* Props Examples */}
            {/* <Card imgUrl="https://woodchop.in/cdn/shop/files/ChatGPTImageJan28_2026_12_28_21AM2.png?v=1769540476" res="KFC" cuisine="Pizza-Burger . FastFood" rating="4.4 Stars" />

            <Card imgUrl="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" res="MeghnaFoods" cuisine="Biryani,North-Indian" rating="4 Stars" /> */}

            {/* Example of Usage of production ready data from Backend */}
            <Card key={resObj.data.restaurants[0].id} resData={resObj.data.restaurants[0]} />
            {resObj.data.restaurants.map(res => (
            <Card key={res.id} resData={res} />
            ))}
        </div>
    </main>
}

const Header = () => {
    return <nav>
        <div className="logo">
            <img height={100} src="https://cdn.dribbble.com/userupload/49143782/file/06ae63b91206782b982c39059d70c237.jpg?resize=400x0" alt="" />
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

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}
root.render(<AppLayout />)