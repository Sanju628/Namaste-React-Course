import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Welcome to the episode 3rd of the react</h1>;

const FirstComponent = () => {
    return (
        <>
        {heading}
        <h1>Welcome to the react component</h1>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FirstComponent/>)