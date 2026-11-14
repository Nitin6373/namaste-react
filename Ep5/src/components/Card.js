
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

export default Card
