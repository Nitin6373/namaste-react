
export const ResCard = ({ resData }) => {
    return <div className="res-card">
        <h2>{resData.brand}</h2>
        <div className="image">
            <img src={resData.images[0]} alt="" />
        </div>
        <h2>{resData.rating} Stars</h2>
        <h2>Rupees : {resData.price}</h2>
        <span>{resData.title}</span>
    </div>
}