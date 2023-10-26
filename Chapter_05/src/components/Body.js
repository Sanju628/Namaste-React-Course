import ResturantCard from "./ResturantCard";
import data from "../utils/resData";
import { useState } from "react";

const Body = () => {
    const resData = data?.resData;
    const [listOfRestaurants, setListOfRestaurants] = useState(resData);
    return (
        <div className="bodyContainer">
            <div className="filter">
                <button className="filterBtn" onClick={() => {
                   const filterRes = listOfRestaurants.filter((resData) => {
                        return resData.info.avgRating > 3.8
                   })
                   setListOfRestaurants(filterRes);
                }}>Top Rated Resturants
                </button>
                
            </div>
            <div className="outterCard">
                {listOfRestaurants.map((items) => (
                    <ResturantCard key={items.info.id} items={items.info} />
                ))}
            </div>
        </div>

    );
}

export default Body;