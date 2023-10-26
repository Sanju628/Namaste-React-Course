import { CONFIG_URL, STAR_IMG } from "../utils/Constants";
const ResturantCard = (props) => {
    const {items} = props;
    const {name,avgRating,cuisines,areaName,sla,cloudinaryImageId} = items;
    const imgsrc = `${CONFIG_URL}${cloudinaryImageId}`;
    return (
        <div className="cardContainer">
            <img 
                className="logoImg"
                src={imgsrc}
            />
            <h4>{name}</h4>
            <h4 className="resRating">
                <img className="starRating" src={STAR_IMG}/>
                {avgRating}
            </h4>
            <div className="cuisStyle">{cuisines.join(", ")}</div>
            <div className="timeStyle">{sla.deliveryTime} Minutes</div>
            <div className="locationStyle">{areaName}</div>
        </div>
    );
}

export default ResturantCard;