import React from "react";
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import Headers from "./components/Header";


const AppLayout = () => {
    return(
        <div className="App">
            <Headers/>
            <Body/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)