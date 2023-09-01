import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => its create react elelement a (object) => when we render to the dom it becomes to the html element
// jsx =>React.createElement=> its create react elelement a (object) => when we render to the dom it becomes to the html element
const heading = React.createElement("h1", { id: "head" }, "Hello world");
const jsxHeading = <h1 id="head">Now I am using jsx syntax</h1>;

// here heading is a object.and the object is a react element.the react element take care all about the elemets to understand the broswr.
// in the brackets is attributes
// we just created a element from the core react .
// ------------------------------------------
// for react components
// a function returns the jsx code is a functional component
const HeadingComponent = () => {
  return <h1>Nameste react componets</h1>;
};
// ---------------------------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
// for the under standig to the broswrer we need a reactDom with the help of RDom we create a root .
root.render(<HeadingComponent />);
// Now that root is added to the document
// -------------------------------------------------------------------------------------

// to create above elements evry tme it is painfull soo we are using jsx.

// jsx is like html or xml syntax
// <h1>now I am using jsx syntax</h1> when this is executed it becomes like a react element
// js engine does not understand jsx
// js engine understands the javascript
// js engine understands the ecma script
// parcel behind the scene understnadsing to the jsx to broswer
// when we write jsxcode(transpiled before it eaches the js engine)
//   transpiled is done by parcel ---> it gives this work to babel--> it does when ever we write code that transpiles the jsx to understands the js engine
// a function returns the jsx code is a functional component
// jsx takes care about the injections