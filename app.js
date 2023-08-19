import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "head" }, "Hello world");
// here heading is a object.and the object is a react element.the react element take care all about the elemets to understand the broswr.
// in the brackets is attributes
// we just created a element from the core react .
const root = ReactDOM.createRoot(document.getElementById("root"));
// for the under standig to the broswrer we need a reactDom with the help of RDom we create a root .
root.render(heading);
// Now that root is added to the document
