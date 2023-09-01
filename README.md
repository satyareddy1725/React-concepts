# parcel

- creates a Dev build
  -creates a local server
  -hmr hot module replacement see the change and replace the with in the blink of eye
  -file watching algorithms - written in c++

-caching - building up

-image optimization
-minification changes to productiion code
-bundling
-compressing
-consisting hashing
-code splitting
-diffirential bundling - it gives support older versions also
-error handling
-https
-tree shaking - remove unused code for you
-different dev and production bundles

# broswerlist

broswerlist such an powerfull thing its allows all oldest broswers
-read document broswerlist

 <!-- every thing in a react is component -->

# Babel

- broswer doesnt now how many components present in your project its all convert into html finally.

# ReactComponents

# Two types of Componets

- class based components (no body uses now) - OLD
- functional based components - New

# what is a react functional component

- functionalComponent to create with capital letter and its a norma java script function
- functionalComponent always returns the jsx
- when we are rendering the component we have to render like this --> root.render(<HeadingComponent />); and below is the example
  const HeadingComponent = () => (
  <>
  <div id="container">
  <Title />
  <h1 className="heaidng">Namaste React Fucntional Component</h1>
  </div>
  <div id="container-2"></div>
  </>
  );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
root.render(<HeadingComponent />);

- when you are writiing functionalComponent in real function you need to write rturn in function

# imp about {}

- you put these brackets in your functional component you can run any piece of js in that two brackets.
