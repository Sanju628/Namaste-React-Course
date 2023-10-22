import React from 'react';
import ReactDOM from 'react-dom/client';

const JSXHeading = () => <h1 id="heading">Namaste ReactJs 🚀</h1>



const ReactComponent = () => (<div>
        <JSXHeading/>
        <h1>Welcome to the react ReactComponent</h1>
    </div>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ReactComponent/>);