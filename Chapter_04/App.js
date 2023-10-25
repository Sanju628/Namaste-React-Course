import React from "react";
import ReactDOM from "react-dom/client";
import data from "./ResData.json";



const ResturantCard = (props) => {
    const {items} = props;
    const {name,avgRating,cuisines,areaName,sla,cloudinaryImageId} = items;
    const imgsrc = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;
    return (
        <div className="cardContainer">
            <img 
                className="logoImg"
                src={imgsrc}
            />
            <h4>{name}</h4>
            <h4 className="resRating">
                <img className="starRating" src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais"/>
                {avgRating}
            </h4>
            <div className="cuisStyle">{cuisines.join(", ")}</div>
            <div className="timeStyle">{sla.deliveryTime} Minutes</div>
            <div className="locationStyle">{areaName}</div>
        </div>
    );
}

const Body = () => {
    const resData = data?.resData;
    return (
        <div className="bodyContainer">
            <div className="search">
                <input type="text"/>
            </div>
            <div className="outterCard">
                {resData.map((items) => (
                    <ResturantCard key={items.info.id} items={items.info} />
                ))}
            </div>
        </div>

    );
}

const Heading = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img 
                    className="logo"
                    src="https://www.ciim.in/wp-content/uploads/2022/01/Swiggy-img.jpg"
                />
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Services</li>
                    <li>SignIn</li>
                </ul>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return(
        <div className="App">
            <Heading/>
            <Body/>
        </div>
    );

}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>)