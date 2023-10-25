import React from "react";
import  ReactDOM  from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
    [
        React.createElement("div",{ id: "child1" }, [
            React.createElement("h1", {id : "heading"}, "This is heading 1"),
            React.createElement("h2", {id : "heading"}, "This is heading 2")
        ]),
        React.createElement("div",{ id: "child2" }, [
            React.createElement("h1", {id : "heading"}, "This is heading 1"),
            React.createElement("h2", {id : "heading"}, "This is heading 2")
        ])
    ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent)
console.log(parent)